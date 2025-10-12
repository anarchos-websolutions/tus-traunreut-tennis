<template>
  <section
    :class="backgroundImage ? `bg-[url('${backgroundImage}')] bg-cover bg-center` : 'tennis-gradient'"
    class="text-white py-16"
  >
    <UContainer>
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          <span>{{ title }}</span>
        </h1>
        <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto mb-6" />
        <p class="text-xl">
          {{ description }}
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const { title, description, backgroundImage } = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: false,
  },
});
</script>
