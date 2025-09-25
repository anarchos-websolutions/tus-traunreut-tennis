<template>
  <section id="department" class="py-20 bg-white dark:bg-gray-900">
    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <UBadge color="green" variant="soft" size="lg" class="mb-4">
          TuS Tennisabteilung
        </UBadge>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Neue Führung, Frische Ideen
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Nach zwölf Jahren erfolgreicher Leitung durch Christel Hofmann führt jetzt ein motiviertes 
          Dreigespann die Tennisabteilung in eine moderne Zukunft.
        </p>
      </div>

      <!-- Leadership Team -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Icon name="heroicons:user-circle" class="w-12 h-12 text-green-600" />
              </div>
            </div>
          </template>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Markus Petzka</h3>
          <p class="text-green-600 font-medium mb-3">Abteilungsleiter</p>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Führt die Abteilung mit frischen Ideen und modernen Ansätzen in die Zukunft.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Icon name="heroicons:user-circle" class="w-12 h-12 text-green-600" />
              </div>
            </div>
          </template>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tino Trefil</h3>
          <p class="text-green-600 font-medium mb-3">Stellvertreter</p>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Unterstützt bei der strategischen Entwicklung und dem Trainingsangebot.
          </p>
        </UCard>

        <UCard class="text-center">
          <template #header>
            <div class="flex justify-center mb-4">
              <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Icon name="heroicons:user-circle" class="w-12 h-12 text-green-600" />
              </div>
            </div>
          </template>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Markus Luprich</h3>
          <p class="text-green-600 font-medium mb-3">Stellvertreter</p>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Kümmert sich um die technische Modernisierung und Mitgliederbetreuung.
          </p>
        </UCard>
      </div>

      <!-- Vision & Goals -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
            Unsere Vision für die Zukunft
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Wir haben uns darauf verständigt, die Abteilung und die Tennishalle unter einem Dach 
            zusammenzuführen, um die Zukunftsfähigkeit des Tennissports zu stärken und zu sichern.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <Icon name="heroicons:check-circle" class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Online-Buchungssystem</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Nahtlose und benutzerfreundliche Buchung mit Smartphone oder Computer
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon name="heroicons:check-circle" class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Bessere Auslastung</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Optimierte Platznutzung durch intelligente Buchungsverteilung
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon name="heroicons:check-circle" class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Moderne Verwaltung</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  Digitale Prozesse für eine effiziente Vereinsführung
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <div class="space-y-6">
              <div class="text-center">
                <Icon name="heroicons:trophy" class="w-16 h-16 mx-auto mb-4" />
                <h4 class="text-2xl font-bold mb-2">Gemeinsam Erfolgreich</h4>
                <p class="opacity-90">
                  Ein starkes Team für eine starke Tennisabteilung
                </p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold">2020</div>
                  <div class="text-sm opacity-90">Neuer Start</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold">100+</div>
                  <div class="text-sm opacity-90">Mitglieder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
