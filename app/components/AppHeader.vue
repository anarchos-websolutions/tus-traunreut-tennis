<template>
  <header
    class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg"
    :style="{
      transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
    }"
  >
    <UContainer>
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <!-- <Icon name="heroicons:trophy" class="w-8 h-8" style="color: var(--tennis-green)" /> -->
          <NuxtImg src="/images/logo.png" />
          <div>
            <h1
              class="heading-lg"
              style="color: var(--tennis-green-dark)"
            >TUS Traunreut</h1>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center space-x-2">
          <template
            v-for="item in navigation"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="px-3 py-2 text-sm font-medium transition-colors hover:text-primary-500"
              :class="$route.path === item.to ? 'text-primary-500 font-semibold' : 'text-gray-700'"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
          <NuxtLink
            to="/blackboard"
            class="btn btn-ghost"
          >
            <Icon
              name="entypo:blackboard"
              class="w-8 h-8"
            />
          </NuxtLink>

          <NuxtLink
            to="https://sportbuchung-traunreut.ebusy.de/"
            class="btn btn-primary"
            @click="mobileMenuOpen = false"
          >
            Buchen
          </NuxtLink>
        </nav>
        <!-- Mobile Menu Button -->
        <UButton
          variant="ghost"
          color="gray"
          class="xl:hidden cursor-pointer"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon
            :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
            class="w-6 h-6"
          />
        </UButton>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen && !isXLScreen"
        class="border-t border-gray-200 "
      >
        <nav class="flex flex-col">
          <template
            v-for="item in navigation"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-gray-700 hover:text-primary-500 p-2 py-4"
              :class="$route.path === item.to ? 'text-primary-500' : ''"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
          <NuxtLink
            class="p-2 py-4 flex items-center gap-2 hover:text-primary-500"
            :class="$route.path === '/blackboard' ? 'text-primary-500' : ''"
            to="/blackboard"
            @click="mobileMenuOpen = false"
          >
            <Icon
              name="i-entypo:blackboard"
              class="w-4 h-4"
            />
            Schwarzes Brett
          </NuxtLink>
        </nav>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
import { useMediaQuery, useWindowScroll } from '@vueuse/core';

const isXLScreen = useMediaQuery('(min-width: 1280px)');

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Abteilungsleitung', to: '/abteilung' },
  { name: 'Trainingsangebot', to: '/training' },
  { name: 'Tennisplätze', to: '/anlagen' },
  { name: 'Aktuelles', to: '/aktuelles' },
  { name: 'Mitglieder', to: '/mitglieder' },
];

// Mobile menu state
const mobileMenuOpen = ref(false);

// Close mobile menu when route changes
const route = useRoute();
watch(() => route.path, () => {
  mobileMenuOpen.value = false;
});

// Scroll detection for hide/show header
const { y: scrollY } = useWindowScroll();
const lastScrollY = ref(0);
const isHeaderVisible = ref(true);
const isTransitioning = ref(false);

// Minimum scroll distance to trigger hide/show (prevents flickering)
const SCROLL_THRESHOLD = 10;
// Minimum time between transitions (prevents rapid toggling)
const TRANSITION_DURATION = 700; // matches CSS duration-700

watch(scrollY, (newY) => {
  // Prevent rapid toggling during transition
  if (isTransitioning.value) {
    return;
  }

  // Always show header at the top of the page
  if (newY < SCROLL_THRESHOLD) {
    if (!isHeaderVisible.value) {
      isHeaderVisible.value = true;
      isTransitioning.value = true;
      setTimeout(() => {
        isTransitioning.value = false;
      }, TRANSITION_DURATION);
    }
    lastScrollY.value = newY;
    return;
  }

  // Determine scroll direction
  const scrollDifference = newY - lastScrollY.value;

  if (scrollDifference > SCROLL_THRESHOLD && isHeaderVisible.value) {
    // Scrolling down - hide header
    isHeaderVisible.value = false;
    isTransitioning.value = true;
    setTimeout(() => {
      isTransitioning.value = false;
    }, TRANSITION_DURATION);
  }
  else if (scrollDifference < -SCROLL_THRESHOLD && !isHeaderVisible.value) {
    // Scrolling up - show header
    isHeaderVisible.value = true;
    isTransitioning.value = true;
    setTimeout(() => {
      isTransitioning.value = false;
    }, TRANSITION_DURATION);
  }

  lastScrollY.value = newY;
}, { immediate: true });
</script>
