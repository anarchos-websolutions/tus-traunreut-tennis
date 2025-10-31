<template>
  <div class="min-h-screen">
    <PageHeader
      title="Abteilungsleitung"
      description="Lernen Sie unser engagiertes Führungsteam kennen"
    />

    <!-- Leadership Team -->
    <section class="py-16">
      <UContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <!-- Team Member 1 -->
          <div class="tennis-card p-6 text-center">
            <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
              <NuxtImg
                src="/images/markus-petzka.jpg"
                alt="Markus Petzka - Abteilungsleiter"
                class="w-full h-full object-cover"
                width="128"
                height="128"
              />
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Markus Petzka
            </h3>
            <p class="text-[var(--color-secondary-900)] font-medium mb-3">
              Abteilungsleiter
            </p>
            <p class="text-gray-600 text-sm">
              Lorem Ipsum.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="tennis-card p-6 text-center">
            <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
              <NuxtImg
                src="/images/patrick-laufke.png"
                alt="Patrick Laufke - Stellvertretender Abteilungsleiter"
                class="w-full h-full object-cover"
                width="128"
                height="128"
              />
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Patrick Laufke
            </h3>
            <p class="text-[var(--color-secondary-900)] font-medium mb-3">
              Stellvertretender Abteilungsleiter
            </p>
            <p class="text-gray-600 text-sm">
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Department Info -->
    <Section
      title="Neue Führung - <span class='text-primary-500'>Neue Perspektiven</span>"
      description="Seit dem 10. Oktober 2025 ist die neue Abteilungsleitung im Amt. Mit frischem Wind für den Tennis-Sport und neuen Perspektiven für die Zukunft stellt sich die neue Abteilungsleitung, bestehend aus <strong>Markus Petzka</strong> und <strong>Patrick Laufke</strong>, den Herausforderungen."
    >
      <div class="prose prose-lg mx-auto text-gray-600">
        <p class="mb-6">
          Seit dem 10. Oktober 2025 ist die neue Abteilungsleitung im Amt.
          Mit frischem Wind für den Tennis-Sport und neuen Perspektiven für die Zukunft stellt sich die neue Abteilungsleitung, bestehend aus <strong>Markus Petzka</strong> und <strong>Patrick Laufke</strong>, den Herausforderungen.
        </p>
      </div>
    </Section>
  </div>
</template>

<script setup>
// SEO meta tags
useSeoMeta({
  title: 'Abteilungsleitung - TUS Traunreut Tennis',
  description: 'Lernen Sie die Abteilungsleitung der TUS Traunreut Tennisabteilung kennen. Markus Petzka, Tino Trefil und Markus Luprich führen die Abteilung in die Zukunft.',
  ogTitle: 'Abteilungsleitung - TUS Traunreut Tennis',
  ogDescription: 'Lernen Sie die Abteilungsleitung der TUS Traunreut Tennisabteilung kennen. Markus Petzka, Tino Trefil und Markus Luprich führen die Abteilung in die Zukunft.',
  ogImage: '/tennis-team.jpg',
  twitterCard: 'summary_large_image',
});
</script>
