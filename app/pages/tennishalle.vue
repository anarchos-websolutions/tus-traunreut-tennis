<template>
  <div class="min-h-screen">
    <PageHeader
      title="TUS 3-FELD TENNISHALLE"
      description="Tennis in der TUS Traunreut – Tennishalle beim Turn- und Sportverein im Herzen des Chiemgaus"
      background-image="/images/tennishalle.png"
    />

    <!-- <NuxtImg
      src="/images/tennishalle.png"
      alt="Tennishalle"
      class="w-full h-full object-cover"
      width="1920"
      height="1080"
    /> -->

    <!-- Image Gallery -->
    <!-- <section class="py-16">
      <UContainer>
        <ImageGallery
          :images="images"
        />
      </UContainer>
    </section> -->

    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Vorwort
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            Mit der 3-Feld Tennishalle in Traunreut ist der Spaß am Tennis spielen auch bei schlechtem Wetter gegeben!
            Der gedämpfte / gelenk-schonende Teppichboden sorgt für ein sicheres und entspanntes Spiel.
            Die 3 Spielfelder sorgen für genug Platz um mit seinem Team oder auch mit seinen Freunden zu spielen!
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- Indoor Courts -->
          <div class="tennis-card p-8">
            <div class="text-center mb-8">
              <Icon
                name="heroicons:building-office-2"
                class="w-16 h-16 mx-auto mb-4"
                style="color: var(--tennis-green)"
              />
              <h3
                class="text-3xl font-bold mb-4"
                style="color: var(--tennis-green-dark)"
              >
                TUS 3-FELD TENNISHALLE
              </h3>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-4 text-gray-600">
                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 mr-3 mt-0.5 text-green-600"
                  />
                  <div>
                    <h4 class="font-semibold">
                      3 Hallenplätze
                    </h4>
                    <p class="text-sm">
                      Wetterunabhängiges Spielen das ganze Jahr
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 mr-3 mt-0.5 text-green-600"
                  />
                  <div>
                    <h4 class="font-semibold">
                      Gedämpfter Teppichboden
                    </h4>
                    <p class="text-sm">
                      Gelenk-schonender Belag für sicheres und entspanntes Spielen
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 mr-3 mt-0.5 text-green-600"
                  />
                  <div>
                    <h4 class="font-semibold">
                      Optimale Beleuchtung
                    </h4>
                    <p class="text-sm">
                      Professionelle Hallenbeleuchtung für beste Sichtverhältnisse
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-4 text-gray-600">
                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 mr-3 mt-0.5 text-green-600"
                  />
                  <div>
                    <h4 class="font-semibold">
                      Ganzjährige Nutzung
                    </h4>
                    <p class="text-sm">
                      Unabhängig von Wetter und Jahreszeit spielbar
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 mr-3 mt-0.5 text-green-600"
                  />
                  <div>
                    <h4 class="font-semibold">
                      Moderne Belüftung
                    </h4>
                    <p class="text-sm">
                      Optimale Luftzirkulation für angenehmes Spielklima
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-6 h-6 mr-3 mt-0.5 text-green-600"
                  />
                  <div>
                    <h4 class="font-semibold">
                      Team- und Einzelspiel
                    </h4>
                    <p class="text-sm">
                      Genug Platz für Team- und Einzelspiele
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Daten und Fakten -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Daten und Fakten
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="tennis-card p-8 text-center">
            <div
              class="text-4xl font-bold mb-2"
              style="color: var(--tennis-green)"
            >
              1000
            </div>
            <div
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              m² Fläche
            </div>
          </div>

          <div class="tennis-card p-8 text-center">
            <div
              class="text-4xl font-bold mb-2"
              style="color: var(--tennis-green)"
            >
              120.000
            </div>
            <div
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              € Baukosten (Tennishalle)
            </div>
          </div>

          <div class="tennis-card p-8 text-center">
            <div
              class="text-4xl font-bold mb-2"
              style="color: var(--tennis-green)"
            >
              400.000
            </div>
            <div
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              € Baukosten (Tennisheim)
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Court Specifications -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Platzspezifikationen
          </h2>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="tennis-card p-8">
            <ul class="space-y-4 text-gray-600">
              <li class="flex justify-between">
                <span>Platzgröße:</span>
                <span>23,77 x 10,97 m</span>
              </li>
              <li class="flex justify-between">
                <span>Indoor-Belag:</span>
                <span>Gedämpfter Teppichboden</span>
              </li>
              <li class="flex justify-between">
                <span>Netzhöhe:</span>
                <span>91,4 cm</span>
              </li>
              <li class="flex justify-between">
                <span>Linienstärke:</span>
                <span>5 cm</span>
              </li>
              <li class="flex justify-between">
                <span>Anzahl Plätze:</span>
                <span>3 Hallenplätze</span>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Mehr als nur Tennis spielen -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            MEHR ALS NUR <span style="color: var(--color-secondary-900)">TENNIS SPIELEN</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Termine -->
          <div class="tennis-card p-8 text-center">
            <Icon
              name="heroicons:calendar-days"
              class="w-16 h-16 mx-auto mb-6"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              TERMINE
            </h3>
            <h4
              class="text-lg font-semibold mb-3"
              style="color: var(--color-secondary-900)"
            >
              Saisonerröffnugen und diverse Sportevents
            </h4>
            <p class="text-gray-600 text-sm">
              Wir veranstalten über den Sommer diverse Tennisevents. Angefangen von Saisoneröffnungen im Mai,
              über Cups während der Saison, bis hin zum Sommerfest und Abschlussfeier.
            </p>
          </div>

          <!-- Trainingsangebote -->
          <div class="tennis-card p-8 text-center">
            <Icon
              name="heroicons:academic-cap"
              class="w-16 h-16 mx-auto mb-6"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              TRAININGSANGEBOTE
            </h3>
            <h4
              class="text-lg font-semibold mb-3"
              style="color: var(--color-secondary-900)"
            >
              Ihnen steht eine vielzahl von verschiedenen Trainingsangeboten zur Auswahl
            </h4>
            <ul class="text-gray-600 text-sm space-y-2 text-left">
              <li>• Jugendtraining in verschiedenen Leistungsgruppen</li>
              <li>• Individualtraining in Form von Einzelstunden</li>
              <li>• Matchtraining</li>
              <li>• Konditionstraining</li>
              <li>• mehr . . .</li>
            </ul>
          </div>

          <!-- Tennisplätze -->
          <div class="tennis-card p-8 text-center">
            <Icon
              name="heroicons:building-office-2"
              class="w-16 h-16 mx-auto mb-6"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              TENNISPLÄTZE
            </h3>
            <h4
              class="text-lg font-semibold mb-3"
              style="color: var(--color-secondary-900)"
            >
              Unsere schöne Anlage
            </h4>
            <p class="text-gray-600 text-sm">
              Unsere Tennishalle bietet drei Indoor Tennisplätze mit einem gedämpften / gelenk-schonenden Teppichboden.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Opening Hours -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Öffnungszeiten
          </h2>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="tennis-card p-8">
            <div class="text-center mb-6">
              <Icon
                name="heroicons:clock"
                class="w-12 h-12 mx-auto mb-4"
                style="color: var(--tennis-green)"
              />
              <h3
                class="text-xl font-semibold mb-4"
                style="color: var(--tennis-green-dark)"
              >
                Tennishalle
              </h3>
            </div>
            <div class="space-y-3 text-gray-600">
              <div class="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>08:00 - 22:00 Uhr</span>
              </div>
              <div class="flex justify-between">
                <span>Samstag:</span>
                <span>08:00 - 20:00 Uhr</span>
              </div>
              <div class="flex justify-between">
                <span>Sonntag:</span>
                <span>09:00 - 20:00 Uhr</span>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-6 text-center">
              Öffnungszeiten können an Feiertagen und während der Ferienzeiten abweichen.
              Aktuelle Informationen erhalten Sie telefonisch oder per E-Mail.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Anfahrt -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="tennis-card p-8">
            <h2
              class="text-3xl font-bold mb-6 text-center"
              style="color: var(--tennis-green-dark)"
            >
              Anfahrt
            </h2>

            <div class="text-center mb-8">
              <h3
                class="text-xl font-semibold mb-4"
                style="color: var(--color-secondary-900)"
              >
                Unsere Tennishalle ist leicht zu finden!
              </h3>
              <p class="text-gray-600 text-lg">
                Wenn Sie aus Richtung Traunstein kommen, fahren Sie bei Kreisverkehr sofort rechts.<br>
                Sie folgen der Strasse ca. 700 Meter und finden die Tennishalle auf der rechten Seite
                kurz vor den Ampeln und den Bahngleisen.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4
                  class="text-lg font-semibold mb-4"
                  style="color: var(--tennis-green-dark)"
                >
                  Adresse
                </h4>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:map-pin"
                      class="w-5 h-5 mr-3"
                      style="color: var(--color-secondary-900)"
                    />
                    <span class="text-gray-600">Traunring 118, 83301 Traunreut, Deutschland</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:envelope"
                      class="w-5 h-5 mr-3"
                      style="color: var(--color-secondary-900)"
                    />
                    <span class="text-gray-600">info@tennishalle-traunreut.de</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:phone"
                      class="w-5 h-5 mr-3"
                      style="color: var(--color-secondary-900)"
                    />
                    <span class="text-gray-600">+49 (0) 8669 - 2971</span>
                  </div>
                </div>
              </div>

              <div>
                <h4
                  class="text-lg font-semibold mb-4"
                  style="color: var(--tennis-green-dark)"
                >
                  Anfahrt
                </h4>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <p class="text-gray-600 text-sm">
                    <strong>Von Traunstein:</strong><br>
                    Bei Kreisverkehr sofort rechts abbiegen<br>
                    Straße ca. 700 Meter folgen<br>
                    Tennishalle auf der rechten Seite vor den Ampeln und Bahngleisen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Booking Section -->
    <section class="py-16 tennis-gradient text-white">
      <UContainer>
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">
            Platz reservieren
          </h2>
          <p class="text-lg mb-8 text-green-100">
            Buchen Sie Ihren Tennishallenplatz bequem online
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/booking"
              class="btn-tennis-secondary"
            >
              Jetzt buchen
            </NuxtLink>
            <a
              href="tel:+4986692971"
              class="btn-tennis-primary"
            >
              Telefonisch buchen
            </a>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
// SEO meta tags
useSeoMeta({
  title: 'Tennishalle - TUS Traunreut Tennis',
  description: 'TUS 3-Feld Tennishalle in Traunreut: Wetterunabhängiges Tennis spielen das ganze Jahr. Gedämpfter Teppichboden für gelenk-schonendes Spielen.',
  ogTitle: 'Tennishalle - TUS Traunreut Tennis',
  ogDescription: 'TUS 3-Feld Tennishalle in Traunreut: Wetterunabhängiges Tennis spielen das ganze Jahr. Gedämpfter Teppichboden für gelenk-schonendes Spielen.',
  ogImage: '/tennis-hall.jpg',
  twitterCard: 'summary_large_image',
});
</script>
