<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Icon name="heroicons:trophy" class="w-8 h-8" style="color: var(--tennis-green)" />
          <div>
            <h1 class="text-xl font-bold" style="color: var(--tennis-green-dark)">TUS Traunreut</h1>
            <p class="text-xs" style="color: var(--tennis-orange)">Tennis</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            to="/" 
            class="px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
            :class="$route.path === '/' ? 'text-orange-600 font-semibold' : 'text-gray-700'"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/abteilung" 
            class="px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
            :class="$route.path === '/abteilung' ? 'text-orange-600 font-semibold' : 'text-gray-700'"
          >
            Abteilungsleitung
          </NuxtLink>
          <NuxtLink 
            to="/training" 
            class="px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
            :class="$route.path === '/training' ? 'text-orange-600 font-semibold' : 'text-gray-700'"
          >
            Trainingsangebot
          </NuxtLink>
          <NuxtLink 
            to="/anlagen" 
            class="px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
            :class="$route.path === '/anlagen' ? 'text-orange-600 font-semibold' : 'text-gray-700'"
          >
            Tennisplätze
          </NuxtLink>
          <NuxtLink 
            to="/aktuelles" 
            class="px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
            :class="$route.path === '/aktuelles' ? 'text-orange-600 font-semibold' : 'text-gray-700'"
          >
            Aktuelles
          </NuxtLink>
          <NuxtLink 
            to="/mitglieder" 
            class="px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500"
            :class="$route.path === '/mitglieder' ? 'text-orange-600 font-semibold' : 'text-gray-700'"
          >
            Mitglieder
          </NuxtLink>
          <NuxtLink 
            to="/booking" 
            class="btn-tennis-secondary ml-4"
          >
            Jetzt Buchen
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <UButton 
          variant="ghost" 
          color="gray"
          class="md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </UButton>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <nav class="flex flex-col space-y-2">
          <NuxtLink to="/" class="px-3 py-2 text-gray-700 hover:text-orange-500" @click="mobileMenuOpen = false">
            Home
          </NuxtLink>
          <NuxtLink to="/abteilung" class="px-3 py-2 text-gray-700 hover:text-orange-500" @click="mobileMenuOpen = false">
            Abteilungsleitung
          </NuxtLink>
          <NuxtLink to="/training" class="px-3 py-2 text-gray-700 hover:text-orange-500" @click="mobileMenuOpen = false">
            Trainingsangebot
          </NuxtLink>
          <NuxtLink to="/anlagen" class="px-3 py-2 text-gray-700 hover:text-orange-500" @click="mobileMenuOpen = false">
            Tennisplätze
          </NuxtLink>
          <NuxtLink to="/aktuelles" class="px-3 py-2 text-gray-700 hover:text-orange-500" @click="mobileMenuOpen = false">
            Aktuelles
          </NuxtLink>
          <NuxtLink to="/mitglieder" class="px-3 py-2 text-gray-700 hover:text-orange-500" @click="mobileMenuOpen = false">
            Mitglieder
          </NuxtLink>
          <NuxtLink to="/booking" class="btn-tennis-secondary mx-3 mt-2" @click="mobileMenuOpen = false">
            Jetzt Buchen
          </NuxtLink>
        </nav>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
// Mobile menu state
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
