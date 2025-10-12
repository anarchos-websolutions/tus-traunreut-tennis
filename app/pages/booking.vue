<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section class="tennis-gradient text-white py-16">
      <UContainer>
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="text-[var(--color-secondary-200)]">Jetzt Buchen</span>
          </h1>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto mb-6" />
          <p class="text-xl text-green-100">
            Reservieren Sie Ihren Tennisplatz schnell und einfach
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Booking Options -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Buchungs<span style="color: var(--color-secondary-900)">optionen</span>
          </h2>
          <p class="text-lg text-gray-600">
            Wählen Sie Ihre bevorzugte Buchungsmethode
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Online Booking -->
          <div class="tennis-card p-8 text-center">
            <Icon
              name="heroicons:computer-desktop"
              class="w-16 h-16 mx-auto mb-6"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-2xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              Online-Buchungssystem
            </h3>
            <p class="text-gray-600 mb-6">
              Nutzen Sie unser modernes Online-Buchungssystem für eine nahtlose und benutzerfreundliche
              Platzreservierung mit dem Smartphone oder Computer.
            </p>

            <div class="space-y-3 text-left mb-6">
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">24/7 verfügbar</span>
              </div>
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Sofortige Bestätigung</span>
              </div>
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Übersicht freier Plätze</span>
              </div>
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Online-Bezahlung möglich</span>
              </div>
            </div>

            <button class="w-full btn-tennis-secondary mb-4">
              Online-System öffnen
            </button>
            <p class="text-sm text-gray-500">
              Registrierung erforderlich
            </p>
          </div>

          <!-- Phone Booking -->
          <div class="tennis-card p-8 text-center">
            <Icon
              name="heroicons:phone"
              class="w-16 h-16 mx-auto mb-6"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-2xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              Telefonische Buchung
            </h3>
            <p class="text-gray-600 mb-6">
              Rufen Sie uns an und reservieren Sie Ihren Platz direkt am Telefon.
              Unser Team berät Sie gerne und findet den passenden Termin für Sie.
            </p>

            <div class="space-y-3 text-left mb-6">
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Persönliche Beratung</span>
              </div>
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Flexible Terminabsprache</span>
              </div>
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Sonderwünsche möglich</span>
              </div>
              <div class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-5 h-5 mr-3 text-green-600"
                />
                <span class="text-gray-600">Keine Registrierung nötig</span>
              </div>
            </div>

            <a
              href="tel:+4986692971"
              class="w-full btn-tennis-primary mb-4 block text-center"
            >
              +49 (0) 8669 - 2971
            </a>
            <p class="text-sm text-gray-500">
              Mo-Fr: 08:00-22:00 Uhr
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Booking Information -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Wichtige <span style="color: var(--color-secondary-900)">Informationen</span>
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto" />
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Booking Rules -->
          <div class="tennis-card p-6">
            <Icon
              name="heroicons:document-text"
              class="w-12 h-12 mb-4"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              Buchungsregeln
            </h3>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-start">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 mt-0.5 text-green-600"
                />
                <span>Buchung nur nach vorheriger Reservierung</span>
              </li>
              <li class="flex items-start">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 mt-0.5 text-green-600"
                />
                <span>Mindestbuchungsdauer: 1 Stunde</span>
              </li>
              <li class="flex items-start">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 mt-0.5 text-green-600"
                />
                <span>Stornierung bis 24h vorher kostenfrei</span>
              </li>
              <li class="flex items-start">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 mt-0.5 text-green-600"
                />
                <span>Pünktliches Erscheinen erforderlich</span>
              </li>
            </ul>
          </div>

          <!-- Prices -->
          <div class="tennis-card p-6">
            <Icon
              name="heroicons:currency-euro"
              class="w-12 h-12 mb-4"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              Preise pro Stunde
            </h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Tennishalle (Mitglieder):</span>
                <span class="font-semibold">25 €</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tennishalle (Gäste):</span>
                <span class="font-semibold">35 €</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Außenplatz (Mitglieder):</span>
                <span class="font-semibold">15 €</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Außenplatz (Gäste):</span>
                <span class="font-semibold">20 €</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Flutlicht (zusätzlich):</span>
                <span class="font-semibold">5 €</span>
              </div>
            </div>
          </div>

          <!-- Payment -->
          <div class="tennis-card p-6">
            <Icon
              name="heroicons:credit-card"
              class="w-12 h-12 mb-4"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-xl font-semibold mb-4"
              style="color: var(--tennis-green-dark)"
            >
              Zahlungsarten
            </h3>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 text-green-600"
                />
                <span>EC-Karte</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 text-green-600"
                />
                <span>Kreditkarte</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 text-green-600"
                />
                <span>Bargeld</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 text-green-600"
                />
                <span>Online-Zahlung</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="heroicons:check"
                  class="w-4 h-4 mr-2 text-green-600"
                />
                <span>Rechnung (Mitglieder)</span>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Court Availability -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Platz<span style="color: var(--color-secondary-900)">verfügbarkeit</span>
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto mb-6" />
          <p class="text-lg text-gray-600">
            Übersicht unserer Tennisplätze und deren Verfügbarkeit
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Indoor Courts -->
          <div class="tennis-card p-8">
            <div class="text-center mb-6">
              <Icon
                name="heroicons:building-office-2"
                class="w-16 h-16 mx-auto mb-4"
                style="color: var(--tennis-green)"
              />
              <h3
                class="text-2xl font-semibold"
                style="color: var(--tennis-green-dark)"
              >
                Tennishalle
              </h3>
              <p class="text-gray-600">
                3 Plätze verfügbar
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="font-medium">Platz 1</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Verfügbar</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="font-medium">Platz 2</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Verfügbar</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="font-medium">Platz 3</span>
                <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Belegt bis 20:00</span>
              </div>
            </div>

            <div class="mt-6 p-4 bg-green-50 rounded-lg">
              <p class="text-sm text-green-800 text-center">
                <Icon
                  name="heroicons:information-circle"
                  class="w-4 h-4 inline mr-1"
                />
                Ganzjährig verfügbar, wetterunabhängig
              </p>
            </div>
          </div>

          <!-- Outdoor Courts -->
          <div class="tennis-card p-8">
            <div class="text-center mb-6">
              <Icon
                name="heroicons:sun"
                class="w-16 h-16 mx-auto mb-4"
                style="color: var(--color-secondary-900)"
              />
              <h3
                class="text-2xl font-semibold"
                style="color: var(--tennis-green-dark)"
              >
                Außenplätze
              </h3>
              <p class="text-gray-600">
                2 Sandplätze
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="font-medium">Sandplatz 1</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Verfügbar</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="font-medium">Sandplatz 2</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Verfügbar</span>
              </div>
            </div>

            <div class="mt-6 p-4 bg-orange-50 rounded-lg">
              <p class="text-sm text-orange-800 text-center">
                <Icon
                  name="heroicons:information-circle"
                  class="w-4 h-4 inline mr-1"
                />
                Saisonabhängig (April - Oktober), wetterabhängig
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact for Booking -->
    <section class="py-16 tennis-gradient text-white">
      <UContainer>
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">
            Haben Sie Fragen zur Buchung?
          </h2>
          <p class="text-lg mb-8 text-green-100">
            Unser Team steht Ihnen gerne zur Verfügung
          </p>

          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Icon
                name="heroicons:phone"
                class="w-8 h-8 mx-auto mb-3"
              />
              <h3 class="font-semibold mb-2">
                Telefon
              </h3>
              <a
                href="tel:+4986692971"
                class="text-green-100 hover:text-white"
              >
                +49 (0) 8669 - 2971
              </a>
            </div>
            <div>
              <Icon
                name="heroicons:envelope"
                class="w-8 h-8 mx-auto mb-3"
              />
              <h3 class="font-semibold mb-2">
                E-Mail
              </h3>
              <a
                href="mailto:info@tennishalle-traunreut.de"
                class="text-green-100 hover:text-white"
              >
                info@tennishalle-traunreut.de
              </a>
            </div>
            <div>
              <Icon
                name="heroicons:map-pin"
                class="w-8 h-8 mx-auto mb-3"
              />
              <h3 class="font-semibold mb-2">
                Adresse
              </h3>
              <p class="text-green-100">
                Traunring 118<br>
                83301 Traunreut
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
  title: 'Jetzt Buchen - TUS Traunreut Tennis',
  description: 'Buchen Sie Ihren Tennisplatz bei TUS Traunreut online oder telefonisch. Tennishalle und Außenplätze verfügbar. Einfache Reservierung mit sofortiger Bestätigung.',
  ogTitle: 'Jetzt Buchen - TUS Traunreut Tennis',
  ogDescription: 'Buchen Sie Ihren Tennisplatz bei TUS Traunreut online oder telefonisch. Tennishalle und Außenplätze verfügbar. Einfache Reservierung mit sofortiger Bestätigung.',
  ogImage: '/tennis-booking.jpg',
  twitterCard: 'summary_large_image',
});
</script>
