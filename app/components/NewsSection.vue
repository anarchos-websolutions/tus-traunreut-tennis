<template>
  <section id="news" class="py-20 bg-white dark:bg-gray-900">
    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <UBadge color="orange" variant="soft" size="lg" class="mb-4">
          Aktuelle Neuigkeiten
        </UBadge>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Was gibt's Neues?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Events und 
          Entwicklungen rund um unsere Tennisanlage.
        </p>
      </div>

      <!-- News Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- News Item 1 -->
        <UCard class="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <template #header>
            <div class="relative h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Icon name="heroicons:wrench-screwdriver" class="w-16 h-16 text-white" />
              <div class="absolute top-4 left-4">
                <UBadge color="white" variant="solid">März 2021</UBadge>
              </div>
            </div>
          </template>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Plätze werden saniert und vorbereitet
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Das Tennis-Spielen kann bald losgehen, mit dem Herrichten der Plätze wird bald begonnen! 
              Spielen nur nach vorheriger Buchung möglich.
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Icon name="heroicons:calendar-days" class="w-4 h-4" />
              <span>März 11, 2021</span>
            </div>
          </div>
        </UCard>

        <!-- News Item 2 -->
        <UCard class="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <template #header>
            <div class="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Icon name="heroicons:currency-euro" class="w-16 h-16 text-white" />
              <div class="absolute top-4 left-4">
                <UBadge color="white" variant="solid">März 2021</UBadge>
              </div>
            </div>
          </template>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Information für Abospieler der Saison 2020/2021
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Unsere Abokunden erhalten ihren Ausfall während der Corona-Sperren erstattet. 
              Am Ende des Abos werden alle Spieler benachrichtigt.
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Icon name="heroicons:calendar-days" class="w-4 h-4" />
              <span>März 11, 2021</span>
            </div>
          </div>
        </UCard>

        <!-- Upcoming Events -->
        <UCard class="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <template #header>
            <div class="relative h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Icon name="heroicons:calendar-days" class="w-16 h-16 text-white" />
              <div class="absolute top-4 left-4">
                <UBadge color="white" variant="solid">Bald</UBadge>
              </div>
            </div>
          </template>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Saisoneröffnung 2025
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Freuen Sie sich auf unsere Saisoneröffnung im Mai mit verschiedenen Events, 
              Turnieren und einem gemütlichen Beisammensein.
            </p>
            <div class="flex items-center space-x-2 text-sm text-green-600">
              <Icon name="heroicons:clock" class="w-4 h-4" />
              <span>Vorankündigung</span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Events Timeline -->
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Jahreskalender - Events & Highlights
        </h3>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- May Events -->
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <span class="text-green-600 font-bold">Mai</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Saisoneröffnung</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Offizieller Start der Outdoor-Saison mit Feierlichkeiten
              </p>
            </div>
          </div>

          <!-- Summer Events -->
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto">
                <Icon name="heroicons:sun" class="w-6 h-6 text-yellow-600" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Sommer-Cups</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Verschiedene Turniere und Wettkämpfe während der Saison
              </p>
            </div>
          </div>

          <!-- Summer Party -->
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto">
                <Icon name="heroicons:musical-note" class="w-6 h-6 text-orange-600" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Sommerfest</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Geselliges Beisammensein mit Musik, Essen und guter Stimmung
              </p>
            </div>
          </div>

          <!-- Season End -->
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-center space-y-3">
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
                <Icon name="heroicons:trophy" class="w-6 h-6 text-red-600" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Abschlussfeier</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Saisonabschluss mit Ehrungen und Rückblick auf das Jahr
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-16">
        <UCard class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
          <div class="text-center space-y-6">
            <div>
              <Icon name="heroicons:envelope" class="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bleiben Sie auf dem Laufenden
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Melden Sie sich für unseren Newsletter an und erhalten Sie die neuesten Tipps und Tricks, 
                Mitgliederrabatte und eine Liste der kommenden Turniere!
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <UInput 
                placeholder="Ihre E-Mail-Adresse" 
                class="flex-1"
                size="lg"
              />
              <UButton color="green" size="lg">
                Anmelden
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
