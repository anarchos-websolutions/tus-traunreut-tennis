<template>
  <section id="home" class="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-20">
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <UBadge color="green" variant="soft" size="lg">
              Tennis im TUS Traunreut
            </UBadge>
            <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Tennis im Herzen des 
              <span class="text-green-600">Chiemgaus</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Moderne Tennisanlage mit Indoor- und Outdoor-Plätzen, professionellem Training 
              und einem benutzerfreundlichen Online-Buchungssystem.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton 
              color="green" 
              size="xl"
              @click="scrollToSection('booking')"
              class="flex items-center justify-center"
            >
              <Icon name="heroicons:calendar-days" class="w-5 h-5 mr-2" />
              Jetzt Platz Buchen
            </UButton>
            <UButton 
              variant="outline" 
              color="gray" 
              size="xl"
              @click="scrollToSection('facilities')"
              class="flex items-center justify-center"
            >
              <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
              Anlage Besichtigen
            </UButton>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600">5</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Tennisplätze</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600">3</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Indoor Plätze</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600">12+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Jahre Erfahrung</div>
            </div>
          </div>
        </div>

        <!-- Hero Image/Visual -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
            <!-- Tennis Court Visualization -->
            <div class="bg-green-600 rounded-lg p-6 text-white">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <Icon name="heroicons:trophy" class="w-8 h-8" />
                  <div class="text-right">
                    <div class="text-sm opacity-75">Nächstes Event</div>
                    <div class="font-semibold">Saisoneröffnung Mai</div>
                  </div>
                </div>
                
                <div class="border-2 border-white/30 rounded-lg p-4">
                  <div class="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <Icon name="heroicons:sun" class="w-6 h-6 mx-auto mb-1" />
                      <div class="text-xs">Outdoor</div>
                      <div class="font-bold">2 Plätze</div>
                    </div>
                    <div>
                      <Icon name="heroicons:home-modern" class="w-6 h-6 mx-auto mb-1" />
                      <div class="text-xs">Indoor</div>
                      <div class="font-bold">3 Plätze</div>
                    </div>
                  </div>
                </div>
                
                <div class="text-center">
                  <Icon name="heroicons:device-phone-mobile" class="w-6 h-6 mx-auto mb-2" />
                  <div class="text-sm">Online Buchung verfügbar</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
            <Icon name="heroicons:star" class="w-6 h-6 text-yellow-500" />
          </div>
          <div class="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
            <Icon name="heroicons:heart" class="w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const scrollToSection = (sectionId) => {
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
