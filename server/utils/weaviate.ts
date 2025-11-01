import type { WeaviateClient } from 'weaviate-client';
import weaviate, { vectors } from 'weaviate-client';

// Default to 'weaviate' hostname for Docker, fallback to localhost for local dev
const WEAVIATE_HOST = useRuntimeConfig().weaviateHost as string || (process.env.NODE_ENV === 'production' ? 'weaviate' : 'localhost');
const WEAVIATE_URL = useRuntimeConfig().weaviateUrl as string || `http://${WEAVIATE_HOST}:8080`;
const weaviateApiKey = useRuntimeConfig().weaviateApiKey as string;

export async function processPDFAndAddToWeaviate(
  pdfBuffer: Buffer,
  filename: string,
): Promise<{ chunksAdded: number }> {
  const client = await createWeaviateClient();
  const collectionName = 'Documents';

  try {
  // Extract text from PDF
    const text = await extractPDFText(pdfBuffer);

    // Chunk the text
    const chunks = chunkText(text, {
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    // Ensure collection exists
    if (!await ensureCollectionExists(collectionName)) {
      await createCollection(client, collectionName);
    }

    // Add chunks to Weaviate
    const chunksAdded = await addChunksToWeaviate(client, chunks, filename, collectionName);

    return { chunksAdded };
  }
  catch (error: unknown) {
    console.error('Error processing PDF:', error);
    throw new Error(`Failed to process PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  finally {
    await client.close();
  }
}

async function ensureCollectionExists(collectionName: string): Promise<boolean> {
  const client = await createWeaviateClient();
  try {
    // Check if collection exists
    return await client.collections.exists(collectionName);
  }
  catch (error: unknown) {
    // Collection might already exist or there's a connection issue
    console.warn('Error ensuring collection exists:', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
  finally {
    await client.close();
  }
}

async function addChunksToWeaviate(
  client: WeaviateClient,
  chunks: string[],
  source: string,
  collectionName: string,
): Promise<number> {
  try {
    // Ensure collection exists
    if (!await ensureCollectionExists(collectionName)) {
      throw new Error(`Collection ${collectionName} does not exist`);
    }

    const collection = client.collections.use(collectionName);

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
  catch (error: unknown) {
    console.error('Error adding chunks to Weaviate:', error);
    throw new Error(`Failed to add chunks to Weaviate: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function createWeaviateClient() {
  const client: WeaviateClient = await weaviate.connectToLocal(
    {
      host: WEAVIATE_URL.replace('http://', '').replace('https://', ''),
      port: 8080,
      authCredentials: new weaviate.ApiKey(weaviateApiKey),
    },
  );

  const clientReadiness = await client.isReady();
  if (!clientReadiness) {
    throw new Error('Weaviate client is not ready');
  }

  console.log('Weaviate client is ready');

  return client;
}

export async function createCollection(client: WeaviateClient, collectionName: string) {
  const collection = await client.collections.create({
    name: collectionName,
    vectorizers: vectors.text2VecWeaviate(),
  });
  return collection;
}

export async function queryWeaviate(query: string, collectionName: string) {
  const client = await createWeaviateClient();

  const collection = client.collections.use(collectionName);

  const result = await collection.query.nearText(query, {

    certainty: 0.7,
    limit: 10,
  });

  result.objects.forEach((item) => {
    console.log(JSON.stringify(item.properties, null, 2));
  });

  return result;
}

/* function createSimpleWeaviateClient() {
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
} */
