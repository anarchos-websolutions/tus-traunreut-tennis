// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', // '@nuxt/scripts',
  // '@nuxt/content'
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
    // SMTP configuration (server-only)
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpFrom: process.env.SMTP_FROM,
    smtpSecure: process.env.SMTP_SECURE,
    // Recipient groups (comma-separated emails)
    boardEmails: process.env.BOARD_EMAILS,
    coachEmails: process.env.COACH_EMAILS,
    memberEmails: process.env.MEMBER_EMAILS,
    public: {
      // no public values needed yet
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
