<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
    <UContainer>
      <div class="flex items-center justify-between h-16">
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
        <nav class="hidden xl:flex items-center space-x-6">
          <template
            v-for="item in navigation"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="px-3 py-2 text-sm font-medium transition-colors hover:text-gray-900"
              :class="$route.path === item.to ? 'text-gray-900 font-semibold' : 'text-gray-700'"
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
        class="py-4 border-t border-gray-200"
      >
        <nav class="flex flex-col space-y-2">
          <template
            v-for="item in navigation"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="px-3 py-2 text-gray-700 hover:text-gray-900"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
          <UButton
            to="/blackboard"
            icon="i-lucide-clipboard-list"
            variant="soft"
            color="neutral"
            @click="mobileMenuOpen = false"
          >
            Schwarzes Brett
          </UButton>
        </nav>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core';

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
</script>
