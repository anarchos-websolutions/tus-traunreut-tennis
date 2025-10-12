<template>
  <div class="min-h-screen">
    <PageHeader
      title="Berichte"
      description="Berichte von Turnieren, Events und besonderen Ereignissen"
    />

    <!-- Reports List -->
    <section class="py-16 bg-white">
      <UContainer>
        <div
          v-if="reports && reports.length > 0"
          class="space-y-8"
        >
          <!-- Report Article -->
          <article
            v-for="report in reports"
            :key="report._id"
            class="tennis-card p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <NuxtLink
              :to="`/aktuelles/berichte/${report._path?.split('/').pop()}`"
              class="block group"
            >
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                    <Icon
                      name="heroicons:document-text"
                      class="w-16 h-16 text-gray-400 group-hover:text-gray-500 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div class="md:w-3/4">
                  <div class="flex items-center gap-4 mb-3">
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Berichte
                    </span>
                    <span class="text-gray-500 text-sm">{{ formatDate(report.date) }}</span>
                  </div>
                  <h2
                    class="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300"
                    style="color: var(--tennis-green-dark)"
                  >
                    {{ report.title }}
                  </h2>
                  <p class="text-gray-600 mb-4">
                    {{ report.description }}
                  </p>
                  <div class="text-orange-600 group-hover:text-orange-700 font-medium transition-colors duration-300">
                    Bericht lesen →
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- No Reports Found -->
        <div
          v-else
          class="max-w-2xl mx-auto tennis-card p-8 text-center"
        >
          <Icon
            name="heroicons:document-text"
            class="w-16 h-16 mx-auto mb-6"
            style="color: var(--color-secondary-900)"
          />
          <h3
            class="text-xl font-semibold mb-4"
            style="color: var(--tennis-green-dark)"
          >
            Keine Berichte gefunden
          </h3>
          <p class="text-gray-600 mb-6">
            Derzeit sind keine Berichte verfügbar.
            Schauen Sie regelmäßig vorbei oder melden Sie sich für unseren Newsletter an.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/aktuelles"
              class="btn-tennis-secondary"
            >
              Zurück zu Aktuelles
            </NuxtLink>
            <NuxtLink
              to="/"
              class="btn-tennis-primary"
            >
              Newsletter abonnieren
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Categories -->
    <section class="py-16 bg-gray-50">
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
          <!-- Berichte -->
          <div class="tennis-card p-6 text-center bg-green-50 border-2 border-green-200">
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
            <span class="text-orange-600 text-sm font-medium">{{ reports?.length || 0 }} Artikel</span>
          </div>

          <!-- Termine -->
          <NuxtLink
            to="/aktuelles/termine"
            class="tennis-card p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
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
          </NuxtLink>

          <!-- Vereinsnews -->
          <NuxtLink
            to="/aktuelles/vereinsnews"
            class="tennis-card p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
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
          </NuxtLink>

          <!-- Erfolge -->
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
    </section>

    <!-- Newsletter -->
    <Newsletter />
  </div>
</template>

<script setup>
// Fetch reports from content directory
const { data: reports } = await useAsyncData('reports', () =>
  queryCollection('content').where('path', 'LIKE', '/reports/%').all(),
);

// Format date helper function
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// SEO meta tags
useSeoMeta({
  title: 'Berichte - TUS Traunreut Tennis',
  description: 'Berichte von Turnieren, Events und besonderen Ereignissen der TUS Traunreut Tennisabteilung. Lesen Sie spannende Berichte über unsere Aktivitäten.',
  ogTitle: 'Berichte - TUS Traunreut Tennis',
  ogDescription: 'Berichte von Turnieren, Events und besonderen Ereignissen der TUS Traunreut Tennisabteilung. Lesen Sie spannende Berichte über unsere Aktivitäten.',
  ogImage: '/tennis-reports.jpg',
  twitterCard: 'summary_large_image',
});

// Debug logging
watch(reports, () => {
  logger.debug('reports data:', reports.value);
}, { immediate: true });
</script>
