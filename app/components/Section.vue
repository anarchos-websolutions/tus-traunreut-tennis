<template>
  <section
    class="py-16"
    :class="[props.backgroundColor, props.textColor]"
  >
    <UContainer>
      <div class="text-center mb-12">
        <h2
          class="heading-xl mb-4 text-inherit"
          v-html="title"
        />
        <p class="text-lg">
          {{ description }}
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
  backgroundColor: {
    type: String,
    required: false,
    default: 'bg-white',
  },
  textColor: {
    type: String,
    required: false,
    default: 'text-gray-600',
  },
});
</script>
