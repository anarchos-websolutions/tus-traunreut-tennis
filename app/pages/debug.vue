<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
    <h1 class="text-4xl font-bold mb-8 text-green-600">
      🎾 Debug Page
    </h1>

    <div class="space-y-8">
      <!-- Step 1: Test basic component -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl mb-4">
          Step 1: Custom Component Test
        </h2>
        <TestComponent />
      </div>

      <!-- Step 2: Test UI Component -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl mb-4">
          Step 2: Nuxt UI Component Test
        </h2>
        <UButton color="green">
          Test Button
        </UButton>
      </div>

      <!-- Step 3: Manual HTML -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl mb-4">
          Step 3: Manual HTML (Should Always Work)
        </h2>
        <div class="p-4 bg-blue-100 rounded">
          <p>This is plain HTML - should always render</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Debug Page - Component Testing',
});
</script>
