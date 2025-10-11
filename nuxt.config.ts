// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [// '@nuxt/scripts',
    '@nuxt/ui', // '@nuxt/content'
    '@nuxt/icon', '@nuxt/eslint', '@nuxt/image'],

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
    prerender: {
      routes: ['/'],
    },
    compressPublicAssets: {
      brotli: true,
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
