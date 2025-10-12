<template>
  <section class="tennis-gradient text-white py-16">
    <UContainer>
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-[var(--color-secondary-200)]">{{ title }}</span>
        </h1>
        <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto mb-6" />
        <p class="text-xl text-green-100">
          {{ description }}
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const { title, description } = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
