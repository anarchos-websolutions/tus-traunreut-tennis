<template>
  <div class="min-h-screen">
    <PageHeader
      title="Tennisplätze"
      description="Moderne Tennisanlagen für optimales Spielvergnügen"
    />

    <!-- Facilities Overview -->
    <Section
      title="Unsere <span class='text-primary-500'>Tennisanlage</span>"
      description="Unsere Anlage bietet acht Outdoor Tennisplätze sowie eine Tennishalle mit drei Spielfeldern zur Nutzung."
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Outdoor Courts -->
        <div class="tennis-card p-8">
          <div class="flex items-center mb-6">
            <Icon
              name="heroicons:sun"
              class="w-12 h-12 mr-4 text-secondary-900"
            />
            <h3
              class="text-2xl font-bold"
            >
              Sand-Tennisplätze
            </h3>
          </div>

          <div class="space-y-4 text-gray-600">
            <div class="flex items-start">
              <Icon
                name="heroicons:check-circle"
                class="w-6 h-6 mr-3 mt-0.5 text-green-600"
              />
              <div>
                <h4 class="font-semibold">
                  8 Outdoor Plätze
                </h4>
                <p class="text-sm">
                  Professionelle Sandplätze mit optimaler Drainage
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
                  Saisonale Nutzung
                </h4>
                <p class="text-sm">
                  Von April bis Oktober wetterabhängig
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
                  Professionelle Pflege
                </h4>
                <p class="text-sm">
                  Regelmäßige Wartung und Instandhaltung
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
                  Flutlichtanlage
                </h4>
                <p class="text-sm">
                  Spielen auch in den Abendstunden möglich
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Indoor Courts -->
        <div class="tennis-card p-8">
          <div class="flex items-center mb-6">
            <Icon
              name="heroicons:building-office-2"
              class="w-12 h-12 mr-4 text-secondary-900"
            />
            <h3
              class="text-2xl font-bold"
            >
              Tennishalle
            </h3>
          </div>

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
                  Moderne Ausstattung
                </h4>
                <p class="text-sm">
                  Optimale Beleuchtung und Belüftung
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
                  Ganzjährig geöffnet
                </h4>
                <p class="text-sm">
                  365 Tage im Jahr spielbereit
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
                  Online-Buchung
                </h4>
                <p class="text-sm">
                  Einfache Platzreservierung per App oder Website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- Court Details -->
    <Section
      title="Platz<span class='text-primary-500'>details</span>"
      description="Unsere Plätze bieten eine Vielzahl von spezifischen Eigenschaften und Ausstattung."
    >
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Court Specifications -->
        <div class="tennis-card p-6">
          <div class="flex items-center mb-6">
            <Icon
              name="heroicons:rectangle-stack"
              class="w-12 h-12 mr-4 text-secondary-900"
            />
            <h3
              class="text-2xl font-bold"
            >
              Platzspezifikationen
            </h3>
          </div>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex justify-between">
              <span>Platzgröße:</span>
              <span>23,77 x 10,97 m</span>
            </li>
            <li class="flex justify-between">
              <span>Outdoor-Belag:</span>
              <span>Sandplatz</span>
            </li>
            <li class="flex justify-between">
              <span>Indoor-Belag:</span>
              <span>Teppichboden</span>
            </li>
            <li class="flex justify-between">
              <span>Netzhöhe:</span>
              <span>91,4 cm</span>
            </li>
            <li class="flex justify-between">
              <span>Linienstärke:</span>
              <span>5 cm</span>
            </li>
          </ul>
        </div>

        <!-- Equipment -->
        <div class="tennis-card p-6">
          <div class="flex items-center mb-6">
            <Icon
              name="heroicons:wrench-screwdriver"
              class="w-12 h-12 mr-4 text-secondary-900"
            />
            <h3
              class="text-2xl font-bold"
            >
              Ausstattung
            </h3>
          </div>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Professionelle Netze</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Schiedsrichterstühle</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Sitzgelegenheiten</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Ballabpraller</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Windschutz (Outdoor)</span>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="tennis-card p-6">
          <div class="flex items-center mb-6">
            <Icon
              name="heroicons:cog-6-tooth"
              class="w-12 h-12 mr-4 text-secondary-900"
            />
            <h3
              class="text-2xl font-bold"
            >
              Services
            </h3>
          </div>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Schlägerverleih</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Ballverkauf</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Umkleidekabinen</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Duschen</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Parkplätze</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>

    <!-- Opening Hours -->
    <Section
      title="Öffnungs<span class='text-primary-500'>zeiten</span>"
      description="Unsere Öffnungszeiten für unsere Plätze und Tennishalle."
    >
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Indoor Hours -->
        <div class="tennis-card p-8">
          <div class="text-center mb-6">
            <Icon
              name="heroicons:building-office-2"
              class="w-12 h-12 mx-auto mb-3 text-primary-500"
            />
            <h3
              class="text-xl font-semibold text-primary-500"
            >
              Tennishalle
            </h3>
            <p class="text-sm text-gray-600">
              Ganzjährig geöffnet
            </p>
          </div>

          <div class="space-y-3 text-gray-600">
            <div class="flex justify-between">
              <span>Montag - Freitag</span>
              <span>08:00 - 22:00 Uhr</span>
            </div>
            <div class="flex justify-between">
              <span>Samstag</span>
              <span>08:00 - 20:00 Uhr</span>
            </div>
            <div class="flex justify-between">
              <span>Sonntag</span>
              <span>09:00 - 20:00 Uhr</span>
            </div>
            <div class="flex justify-between font-semibold">
              <span>Feiertage</span>
              <span>10:00 - 18:00 Uhr</span>
            </div>
          </div>
        </div>

        <!-- Outdoor Hours -->
        <div class="tennis-card p-8">
          <div class="text-center mb-6">
            <Icon
              name="heroicons:sun"
              class="w-12 h-12 mx-auto mb-3 text-secondary-900"
            />
            <h3
              class="text-xl font-semibold text-primary-600"
            >
              Außenplätze
            </h3>
            <p class="text-sm text-gray-600">
              April - Oktober (wetterabhängig)
            </p>
          </div>

          <div class="space-y-3 text-gray-600">
            <div class="flex justify-between">
              <span>Montag - Freitag</span>
              <span>08:00 - 21:00 Uhr</span>
            </div>
            <div class="flex justify-between">
              <span>Samstag</span>
              <span>08:00 - 20:00 Uhr</span>
            </div>
            <div class="flex justify-between">
              <span>Sonntag</span>
              <span>09:00 - 20:00 Uhr</span>
            </div>
            <div class="flex justify-between font-semibold">
              <span>Flutlicht bis</span>
              <span>22:00 Uhr</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 p-4 bg-secondary-50 rounded-lg">
        <p class="text-sm text-gray-600 text-center">
          <Icon
            name="heroicons:information-circle"
            class="w-5 h-5 inline mr-2 text-secondary-900"
          />
          Öffnungszeiten können an Feiertagen und während der Ferienzeiten abweichen.
          Aktuelle Informationen erhalten Sie telefonisch oder per E-Mail.
        </p>
      </div>
    </Section>

    <!-- Booking Section -->
    <Section
      title="Platz reservieren"
      description="Buchen Sie Ihren Tennisplatz schnell und einfach online oder telefonisch"
      class="tennis-gradient text-white"
    >
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/booking"
          class="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all"
        >
          Online buchen
        </NuxtLink>
        <a
          href="tel:+4986692971"
          class="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all"
        >
          Telefonisch buchen
        </a>
      </div>

      <div class="mt-8 grid md:grid-cols-2 gap-8 justify-items-center">
        <div>
          <Icon
            name="heroicons:envelope"
            class="w-8 h-8 mx-auto mb-3"
          />
          <h3 class="font-semibold mb-2">
            E-Mail
          </h3>
          <p class="body-md-dark">
            info@tennishalle-traunreut.de
          </p>
        </div>
        <div>
          <Icon
            name="heroicons:phone"
            class="w-8 h-8 mx-auto mb-3"
          />
          <h3 class="font-semibold mb-2">
            Telefon
          </h3>
          <p class="body-md-dark">
            +49 (0) 8669 - 2971
          </p>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
// SEO meta tags
useSeoMeta({
  title: 'Tennisplätze - TUS Traunreut Tennis',
  description: 'Moderne Tennisanlagen bei TUS Traunreut: 2 Outdoor Sand-Tennisplätze und eine Tennishalle mit 3 Plätzen. Ganzjährig buchbar mit Online-Reservierung.',
  ogTitle: 'Tennisplätze - TUS Traunreut Tennis',
  ogDescription: 'Moderne Tennisanlagen bei TUS Traunreut: 2 Outdoor Sand-Tennisplätze und eine Tennishalle mit 3 Plätzen. Ganzjährig buchbar mit Online-Reservierung.',
  ogImage: '/tennis-courts.jpg',
  twitterCard: 'summary_large_image',
});
</script>
