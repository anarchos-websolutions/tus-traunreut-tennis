<template>
  <UApp>
    <!-- App Header -->
    <AppHeader />
    
    <!-- Main content area where pages are rendered -->
    <main>
      <NuxtPage />
    </main>
  </UApp>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Tennis Club',
  htmlAttrs: {
    lang: 'de'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
