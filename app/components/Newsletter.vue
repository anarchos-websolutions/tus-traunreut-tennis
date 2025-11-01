<template>
  <Section
    :title="props.title"
    :description="props.description"
    class="tennis-gradient text-white"
  >
    <div class="max-w-md mx-auto flex gap-4">
      <input
        type="email"
        placeholder="Ihre E-Mail Adresse"
        class="flex-1 px-4 py-3 rounded-lg text-white bg-white/20 hover:bg-white/30 border border-white/30"
      >
      <button class="btn px-6 py-3">
        Anmelden
      </button>
    </div>
  </Section>
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
});
</script>
