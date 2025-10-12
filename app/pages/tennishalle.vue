<template>
  <div class="min-h-screen">
    <PageHeader
      title="Tennisplätze"
      description="Moderne Tennisanlagen für optimales Spielvergnügen"
    />

    <!-- Facilities Overview -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Unsere <span style="color: var(--color-secondary-900)">Tennisanlage</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere Anlage bietet zwei Outdoor Tennisplätze sowie eine Tennishalle mit drei Spielfeldern zur Nutzung.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Outdoor Courts -->
          <div class="tennis-card p-8">
            <div class="flex items-center mb-6">
              <Icon
                name="heroicons:sun"
                class="w-12 h-12 mr-4"
                style="color: var(--color-secondary-900)"
              />
              <h3
                class="text-2xl font-bold"
                style="color: var(--tennis-green-dark)"
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
                    2 Outdoor Plätze
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
                class="w-12 h-12 mr-4"
                style="color: var(--tennis-green)"
              />
              <h3
                class="text-2xl font-bold"
                style="color: var(--tennis-green-dark)"
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
      </UContainer>
    </section>

    <!-- Court Details -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Platz<span style="color: var(--color-secondary-900)">details</span>
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto" />
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Court Specifications -->
          <div class="tennis-card p-6">
            <Icon
              name="heroicons:rectangle-stack"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-xl font-semibold mb-4 text-center"
              style="color: var(--tennis-green-dark)"
            >
              Platzspezifikationen
            </h3>
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
            <Icon
              name="heroicons:wrench-screwdriver"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-xl font-semibold mb-4 text-center"
              style="color: var(--tennis-green-dark)"
            >
              Ausstattung
            </h3>
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
            <Icon
              name="heroicons:cog-6-tooth"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-xl font-semibold mb-4 text-center"
              style="color: var(--tennis-green-dark)"
            >
              Services
            </h3>
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
            Öffnungs<span style="color: var(--color-secondary-900)">zeiten</span>
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto mb-6" />
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Indoor Hours -->
            <div class="tennis-card p-8">
              <div class="text-center mb-6">
                <Icon
                  name="heroicons:building-office-2"
                  class="w-12 h-12 mx-auto mb-3"
                  style="color: var(--tennis-green)"
                />
                <h3
                  class="text-xl font-semibold"
                  style="color: var(--tennis-green-dark)"
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
                  class="w-12 h-12 mx-auto mb-3"
                  style="color: var(--color-secondary-900)"
                />
                <h3
                  class="text-xl font-semibold"
                  style="color: var(--tennis-green-dark)"
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

          <div class="mt-8 p-4 bg-[var(--color-secondary-50)] rounded-lg">
            <p class="text-sm text-gray-600 text-center">
              <Icon
                name="heroicons:information-circle"
                class="w-5 h-5 inline mr-2"
                style="color: var(--color-secondary-900)"
              />
              Öffnungszeiten können an Feiertagen und während der Ferienzeiten abweichen.
              Aktuelle Informationen erhalten Sie telefonisch oder per E-Mail.
            </p>
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
          <p class="body-lg-dark mb-8">
            Buchen Sie Ihren Tennisplatz schnell und einfach online oder telefonisch
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/booking"
              class="btn-tennis-secondary text-lg px-8 py-3"
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

          <div class="mt-8 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
        </div>
      </UContainer>
    </section>
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
