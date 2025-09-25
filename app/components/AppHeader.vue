<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <Icon name="heroicons:trophy" class="w-8 h-8 text-green-600" />
          <div>
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">TUS Traunreut</h1>
            <p class="text-xs text-gray-500 dark:text-gray-400">Tennis</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <UButton variant="ghost" color="gray" @click="scrollToSection('home')">
            Home
          </UButton>
          <UButton variant="ghost" color="gray" @click="scrollToSection('department')">
            Abteilung
          </UButton>
          <UButton variant="ghost" color="gray" @click="scrollToSection('facilities')">
            Anlagen
          </UButton>
          <UButton variant="ghost" color="gray" @click="scrollToSection('training')">
            Training
          </UButton>
          <UButton variant="ghost" color="gray" @click="scrollToSection('news')">
            Aktuelles
          </UButton>
          <UButton color="green" @click="scrollToSection('booking')">
            Jetzt Buchen
          </UButton>
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
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
        <nav class="flex flex-col space-y-2">
          <UButton variant="ghost" color="gray" class="justify-start" @click="scrollToSection('home')">
            Home
          </UButton>
          <UButton variant="ghost" color="gray" class="justify-start" @click="scrollToSection('department')">
            Abteilung
          </UButton>
          <UButton variant="ghost" color="gray" class="justify-start" @click="scrollToSection('facilities')">
            Anlagen
          </UButton>
          <UButton variant="ghost" color="gray" class="justify-start" @click="scrollToSection('training')">
            Training
          </UButton>
          <UButton variant="ghost" color="gray" class="justify-start" @click="scrollToSection('news')">
            Aktuelles
          </UButton>
          <UButton color="green" class="justify-start" @click="scrollToSection('booking')">
            Jetzt Buchen
          </UButton>
        </nav>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId) => {
  mobileMenuOpen.value = false
  
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>
