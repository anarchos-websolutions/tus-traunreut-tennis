import { regex } from 'arkregex';

/**
 * Type-safe regex patterns for PDF text extraction
 * Using arkregex for type safety - see https://arktype.io/docs/blog/arkregex
 */

// Match text between ( ) brackets (PDF text objects) - captures the content inside
const textInParensRegex = regex('\\(([^)]+)\\)', 'g');
// Match text between [ ] brackets (PDF text arrays)
const textInSquareBracketsRegex = regex('\\[(.*?)\\]', 'g');
// Match text between ( ) within brackets - captures the content inside parentheses
const textInParensWithinBracketsRegex = regex('\\((.*?)\\)', 'g');
// Match octal escape sequences like \123
const octalEscapeRegex = regex('\\\\([0-7]{1,3})', 'g');
// Match sequences of readable characters (letters, numbers, punctuation, spaces)
const readableTextRegex = regex('[a-zA-Z0-9\\s\\.\\,\\!\\?\\:\\(\\)\\-\\"\\\']{20,}', 'g');
// Match one or more whitespace characters
const whitespaceRegex = regex('\\s+', 'g');

/**
 * Escape sequence regex patterns for replacement
 */
const escapeSequenceRegexes = {
  newline: regex('\\\\n', 'g'),
  carriageReturn: regex('\\\\r', 'g'),
  tab: regex('\\\\t', 'g'),
  backslash: regex('\\\\\\\\', 'g'),
};

/**
 * Extract text from PDF using Bun's native capabilities
 * This uses a simple approach to extract readable text from PDFs
 * Works best with PDFs that have text layers (not scanned images)
 */
export async function extractPDFText(pdfBuffer: Buffer): Promise<string> {
  try {
    // Convert buffer to string to extract readable text
    // PDFs have text content that can be extracted as UTF-8/ASCII strings
    const decoder = new TextDecoder('utf-8', { fatal: false });

    // Get all readable text from the buffer
    const text = decoder.decode(pdfBuffer);

    // Clean up PDF-specific artifacts
    // Remove PDF structure markers and extract content between text operators
    const textMatches: string[] = [];

    // Match text between ( ) brackets (PDF text objects)
    const textInParens = text.match(textInParensRegex);
    if (textInParens) {
      for (const match of textInParens) {
        // Remove parentheses and decode escape sequences
        let cleanText = match.slice(1, -1);
        // Handle common PDF escape sequences using type-safe regex
        cleanText = cleanText.replace(escapeSequenceRegexes.newline, '\n');
        cleanText = cleanText.replace(escapeSequenceRegexes.carriageReturn, '\r');
        cleanText = cleanText.replace(escapeSequenceRegexes.tab, ' ');
        cleanText = cleanText.replace(escapeSequenceRegexes.backslash, '\\');
        // Remove other escape sequences (octal)
        cleanText = cleanText.replace(octalEscapeRegex, (_, oct) => {
          return String.fromCharCode(parseInt(oct, 8));
        });
        if (cleanText.trim().length > 0) {
          textMatches.push(cleanText);
        }
      }
    }

    // Also extract text from TJ and Tj operators (PDF text showing operators)
    const tjMatches = text.match(textInSquareBracketsRegex);
    if (tjMatches) {
      for (const match of tjMatches) {
        const content = match.slice(1, -1);
        // Extract strings from arrays
        const strings = content.match(textInParensWithinBracketsRegex);
        if (strings) {
          for (const str of strings) {
            let cleanText = str.slice(1, -1);
            cleanText = cleanText.replace(escapeSequenceRegexes.newline, '\n');
            cleanText = cleanText.replace(escapeSequenceRegexes.carriageReturn, '\r');
            if (cleanText.trim().length > 0) {
              textMatches.push(cleanText);
            }
          }
        }
      }
    }

    // Combine all extracted text
    let extractedText = textMatches.join(' ');

    // If we didn't find much with structured extraction, try simple readable text extraction
    if (extractedText.trim().length < 100) {
      // Extract sequences of readable characters
      const readableText = text.match(readableTextRegex);
      if (readableText) {
        extractedText = readableText.join(' ');
      }
    }

    // Clean up: remove excessive whitespace
    extractedText = extractedText.replace(whitespaceRegex, ' ').trim();

    if (extractedText.length === 0) {
      throw new Error('No readable text found in PDF. This might be a scanned image PDF.');
    }

    return extractedText;
  }
  catch (error: unknown) {
    console.error('Error extracting PDF text:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to extract text from PDF: ${errorMessage}`);
  }
}

export function chunkText(
  text: string,
  options: { chunkSize: number; chunkOverlap: number } = { chunkSize: 1000, chunkOverlap: 200 },
): string[] {
  const { chunkSize, chunkOverlap } = options;
  const chunks: string[] = [];

  // Simple chunking by character count with overlap
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    const chunk = text.slice(start, end).trim();

    if (chunk.length > 0) {
      chunks.push(chunk);
    }

    // Move start position forward, accounting for overlap
    start += chunkSize - chunkOverlap;

    // Prevent infinite loop
    if (start >= text.length) {
      break;
    }
  }

  return chunks;
}

// Note: createWeaviateClient is exported from weaviate.ts
// This export is removed to avoid circular dependency
