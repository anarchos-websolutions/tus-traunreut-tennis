// Default to 'weaviate' hostname for Docker, fallback to localhost for local dev
const WEAVIATE_HOST = process.env.WEAVIATE_HOST || (process.env.NODE_ENV === 'production' ? 'weaviate' : 'localhost');
const WEAVIATE_URL = process.env.WEAVIATE_URL || `http://${WEAVIATE_HOST}:8080`;

interface WeaviateChunk {
  content: string;
  source: string;
  chunkIndex: number;
}

export async function processPDFAndAddToWeaviate(
  pdfBuffer: Buffer,
  filename: string,
): Promise<{ chunksAdded: number }> {
  // Extract text from PDF
  const text = await extractPDFText(pdfBuffer);

  // Chunk the text
  const chunks = chunkText(text, {
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  // Initialize Weaviate client
  const client = await createWeaviateClient();

  // Ensure collection exists
  await ensureCollectionExists(client, 'Documents');

  // Add chunks to Weaviate
  const chunksAdded = await addChunksToWeaviate(client, chunks, filename);

  return { chunksAdded };
}

async function ensureCollectionExists(client: any, collectionName: string) {
  try {
    // Check if collection exists
    const collections = await client.collections.list();

    if (!collections.find((c: any) => c.name === collectionName)) {
      // Create collection
      await client.collections.create({
        name: collectionName,
        vectorizer: 'none', // We'll add vectors later if needed
        properties: [
          {
            name: 'content',
            dataType: 'text',
          },
          {
            name: 'source',
            dataType: 'text',
          },
          {
            name: 'chunkIndex',
            dataType: 'int',
          },
        ],
      });
    }
  }
  catch (error: any) {
    // Collection might already exist or there's a connection issue
    console.warn('Error ensuring collection exists:', error.message);
  }
}

async function addChunksToWeaviate(
  client: any,
  chunks: string[],
  source: string,
): Promise<number> {
  try {
    const collection = client.collections.get('Documents');

    const objects = chunks.map((chunk, index) => ({
      content: chunk,
      source,
      chunkIndex: index,
    }));

    // Insert in batches
    const batchSize = 10;
    let inserted = 0;

    for (let i = 0; i < objects.length; i += batchSize) {
      const batch = objects.slice(i, i + batchSize);

      await collection.data.insertMany(batch);
      inserted += batch.length;
    }

    return inserted;
  }
  catch (error: any) {
    console.error('Error adding chunks to Weaviate:', error);
    throw new Error(`Failed to add chunks to Weaviate: ${error.message}`);
  }
}

export async function createWeaviateClient() {
  // Using Weaviate JavaScript client v4
  try {
    const { WeaviateClient } = await import('weaviate-ts-client');

    return WeaviateClient.client({
      scheme: 'http',
      host: WEAVIATE_URL.replace('http://', '').replace('https://', ''),
    });
  }
  catch (error) {
    // Fallback: use fetch API directly
    return createSimpleWeaviateClient();
  }
}

function createSimpleWeaviateClient() {
  const weaviateHost = WEAVIATE_URL.replace('http://', '').replace('https://', '').split(':')[0];
  const weaviatePort = WEAVIATE_URL.includes(':8080') ? '8080' : '80';
  const baseUrl = `http://${weaviateHost}:${weaviatePort}`;

  // Simple client using fetch API for Weaviate v1
  return {
    collections: {
      list: async () => {
        const response = await fetch(`${baseUrl}/v1/schema`);
        if (!response.ok) {
          const error = await response.text();
          throw new Error(`Failed to list collections: ${error}`);
        }
        const schema = await response.json();
        return (schema.classes || []).map((c: any) => ({ name: c.class }));
      },
      get: (name: string) => ({
        data: {
          insertMany: async (objects: any[]) => {
            // Weaviate v1 API expects individual POST requests
            for (const obj of objects) {
              const response = await fetch(`${baseUrl}/v1/objects`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  class: name,
                  properties: obj,
                }),
              });
              if (!response.ok) {
                const error = await response.text();
                throw new Error(`Failed to insert object: ${error}`);
              }
            }
          },
        },
      }),
      create: async (config: any) => {
        const response = await fetch(`${baseUrl}/v1/schema`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            class: config.name,
            vectorizer: config.vectorizer || 'none',
            properties: config.properties,
          }),
        });
        if (!response.ok) {
          const error = await response.text();
          throw new Error(`Failed to create collection: ${error}`);
        }
      },
    },
  };
}
