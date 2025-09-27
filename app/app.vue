<template>
  <UApp>
    <!-- Pages will use their specified layout -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
