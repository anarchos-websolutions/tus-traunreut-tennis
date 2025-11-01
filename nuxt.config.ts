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
    adminPassword: 'admin',
    weaviateApiKey: process.env.WEAVIATE_API_KEY,
    weaviateUrl: process.env.WEAVIATE_URL,
    weaviateHost: process.env.WEAVIATE_HOST,
    weaviatePort: process.env.WEAVIATE_PORT,
    weaviateUser: process.env.WEAVIATE_USER,
    weaviatePassword: process.env.WEAVIATE_PASSWORD,
    weaviateDatabase: process.env.WEAVIATE_DATABASE,
    weaviateCollection: process.env.WEAVIATE_COLLECTION,

    // Public keys (exposed to client-side)
    public: {
      cloudflareWorkersUrl: process.env.CLOUDFLARE_WORKERS_URL || 'https://tus-traunreut-tennis.markus-obermaier420.workers.dev/',
    },
  },

  // Performance optimizations
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'bun',
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
