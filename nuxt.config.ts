// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', // '@nuxt/scripts',
  // '@nuxt/content'
  '@nuxt/icon', '@nuxt/eslint'],
 
  // Performance optimizations
  experimental: {
    payloadExtraction: false,
    viewTransition: true
  },
  
  // SEO and meta
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'de'
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
       semi: true,
       indent: 2,
       blockSpacing: true
      }
    },
  },
  
  // CSS configuration - following Nuxt 4 guide
  css: ['~/assets/css/main.css'],
  
  // Build optimization
  nitro: {
    compressPublicAssets: true
  },
  
  // UI configuration - @nuxt/ui handles global styles automatically
  
  // Icon configuration
  icon: {
    size: '24px',
    class: 'icon',
    mode: 'css'
  },
  
  // Component auto-import configuration - Nuxt 4 should auto-detect app/components
  components: true
})