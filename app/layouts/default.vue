<template>
  <div>
    <!-- App Header -->
    <AppHeader />

    <!-- Main content area where pages are rendered -->
    <main>
      <slot />
    </main>

    <AppFooter />

    <!-- Floating Tennis Ball - Bottom Left -->
    <button
      ref="tennisBall"
      class="fixed left-8 bottom-8 z-50 cursor-pointer hover:scale-110"
      :style="{ transform: `rotate(${scrollRotation}deg)` }"
      :title="isAtTop ? 'Zurück zur letzten Position' : 'Nach oben'"
      @click="toggleScrollPosition"
    >
      <div class="w-12 h-12 relative">
        <!-- Black background layer - centered behind the icon -->
        <div class="w-10 h-10 rounded-full bg-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <!-- Tennis ball icon on top -->
        <Icon
          name="solar:tennis-bold"
          class="w-12 h-12 absolute inset-0"
          style="color: var(--tennis-ball)"
        />
      </div>
    </button>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core';

const route = useRoute();
const { y } = useWindowScroll();

// Reactive state for scroll-based rotation
const scrollRotation = ref(0);
const tennisBall = ref(null);
const lastScrollPosition = ref(0);
const isAtTop = computed(() => y.value < 400);

// Handle scroll event to rotate tennis ball
const handleScroll = () => {
  const scrollY = window.scrollY;

  // Rotate 1 degree for every 10 pixels scrolled
  scrollRotation.value = scrollY * 0.1;
};

watch(route, () => {
  lastScrollPosition.value = 0;
});

// Toggle scroll position function
const toggleScrollPosition = () => {
  if (isAtTop.value) {
    // Currently at top, scroll to last position
    if (lastScrollPosition.value > 0) {
      window.scrollTo({
        top: lastScrollPosition.value,
        behavior: 'smooth',
      });
    }
  }
  else {
    // Not at top, save current position and go to top
    lastScrollPosition.value = window.scrollY;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

// Add scroll listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Clean up scroll listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
