<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section class="tennis-gradient text-white py-16">
      <UContainer>
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="text-orange-400">Trainingsangebot</span>
          </h1>
          <div class="w-32 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p class="text-xl text-green-100">
            Vielfältige Trainingsmöglichkeiten für alle Leistungsstufen
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Training Overview -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4" style="color: var(--tennis-green-dark)">
            Unser <span style="color: var(--tennis-orange)">Trainingsangebot</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Ihnen steht eine Vielzahl von verschiedenen Trainingsangeboten zur Auswahl. 
            Von Anfänger bis Profi - wir haben das passende Training für Sie.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Jugendtraining -->
          <div class="tennis-card p-6">
            <div class="text-center mb-6">
              <Icon name="heroicons:user-group" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-orange)" />
              <h3 class="text-xl font-semibold" style="color: var(--tennis-green-dark)">Jugendtraining</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Verschiedene Leistungsgruppen</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Altersgerechte Trainingskonzepte</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Spielerische Heranführung</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Wettkampfvorbereitung</span>
              </li>
            </ul>
          </div>

          <!-- Individualtraining -->
          <div class="tennis-card p-6">
            <div class="text-center mb-6">
              <Icon name="heroicons:user" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-green)" />
              <h3 class="text-xl font-semibold" style="color: var(--tennis-green-dark)">Individualtraining</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Einzelstunden mit Trainer</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Personalisierte Trainingskonzepte</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Technikverbesserung</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Flexible Terminvereinbarung</span>
              </li>
            </ul>
          </div>

          <!-- Matchtraining -->
          <div class="tennis-card p-6">
            <div class="text-center mb-6">
              <Icon name="heroicons:trophy" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-orange)" />
              <h3 class="text-xl font-semibold" style="color: var(--tennis-green-dark)">Matchtraining</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Spielpraxis unter Anleitung</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Taktikschulung</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Wettkampfvorbereitung</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Mentales Training</span>
              </li>
            </ul>
          </div>

          <!-- Konditionstraining -->
          <div class="tennis-card p-6">
            <div class="text-center mb-6">
              <Icon name="heroicons:bolt" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-green)" />
              <h3 class="text-xl font-semibold" style="color: var(--tennis-green-dark)">Konditionstraining</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Tennis-spezifische Fitness</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Ausdauer- und Krafttraining</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Koordinationsschulung</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Verletzungsprävention</span>
              </li>
            </ul>
          </div>

          <!-- Gruppentraining -->
          <div class="tennis-card p-6">
            <div class="text-center mb-6">
              <Icon name="heroicons:users" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-orange)" />
              <h3 class="text-xl font-semibold" style="color: var(--tennis-green-dark)">Gruppentraining</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Training in kleinen Gruppen</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Motivierende Trainingsatmosphäre</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Kosteneffektives Training</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Soziale Kontakte knüpfen</span>
              </li>
            </ul>
          </div>

          <!-- Sonderangebote -->
          <div class="tennis-card p-6">
            <div class="text-center mb-6">
              <Icon name="heroicons:star" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-green)" />
              <h3 class="text-xl font-semibold" style="color: var(--tennis-green-dark)">Sonderangebote</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Schnupperstunden für Anfänger</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Ferientraining für Kinder</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>Intensivkurse</span>
              </li>
              <li class="flex items-start">
                <Icon name="heroicons:check" class="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <span>... und vieles mehr</span>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Training Schedule -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4" style="color: var(--tennis-green-dark)">
            Trainings<span style="color: var(--tennis-orange)">zeiten</span>
          </h2>
          <div class="w-32 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p class="text-lg text-gray-600">
            Unsere aktuellen Trainingszeiten im Überblick
          </p>
        </div>

        <div class="max-w-4xl mx-auto tennis-card p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4" style="color: var(--tennis-green-dark)">Jugendtraining</h3>
              <div class="space-y-3 text-gray-600">
                <div class="flex justify-between">
                  <span>Montag</span>
                  <span>16:00 - 18:00 Uhr</span>
                </div>
                <div class="flex justify-between">
                  <span>Mittwoch</span>
                  <span>16:00 - 18:00 Uhr</span>
                </div>
                <div class="flex justify-between">
                  <span>Freitag</span>
                  <span>16:00 - 18:00 Uhr</span>
                </div>
                <div class="flex justify-between">
                  <span>Samstag</span>
                  <span>09:00 - 12:00 Uhr</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4" style="color: var(--tennis-green-dark)">Erwachsenentraining</h3>
              <div class="space-y-3 text-gray-600">
                <div class="flex justify-between">
                  <span>Dienstag</span>
                  <span>19:00 - 21:00 Uhr</span>
                </div>
                <div class="flex justify-between">
                  <span>Donnerstag</span>
                  <span>19:00 - 21:00 Uhr</span>
                </div>
                <div class="flex justify-between">
                  <span>Samstag</span>
                  <span>14:00 - 16:00 Uhr</span>
                </div>
                <div class="flex justify-between">
                  <span>Sonntag</span>
                  <span>10:00 - 12:00 Uhr</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 p-4 bg-orange-50 rounded-lg">
            <p class="text-sm text-gray-600 text-center">
              <Icon name="heroicons:information-circle" class="w-5 h-5 inline mr-2" style="color: var(--tennis-orange)" />
              Trainingszeiten können saisonal variieren. Aktuelle Zeiten erfahren Sie bei der Anmeldung.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4" style="color: var(--tennis-green-dark)">
            Training <span style="color: var(--tennis-orange)">buchen</span>
          </h2>
          <div class="w-32 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p class="text-lg text-gray-600">
            Interessiert an unserem Trainingsangebot? Kontaktieren Sie uns!
          </p>
        </div>

        <div class="max-w-2xl mx-auto tennis-card p-8 text-center">
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Icon name="heroicons:envelope" class="w-8 h-8 mx-auto mb-3" style="color: var(--tennis-orange)" />
              <h3 class="font-semibold mb-2">E-Mail</h3>
              <p class="text-gray-600">info@tennis-traunreut.de</p>
            </div>
            <div>
              <Icon name="heroicons:phone" class="w-8 h-8 mx-auto mb-3" style="color: var(--tennis-orange)" />
              <h3 class="font-semibold mb-2">Telefon</h3>
              <p class="text-gray-600">+49 (0) 8669 - 2971</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/booking" class="btn-tennis-secondary">
              Online buchen
            </NuxtLink>
            <a href="tel:+4986692971" class="btn-tennis-primary">
              Anrufen
            </a>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// SEO meta tags
useSeoMeta({
  title: 'Trainingsangebot - TUS Traunreut Tennis',
  description: 'Vielfältige Trainingsmöglichkeiten bei TUS Traunreut Tennis: Jugendtraining, Individualtraining, Matchtraining, Konditionstraining und mehr für alle Leistungsstufen.',
  ogTitle: 'Trainingsangebot - TUS Traunreut Tennis',
  ogDescription: 'Vielfältige Trainingsmöglichkeiten bei TUS Traunreut Tennis: Jugendtraining, Individualtraining, Matchtraining, Konditionstraining und mehr für alle Leistungsstufen.',
  ogImage: '/tennis-training.jpg',
  twitterCard: 'summary_large_image'
})
</script>
