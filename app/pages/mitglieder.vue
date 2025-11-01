<template>
  <div class="min-h-screen">
    <PageHeader
      title="Mitglieder"
      description="Werden Sie Teil unserer Tennisfamilie"
    />

    <!-- Membership Benefits -->
    <Section
      title="Mitgliedschafts-<span class='text-primary-500'>Vorteile</span>"
      description="Als Mitglied der TUS Traunreut Tennisabteilung genießen Sie viele Vorteile und sind Teil einer aktiven Tennisgemeinschaft."
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Benefit 1 -->
        <div class="tennis-card p-6 text-center">
          <Icon
            name="heroicons:currency-euro"
            class="w-16 h-16 mx-auto mb-4 text-primary-600"
          />
          <h3
            class="text-xl font-semibold mb-4 text-primary-600"
          >
            Günstige Platzpreise
          </h3>
          <p class="text-gray-600">
            Mitglieder zahlen reduzierte Preise für die Platznutzung sowohl indoor als auch outdoor.
          </p>
        </div>

        <!-- Benefit 2 -->
        <div class="tennis-card p-6 text-center">
          <Icon
            name="heroicons:academic-cap"
            class="w-16 h-16 mx-auto mb-4 text-primary-600"
          />
          <h3
            class="text-xl font-semibold mb-4 text-primary-600"
          >
            Trainingsrabatte
          </h3>
          <p class="text-gray-600">
            Vergünstigte Teilnahme an Gruppen- und Einzeltraining sowie an speziellen Kursen.
          </p>
        </div>

        <!-- Benefit 3 -->
        <div class="tennis-card p-6 text-center">
          <Icon
            name="heroicons:trophy"
            class="w-16 h-16 mx-auto mb-4 text-primary-600"
          />
          <h3
            class="text-xl font-semibold mb-4 text-primary-600"
          >
            Turnierteilnahme
          </h3>
          <p class="text-gray-600">
            Teilnahme an vereinsinternen Turnieren und Meisterschaften mit reduzierten Startgebühren.
          </p>
        </div>

        <!-- Benefit 4 -->
        <div class="tennis-card p-6 text-center">
          <Icon
            name="heroicons:users"
            class="w-16 h-16 mx-auto mb-4 text-primary-600"
          />
          <h3
            class="text-xl font-semibold mb-4 text-primary-600"
          >
            Gemeinschaft
          </h3>
          <p class="text-gray-600">
            Teil einer aktiven Tennisgemeinschaft werden und neue Spielpartner finden.
          </p>
        </div>

        <!-- Benefit 5 -->
        <div class="tennis-card p-6 text-center">
          <Icon
            name="heroicons:calendar-days"
            class="w-16 h-16 mx-auto mb-4 text-primary-600"
          />
          <h3
            class="text-xl font-semibold mb-4 text-primary-600"
          >
            Events & Feste
          </h3>
          <p class="text-gray-600">
            Einladung zu Vereinsveranstaltungen, Sommerfesten und gesellschaftlichen Events.
          </p>
        </div>

        <!-- Benefit 6 -->
        <div class="tennis-card p-6 text-center">
          <Icon
            name="heroicons:clock"
            class="w-16 h-16 mx-auto mb-4 text-primary-600"
          />
          <h3
            class="text-xl font-semibold mb-4 text-primary-600"
          >
            Prioritätsbuchung
          </h3>
          <p class="text-gray-600">
            Bevorzugte Platzreservierung und längere Buchungszeiträume für Mitglieder.
          </p>
        </div>
      </div>
    </Section>

    <!-- Membership Types -->
    <Section
      title="Mitgliedschaftsarten"
      description="Wählen Sie die Mitgliedschaftsart, die am besten zu Ihren Bedürfnissen passt."
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Adult Membership -->
        <div class="tennis-card p-8">
          <div class="text-center mb-6">
            <Icon
              name="heroicons:user"
              class="w-16 h-16 mx-auto mb-4 text-primary-600"
            />
            <h3
              class="text-2xl font-semibold mb-2 text-primary-600"
            >
              Erwachsene
            </h3>
            <p class="text-gray-600">
              Ab 18 Jahren
            </p>
          </div>

          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Jahresbeitrag:</span>
              <span class="font-semibold">120 €</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Aufnahmegebühr:</span>
              <span class="font-semibold">50 €</span>
            </div>
          </div>

          <ul class="space-y-2 text-sm text-gray-600 mb-6">
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Vollmitgliedschaft</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Alle Vorteile inklusive</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Stimmrecht bei Versammlungen</span>
            </li>
          </ul>

          <button class="w-full btn-tennis-primary">
            Mitglied werden
          </button>
        </div>

        <!-- Youth Membership -->
        <div class="tennis-card p-8">
          <div class="text-center mb-6">
            <Icon
              name="heroicons:user"
              class="w-16 h-16 mx-auto mb-4 text-primary-600"
            />
            <h3
              class="text-2xl font-semibold mb-2 text-primary-600"
            >
              Jugendliche
            </h3>
            <p class="text-gray-600">
              Bis 18 Jahre
            </p>
          </div>

          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Jahresbeitrag:</span>
              <span class="font-semibold">60 €</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Aufnahmegebühr:</span>
              <span class="font-semibold">25 €</span>
            </div>
          </div>

          <ul class="space-y-2 text-sm text-gray-600 mb-6">
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Jugendtraining inklusive</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Reduzierte Platzpreise</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Turnierteilnahme</span>
            </li>
          </ul>

          <button class="w-full btn-tennis-secondary">
            Mitglied werden
          </button>
        </div>

        <!-- Family Membership -->
        <div class="tennis-card p-8">
          <div class="text-center mb-6">
            <Icon
              name="heroicons:user-group"
              class="w-16 h-16 mx-auto mb-4 text-primary-600"
            />
            <h3
              class="text-2xl font-semibold mb-2 text-primary-600"
            >
              Familie
            </h3>
            <p class="text-gray-600">
              2 Erwachsene + Kinder
            </p>
          </div>

          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Jahresbeitrag:</span>
              <span class="font-semibold">200 €</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Aufnahmegebühr:</span>
              <span class="font-semibold">75 €</span>
            </div>
          </div>

          <ul class="space-y-2 text-sm text-gray-600 mb-6">
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Bis zu 2 Erwachsene</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Alle Kinder unter 18</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="heroicons:check"
                class="w-4 h-4 mr-2 text-green-600"
              />
              <span>Alle Familienvorteile</span>
            </li>
          </ul>

          <button class="w-full btn-tennis-primary">
            Mitglied werden
          </button>
        </div>
      </div>
    </Section>

    <Section
      title="So werden Sie Mitglied"
      description="Wir freuen uns von Ihnen zu hören und Ihnen bei der Mitgliedschaft zu helfen."
    >
      <div>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div
              class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-primary-600"
            >
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-primary-600"
            >
              Kontakt aufnehmen
            </h3>
            <p class="text-gray-600">
              Nehmen Sie Kontakt mit uns auf per E-Mail oder Telefon.
              Wir beraten Sie gerne über die verschiedenen Mitgliedschaftsoptionen.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div
              class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-primary-600"
            >
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-primary-600"
            >
              Antrag ausfüllen
            </h3>
            <p class="text-gray-600">
              Füllen Sie den Mitgliedsantrag aus. Diesen erhalten Sie von uns per E-Mail oder
              können ihn direkt in der Tennishalle abholen.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div
              class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-primary-600"
            >
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-primary-600"
            >
              Willkommen!
            </h3>
            <p class="text-gray-600">
              Nach Bearbeitung Ihres Antrags erhalten Sie Ihre Mitgliedskarte und
              können alle Vorteile der Mitgliedschaft nutzen.
            </p>
          </div>
        </div>
      </div>
    </Section>

    <!-- Contact Section -->
    <Section
      title="Haben Sie Fragen?"
      description="Kontaktieren Sie uns für weitere Informationen zur Mitgliedschaft"
      class="bg-gray-100"
    >
      <div>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div class="tennis-card p-8">
            <h3
              class="text-2xl font-semibold mb-6 text-primary-600"
            >
              Kontakt
            </h3>

            <div class="space-y-4">
              <div class="flex items-center">
                <Icon
                  name="heroicons:envelope"
                  class="w-6 h-6 mr-4 text-secondary-900"
                />
                <div>
                  <p class="font-medium">
                    E-Mail
                  </p>
                  <a
                    href="mailto:info@tennis-traunreut.de"
                    class="text-gray-600 hover:text-orange-600"
                  >
                    info@tennis-traunreut.de
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <Icon
                  name="heroicons:phone"
                  class="w-6 h-6 mr-4 text-secondary-900"
                />
                <div>
                  <p class="font-medium">
                    Telefon
                  </p>
                  <a
                    href="tel:+4986692971"
                    class="text-gray-600 hover:text-orange-600"
                  >
                    +49 (0) 8669 - 2971
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <Icon
                  name="heroicons:map-pin"
                  class="w-6 h-6 mr-4 text-secondary-900"
                />
                <div>
                  <p class="font-medium">
                    Adresse
                  </p>
                  <p class="text-gray-600">
                    Traunring 118<br>
                    83301 Traunreut, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Contact Form -->
          <div class="tennis-card p-8">
            <h3
              class="text-2xl font-semibold mb-6 text-primary-600"
            >
              Schnellanfrage
            </h3>

            <form class="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ihr Name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
              </div>
              <div>
                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option>Mitgliedschaftsart wählen</option>
                  <option>Erwachsene</option>
                  <option>Jugendliche</option>
                  <option>Familie</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Ihre Nachricht"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <button
                type="submit"
                class="w-full btn-tennis-secondary"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
// SEO meta tags
useSeoMeta({
  title: 'Mitglieder - TUS Traunreut Tennis',
  description: 'Werden Sie Mitglied bei TUS Traunreut Tennis. Günstige Mitgliedschaftsoptionen für Erwachsene, Jugendliche und Familien mit vielen Vorteilen.',
  ogTitle: 'Mitglieder - TUS Traunreut Tennis',
  ogDescription: 'Werden Sie Mitglied bei TUS Traunreut Tennis. Günstige Mitgliedschaftsoptionen für Erwachsene, Jugendliche und Familien mit vielen Vorteilen.',
  ogImage: '/tennis-membership.jpg',
  twitterCard: 'summary_large_image',
});
</script>
