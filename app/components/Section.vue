<template>
  <section
    class="py-16"
    :class="props.class"
  >
    <UContainer>
      <div class="text-center mb-12">
        <h2
          class="heading-xl mb-4 text-inherit"
          v-html="title"
        />
        <p class="text-lg">
          <span v-html="description" />
        </p>
      </div>
      <slot />
    </UContainer>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: 'bg-white text-gray-600',
  },
});
</script>
