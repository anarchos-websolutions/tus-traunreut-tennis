<template>
  <div>
    <!-- App Header -->
    <AppHeader />
    
    <!-- Main content area where pages are rendered -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// This is the root app component (app.vue)
// Components from ~/components/ are auto-imported in Nuxt 4
// Pages from ~/pages/ are automatically routed

// Global app configuration
useHead({
  titleTemplate: '%s - Tennis Club',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
