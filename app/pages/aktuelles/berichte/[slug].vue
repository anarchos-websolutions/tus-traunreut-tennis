<template>
  <div class="min-h-screen">
    <!-- Article Header -->
    <section class="tennis-gradient text-white py-16">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <div class="flex items-center gap-2 text-sm">
              <NuxtLink
                to="/aktuelles"
                class="text-green-100 hover:text-white transition-colors duration-300"
              >
                Aktuelles
              </NuxtLink>
              <Icon
                name="heroicons:chevron-right"
                class="w-4 h-4 text-green-200"
              />
              <NuxtLink
                to="/aktuelles/berichte"
                class="text-green-100 hover:text-white transition-colors duration-300"
              >
                Berichte
              </NuxtLink>
              <Icon
                name="heroicons:chevron-right"
                class="w-4 h-4 text-green-200"
              />
              <span class="text-green-200">{{ report?.title }}</span>
            </div>
          </nav>

          <!-- Article Meta -->
          <div class="flex items-center gap-4 mb-6">
            <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Berichte
            </span>
            <span class="text-green-100 text-sm">{{ formatDate(report?.date) }}</span>
            <span
              v-if="report?.author"
              class="text-green-100 text-sm"
            >
              von {{ report.author }}
            </span>
          </div>

          <!-- Article Title -->
          <h1 class="title-hero mb-6">
            {{ report?.title }}
          </h1>

          <!-- Article Excerpt -->
          <p class="text-body-lg-dark mb-8">
            {{ report?.description }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Article Content -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <!-- Article Image -->
          <div class="mb-12">
            <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <Icon
                name="heroicons:document-text"
                class="w-24 h-24 text-gray-400"
              />
            </div>
          </div>

          <!-- Article Body -->
          <div class="prose prose-lg max-w-none">
            <ContentRenderer :value="report" />
          </div>

          <!-- Article Footer -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p class="text-muted text-sm">
                  Veröffentlicht am {{ formatDate(report?.date) }}
                </p>
                <p class="text-muted text-sm">
                  Kategorie: Berichte
                </p>
                <p
                  v-if="report?.author"
                  class="text-muted text-sm"
                >
                  Autor: {{ report.author }}
                </p>
              </div>
              <div class="flex gap-4">
                <NuxtLink
                  to="/aktuelles/berichte"
                  class="btn-tennis-secondary"
                >
                  Alle Berichte
                </NuxtLink>
                <NuxtLink
                  to="/aktuelles"
                  class="btn-tennis-primary"
                >
                  Zurück zu Aktuelles
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Related Reports -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <h2 class="title mb-8">
            Weitere Berichte
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <article
              v-for="relatedReport in relatedReports"
              :key="relatedReport._id"
              class="tennis-card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <NuxtLink
                :to="`/aktuelles/berichte/${relatedReport._path?.split('/').pop()}`"
                class="block"
              >
                <div class="flex items-center gap-4 mb-3">
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Berichte
                  </span>
                  <span class="text-muted text-sm">{{ formatDate(relatedReport.date) }}</span>
                </div>
                <h3 class="title mb-3">{{ relatedReport.title }}</h3>
                <p class="text-body-sm">{{ relatedReport.description }}</p>
              </NuxtLink>
            </article>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Get the slug from the route
const route = useRoute();
const slug = route.params.slug;

// Fetch the specific report
const { data: report } = await useAsyncData(`report-${slug}`, () =>
  queryCollection('content').where('path', '=', `/reports/${slug}`).first(),
);

// Fetch related reports (excluding current one)
const { data: relatedReports } = await useAsyncData('related-reports', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/reports/%')
    .where('_id', '<>', report.value?._id)
    .limit(2)
    .all(),
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

// Handle 404 if report not found
if (!report.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Bericht nicht gefunden',
  });
}

// SEO meta tags
useSeoMeta({
  title: `${report.value?.title} - TUS Traunreut Tennis`,
  description: report.value?.description,
  ogTitle: report.value?.title,
  ogDescription: report.value?.description,
  ogImage: '/tennis-reports.jpg',
  twitterCard: 'summary_large_image',
});

// Debug logging
watch(report, () => {
  logger.debug('report data:', report.value);
}, { immediate: true });
</script>
