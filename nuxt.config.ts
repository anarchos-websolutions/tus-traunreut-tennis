// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui', '@nuxt/icon', '@nuxt/eslint', '@nuxt/image', 'nuxt-swiper'],

  // Static Site Generation preset
  ssr: true,

  // Component auto-import configuration - Nuxt 4 should auto-detect app/components
  components: true,
  devtools: { enabled: true },

  // SEO and meta
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'de',
      },
    },
  },

  // CSS configuration - following Nuxt 4 guide
  css: ['~/assets/css/main.css'],

  // UI configuration - @nuxt/ui handles global styles automatically

  // Runtime configuration for server-only secrets and public values
  runtimeConfig: {
    // Private keys (only available on server-side)
    cloudflareWorkersSecret: process.env.CLOUDFLARE_WORKERS_SECRET,

    // Public keys (exposed to client-side)
    public: {
      cloudflareWorkersUrl: process.env.CLOUDFLARE_WORKERS_URL || 'https://tus-traunreut-tennis.markus-obermaier420.workers.dev/',
    },
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
    viewTransition: true,
  },
  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'bun',
  },

  // Vite configuration optimized for Docker development with HMR
  // Note: host/port are set via --host 0.0.0.0 in docker-compose command
  vite: {
    server: {
      // Watch configuration - polling is REQUIRED for Docker volume mounts
      watch: {
        usePolling: true, // Critical for Docker - enables file watching via polling
        interval: 1000, // Polling interval in milliseconds
      },
      // HMR WebSocket configuration for Docker
      // Use 127.0.0.1 instead of localhost to avoid IPv6 issues in Docker/WSL2
      // Server binds to 0.0.0.0 inside container (via --host 0.0.0.0 flag)
      // Browser connects to 127.0.0.1:3000 from host machine
      hmr: {
        protocol: 'ws',
        host: '127.0.0.1', // Use IPv4 explicitly to avoid IPv6 connection issues
        clientPort: 3000, // Browser uses port 3000 (mapped in docker-compose)
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        indent: 2,
        blockSpacing: true,
      },
    },
  },

  // Icon configuration
  icon: {
    size: '24px',
    class: 'icon',
    mode: 'css',
    cssLayer: 'base',
    provider: 'iconify',
    clientBundle: {
      scan: true,
    },
  },
});
