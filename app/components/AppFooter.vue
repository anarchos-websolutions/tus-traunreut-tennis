<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer -->
    <div class="py-16">
      <UContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <Icon
                name="heroicons:trophy"
                class="w-8 h-8 text-green-400"
              />
              <div>
                <h3 class="text-xl font-bold">
                  TUS Traunreut
                </h3>
                <p class="text-sm text-gray-400">
                  Tennis
                </p>
              </div>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              Der Turn- und Sportverein im Herzen des Chiemgaus.
              Moderne Tennisanlage mit Tradition seit über 12 Jahren.
            </p>
            <div class="flex space-x-3">
              <UButton
                variant="ghost"
                size="sm"
                class="text-white"
                square
                icon="simple-icons:facebook"
              />
              <UButton
                variant="ghost"
                class="text-white"
                size="sm"
                square
                icon="simple-icons:instagram"
              />

              <UButton
                variant="ghost"
                class="text-white"
                size="sm"
                square
                icon="heroicons:envelope"
              />
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white">
              Navigation
            </h4>
            <nav class="space-y-2">
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
                @click="scrollToSection('home')"
              >
                Home
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
                @click="scrollToSection('department')"
              >
                Abteilungsleitung
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
                @click="scrollToSection('training')"
              >
                Trainingsangebot
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
                @click="scrollToSection('facilities')"
              >
                Tennisplätze
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
                @click="scrollToSection('news')"
              >
                Aktuelles
              </UButton>
            </nav>
          </div>

          <!-- Services -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white">
              Services
            </h4>
            <nav class="space-y-2">
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
                @click="scrollToSection('booking')"
              >
                Online Buchung
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
              >
                Mitgliedschaft
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
              >
                Tennisstüberl
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
              >
                Events & Turniere
              </UButton>
              <UButton
                variant="ghost"
                color="gray"
                size="sm"
                class="justify-start p-0 h-auto"
              >
                Tennisschule
              </UButton>
            </nav>
          </div>

          <!-- Contact -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white">
              Kontakt
            </h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <Icon
                  name="heroicons:map-pin"
                  class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                />
                <div class="text-sm text-gray-300">
                  <p>Traunring 118</p>
                  <p>83301 Traunreut, Deutschland</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <Icon
                  name="heroicons:envelope"
                  class="w-5 h-5 text-green-400 flex-shrink-0"
                />
                <a
                  href="mailto:info@tennis-traunreut.de"
                  class="text-sm text-gray-300 hover:text-green-400 transition-colors"
                >
                  info@tennis-traunreut.de
                </a>
              </div>

              <div class="flex items-center space-x-3">
                <Icon
                  name="heroicons:phone"
                  class="w-5 h-5 text-green-400 flex-shrink-0"
                />
                <a
                  href="tel:+4986692971"
                  class="text-sm text-gray-300 hover:text-green-400 transition-colors"
                >
                  +49 (0) 8669 - 2971
                </a>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="pt-4">
              <h5 class="text-sm font-medium text-white mb-2">
                Newsletter
              </h5>
              <p class="text-xs text-gray-400 mb-3">
                Bleiben Sie über Events und Neuigkeiten informiert
              </p>
              <div class="flex space-x-2">
                <UInput
                  placeholder="E-Mail"
                  size="sm"
                  class="flex-1 text-xs"
                />
                <UButton
                  color="green"
                  size="sm"
                >
                  <Icon
                    name="heroicons:paper-airplane"
                    class="w-4 h-4"
                  />
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800 py-6">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-gray-400">
            © 2025 TUS Traunreut - Tennis. Alle Rechte vorbehalten.
          </div>

          <nav class="flex space-x-6">
            <UButton
              variant="ghost"
              color="gray"
              size="sm"
              class="text-xs"
            >
              Impressum
            </UButton>
            <UButton
              variant="ghost"
              color="gray"
              size="sm"
              class="text-xs"
            >
              Datenschutz
            </UButton>
            <UButton
              variant="ghost"
              color="gray"
              size="sm"
              class="text-xs"
            >
              AGB
            </UButton>
          </nav>
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
</script>
