// Simple crypto utilities
// For production, consider using bcrypt or similar

export function compare(plain: string, hashed: string): boolean {
  // For basic auth, we'll do simple comparison
  // In production, use proper hashing
  return plain === hashed;
}

export function hash(plain: string): string {
  // For basic auth, we'll return plain text
  // In production, use proper hashing like bcrypt
  return plain;
}
