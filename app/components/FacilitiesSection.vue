<template>
  <section
    id="facilities"
    class="py-20 bg-gray-50 dark:bg-gray-800"
  >
    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <UBadge
          color="blue"
          variant="soft"
          size="lg"
          class="mb-4"
        >
          Unsere Anlagen
        </UBadge>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Moderne Tennisanlage mit Tradition
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Unsere schöne Anlage bietet zwei Outdoor-Tennisplätze sowie eine Tennishalle
          mit drei Spielfeldern für ganzjährigen Tennisgenuss.
        </p>
      </div>

      <!-- Facilities Grid -->
      <div class="grid lg:grid-cols-2 gap-8 mb-16">
        <!-- Outdoor Courts -->
        <UCard class="overflow-hidden">
          <template #header>
            <div class="relative h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Icon
                name="heroicons:sun"
                class="w-16 h-16 text-white"
              />
              <div class="absolute top-4 right-4">
                <UBadge
                  color="white"
                  variant="solid"
                >
                  2 Plätze
                </UBadge>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Sand-Tennisplätze
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Zwei wunderschöne Outdoor-Tennisplätze mit professionellem Sandbelag
              für das authentische Tenniserlebnis unter freiem Himmel.
            </p>

            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 text-green-500"
                />
                <span class="text-sm text-gray-600 dark:text-gray-300">Professioneller Sandbelag</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 text-green-500"
                />
                <span class="text-sm text-gray-600 dark:text-gray-300">Saison: Mai bis Oktober</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 text-green-500"
                />
                <span class="text-sm text-gray-600 dark:text-gray-300">Flutlichtanlage verfügbar</span>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Indoor Courts -->
        <UCard class="overflow-hidden">
          <template #header>
            <div class="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Icon
                name="heroicons:home-modern"
                class="w-16 h-16 text-white"
              />
              <div class="absolute top-4 right-4">
                <UBadge
                  color="white"
                  variant="solid"
                >
                  3 Plätze
                </UBadge>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Tennishalle
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Unsere moderne Tennishalle mit drei Spielfeldern ermöglicht
              ganzjähriges Training und Spiel bei jedem Wetter.
            </p>

            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 text-green-500"
                />
                <span class="text-sm text-gray-600 dark:text-gray-300">3 Indoor-Spielfelder</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 text-green-500"
                />
                <span class="text-sm text-gray-600 dark:text-gray-300">Ganzjährig geöffnet</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 text-green-500"
                />
                <span class="text-sm text-gray-600 dark:text-gray-300">Optimale Beleuchtung</span>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Training Programs -->
      <div
        id="training"
        class="space-y-12"
      >
        <div class="text-center">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Vielfältige Trainingsangebote
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ihnen steht eine Vielzahl von verschiedenen Trainingsangeboten zur Auswahl
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto">
                <Icon
                  name="heroicons:academic-cap"
                  class="w-6 h-6 text-green-600"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Jugendtraining
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Verschiedene Leistungsgruppen für junge Talente
              </p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                <Icon
                  name="heroicons:user"
                  class="w-6 h-6 text-blue-600"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Einzeltraining
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Individuelles Training mit persönlicher Betreuung
              </p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto">
                <Icon
                  name="heroicons:trophy"
                  class="w-6 h-6 text-purple-600"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Matchtraining
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Wettkampfvorbereitung und Spielpraxis
              </p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mx-auto">
                <Icon
                  name="heroicons:heart"
                  class="w-6 h-6 text-red-600"
                />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Konditionstraining
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Fitness und Ausdauer für bessere Performance
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tennisstüberl Section -->
      <div class="mt-16">
        <UCard class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
          <div class="flex items-center justify-between">
            <div class="space-y-3">
              <h4 class="text-2xl font-bold text-gray-900 dark:text-white">
                Tennisstüberl
              </h4>
              <p class="text-gray-600 dark:text-gray-300">
                Entspannen Sie sich nach dem Spiel in unserem gemütlichen Tennisstüberl
                mit Getränken und kleinen Snacks.
              </p>
            </div>
            <div class="text-6xl">
              🍺
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
