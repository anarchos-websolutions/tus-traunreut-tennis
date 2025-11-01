<template>
  <div class="min-h-screen">
    <PageHeader
      title="Aktuelles"
      description="Neuigkeiten und Berichte aus der Tennisabteilung"
    />

    <!-- Latest News -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="space-y-8">
          <!-- News Article 1 -->
          <NuxtLink
            to="/aktuelles/platz-sanierung-2025"
            class="block"
          >
            <article
              class="tennis-card p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div
                    class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Icon
                      name="heroicons:photo"
                      class="w-16 h-16 text-gray-400 group-hover:text-gray-500 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div class="md:w-3/4">
                  <div class="flex items-center gap-4 mb-3">
                    <span
                      class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      Saison 2025
                    </span>
                    <span class="text-gray-500 text-sm">März 11, 2021</span>
                  </div>
                  <h2
                    class="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300"
                    style="color: var(--tennis-green-dark)"
                  >
                    Plätze werden saniert und vorbereitet
                  </h2>
                  <p class="text-gray-600 mb-4">
                    Das Tennis-Spielen kann bald losgehen, mit dem herrichten der Plätze wird bald
                    begonnen!
                    Die Außenplätze werden professionell aufbereitet und für die neue Saison
                    vorbereitet.
                  </p>
                  <p class="text-gray-600 mb-4">
                    <strong>Wichtiger Hinweis:</strong> Spielen nur nach vorheriger Buchung möglich.
                    Nutzen Sie unser Online-Buchungssystem oder rufen Sie uns an.
                  </p>
                  <div
                    class="text-orange-600 group-hover:text-orange-700 font-medium transition-colors duration-300"
                  >
                    Artikel lesen →
                  </div>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- News Article 2 -->
          <article class="tennis-card p-8">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/4">
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <Icon
                    name="heroicons:document-text"
                    class="w-16 h-16 text-gray-400"
                  />
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="flex items-center gap-4 mb-3">
                  <span
                    class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    Information
                  </span>
                  <span class="text-gray-500 text-sm">März 11, 2021</span>
                </div>
                <h2
                  class="text-2xl font-bold mb-4"
                  style="color: var(--tennis-green-dark)"
                >
                  Information für Abospieler der Saison 2020/2021
                </h2>
                <p class="text-gray-600 mb-4">
                  Unsere Abokunden erhalten ihren Ausfall während der Corona Sperren erstattet.
                  Am Ende des ABOs werden alle Spieler automatisch benachrichtigt.
                </p>
                <p class="text-gray-600 mb-4">
                  Für weitere Informationen und Kontaktaufnahme wenden Sie sich bitte an:
                  <a
                    href="mailto:info@tennishalle-traunreut.de"
                    class="text-orange-600 hover:text-orange-700"
                  >
                    info@tennishalle-traunreut.de
                  </a>
                </p>
                <p class="text-sm text-gray-500 italic">
                  Ihre Tennisleitung
                </p>
              </div>
            </div>
          </article>

          <!-- News Article 3 -->
          <article class="tennis-card p-8">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/4">
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <Icon
                    name="heroicons:users"
                    class="w-16 h-16 text-gray-400"
                  />
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="flex items-center gap-4 mb-3">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Vereinsführung
                  </span>
                  <span class="text-gray-500 text-sm">Januar 15, 2021</span>
                </div>
                <h2
                  class="text-2xl font-bold mb-4"
                  style="color: var(--tennis-green-dark)"
                >
                  Neue Abteilungsleitung übernimmt das Ruder
                </h2>
                <p class="text-gray-600 mb-4">
                  Nach zwölf erfolgreichen Jahren hat Christel Hofmann die Leitung der Tennisabteilung
                  abgegeben.
                  Das neue Führungsteam bestehend aus Markus Petzka, Tino Trefil und Markus Luprich
                  übernimmt die Verantwortung.
                </p>
                <p class="text-gray-600 mb-4">
                  Ein Schwerpunkt der neuen Leitung liegt auf der Digitalisierung und der
                  Zusammenführung von
                  Abteilung und Tennishalle unter einem Dach. Das neue Online-Buchungssystem soll die
                  Platzauslastung optimieren.
                </p>
                <NuxtLink
                  to="/abteilung"
                  class="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Mehr zur Abteilungsleitung →
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Upcoming Events -->
    <!--  <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Kommende <span style="color: var(--color-secondary-900)">Termine</span>
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto mb-6" />
          <p class="text-lg text-gray-600">
            Alle Termine anzeigen...
          </p>
        </div>

        <div class="max-w-2xl mx-auto tennis-card p-8 text-center">
          <Icon
            name="heroicons:calendar-days"
            class="w-16 h-16 mx-auto mb-6"
            style="color: var(--color-secondary-900)"
          />
          <h3
            class="text-xl font-semibold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Keine Termine gefunden
          </h3>
          <p class="text-gray-600 mb-6">
            Derzeit sind keine besonderen Termine geplant.
            Schauen Sie regelmäßig vorbei oder melden Sie sich für unseren Newsletter an.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/"
              class="btn-tennis-secondary"
            >
              Newsletter abonnieren
            </NuxtLink>
            <a
              href="mailto:info@tennis-traunreut.de"
              class="btn-tennis-primary"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </UContainer>
    </section> -->

    <!-- News Categories -->
    <!--  <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Kategorien
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto" />
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            to="/aktuelles/berichte"
            class="tennis-card p-6 text-center"
          >
            <Icon
              name="heroicons:document-text"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Berichte
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Berichte von Turnieren, Events und besonderen Ereignissen
            </p>
            <span class="text-orange-600 text-sm font-medium">{{ reports.length }} Artikel</span>
          </NuxtLink>

          <div class="tennis-card p-6 text-center">
            <Icon
              name="heroicons:calendar-days"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Termine
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Wichtige Termine und Veranstaltungen der Tennisabteilung
            </p>
            <span class="text-orange-600 text-sm font-medium">0 Termine</span>
          </div>

          <div class="tennis-card p-6 text-center">
            <Icon
              name="heroicons:megaphone"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--color-secondary-900)"
            />
            <h3
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Vereinsnews
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Neuigkeiten aus dem Vereinsleben und der Abteilungsführung
            </p>
            <span class="text-orange-600 text-sm font-medium">2 Artikel</span>
          </div>

          <div class="tennis-card p-6 text-center">
            <Icon
              name="heroicons:trophy"
              class="w-12 h-12 mx-auto mb-4"
              style="color: var(--tennis-green)"
            />
            <h3
              class="text-lg font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Erfolge
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Erfolge unserer Spieler und Teams bei Turnieren
            </p>
            <span class="text-orange-600 text-sm font-medium">1 Artikel</span>
          </div>
        </div>
      </UContainer>
    </section> -->

    <Newsletter
      title="BLEIBEN SIE INFORMIERT"
      description="Melden Sie sich für unseren Newsletter an und erhalten Sie die neuesten Neuigkeiten und Aktivitäten der TUS Traunreut Tennisabteilung."
    />
  </div>
