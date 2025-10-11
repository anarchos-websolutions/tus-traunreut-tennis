/**
 * Utility to determine if we're in development mode
 * This handles both Nuxt and other environments
 */
const isDevMode = (): boolean => {
  return Boolean(import.meta.env?.DEV || process.env.NODE_ENV !== 'production');
};

/**
   * Simple logger utility that only outputs logs in development mode
   */
export const logger = {
  /**
     * Log debug messages (only in development)
     */
  debug: (...args: unknown[]): void => {
    if (isDevMode()) {
      console.debug('[DEBUG]', ...args);
    }
  },

  /**
     * Log info messages (only in development)
     */
  info: (...args: unknown[]): void => {
    if (isDevMode()) {
      console.info('[INFO]', ...args);
    }
  },

  /**
     * Log standard messages (only in development)
     */
  log: (...args: unknown[]): void => {
    if (isDevMode()) {
      console.log('[LOG]', ...args);
    }
  },

  /**
     * Log warning messages (shown in all environments)
     */
  warn: (...args: unknown[]): void => {
    console.warn('[WARN]', ...args);
  },

  /**
     * Log error messages (shown in all environments)
     */
  error: (...args: unknown[]): void => {
    console.error('[ERROR]', ...args);
  },
};