</template>

<script setup>
// SEO meta tags
useSeoMeta({
  title: 'Aktuelles - TUS Traunreut Tennis',
  description: 'Aktuelle Neuigkeiten, Berichte und Termine der TUS Traunreut Tennisabteilung. Bleiben Sie informiert über Vereinsaktivitäten und wichtige Ankündigungen.',
  ogTitle: 'Aktuelles - TUS Traunreut Tennis',
  ogDescription: 'Aktuelle Neuigkeiten, Berichte und Termine der TUS Traunreut Tennisabteilung. Bleiben Sie informiert über Vereinsaktivitäten und wichtige Ankündigungen.',
  ogImage: '/tennis-news.jpg',
  twitterCard: 'summary_large_image',
});

// Fetch all content files from the content directory
/* const { data: allContent } = await useAsyncData('all-content', () =>
  queryCollection('content').all(),
);

const { data: reports } = await useAsyncData('reports', () =>
  queryCollection('content').where('path', 'LIKE', '/reports/%').all(),
); */

// Fetch blog articles specifically
/* const { data: blogArticles } = await useAsyncData('blog-articles', () =>
  queryCollection('content').where('path', 'LIKE', '/blog/%').all(),
); */

/* watch(allContent, () => {
  logger.debug('all content files', allContent.value);
}, { immediate: true });

watch(reports, () => {
  logger.debug('reports', reports.value);
}, { immediate: true }); */
</script>
