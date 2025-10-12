<template>
  <div class="min-h-screen">
    <PageHeader
      title="Abteilungsleitung"
      description="Lernen Sie unser engagiertes Führungsteam kennen"
    />

    <!-- Leadership Team -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="tennis-card p-6 text-center">
            <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon
                name="heroicons:user"
                class="w-16 h-16 text-gray-400"
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
              Nachfolger von Christel Hofmann, führt die Abteilung mit frischen Ideen in die Zukunft.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="tennis-card p-6 text-center">
            <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon
                name="heroicons:user"
                class="w-16 h-16 text-gray-400"
              />
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Tino Trefil
            </h3>
            <p class="text-[var(--color-secondary-900)] font-medium mb-3">
              Stellvertretender Leiter
            </p>
            <p class="text-gray-600 text-sm">
              Teil des Dreigespanns an der Abteilungsspitze, unterstützt bei der strategischen Ausrichtung.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="tennis-card p-6 text-center">
            <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon
                name="heroicons:user"
                class="w-16 h-16 text-gray-400"
              />
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              style="color: var(--tennis-green-dark)"
            >
              Markus Luprich
            </h3>
            <p class="text-[var(--color-secondary-900)] font-medium mb-3">
              Stellvertretender Leiter
            </p>
            <p class="text-gray-600 text-sm">
              Komplettiert das Führungsteam und bringt wertvolle Erfahrung in die Vereinsführung ein.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Department Info -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="tennis-card p-8">
            <h2
              class="text-3xl font-bold mb-6 text-center"
              style="color: var(--tennis-green-dark)"
            >
              Neue Führung - Neue Perspektiven
            </h2>

            <div class="prose prose-lg mx-auto text-gray-600">
              <p class="mb-6">
                Nach zwölf Jahren hat <strong>Christel Hofmann</strong> die Leitung der Tennisabteilung des TuS Traunreut abgegeben.
                Ihr Nachfolger ist <strong>Markus Petzka</strong>, der zusammen mit <strong>Tino Trefil</strong> und
                <strong>Markus Luprich</strong> jetzt ein Dreigespann an der Abteilungsspitze bildet.
              </p>

              <p class="mb-6">
                Um die Zukunftsfähigkeit des Tennissports zu stärken und zu sichern, hat man sich auch darauf verständigt,
                die Abteilung und die Tennishalle unter einem Dach zusammenzuführen.
              </p>

              <p class="mb-6">
                Durch die Einführung eines <strong>Online-Buchungssystems</strong>, das eine nahtlose und benutzerfreundliche
                Buchung mit dem Smartphone oder einem Computer ermöglicht, verspricht sich die neue Abteilungsleitung auch
                eine bessere Auslastung der Tennishalle.
              </p>
            </div>

            <div class="text-center mt-8">
              <NuxtLink
                to="/booking"
                class="btn-tennis-secondary"
              >
                Online-Buchungssystem nutzen
              </NuxtLink>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2
            class="heading-xl mb-4"
            style="color: var(--color-primary-600)"
          >
            Kontakt zur <span style="color: var(--color-secondary-900)">Abteilungsleitung</span>
          </h2>
          <div class="w-32 h-1 bg-[var(--color-secondary-900)] mx-auto" />
        </div>

        <div class="max-w-2xl mx-auto tennis-card p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                class="text-xl font-semibold mb-4"
                style="color: var(--tennis-green-dark)"
              >
                Allgemeine Anfragen
              </h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <Icon
                    name="heroicons:envelope"
                    class="w-5 h-5 mr-3"
                    style="color: var(--color-secondary-900)"
                  />
                  <span class="text-gray-600">info@tennis-traunreut.de</span>
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
              <h3
                class="text-xl font-semibold mb-4"
                style="color: var(--tennis-green-dark)"
              >
                Tennishalle
              </h3>
              <div class="space-y-3">
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
                    name="heroicons:map-pin"
                    class="w-5 h-5 mr-3"
                    style="color: var(--color-secondary-900)"
                  />
                  <span class="text-gray-600">Traunring 118, 83301 Traunreut</span>
                </div>
              </div>
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
  title: 'Abteilungsleitung - TUS Traunreut Tennis',
  description: 'Lernen Sie die Abteilungsleitung der TUS Traunreut Tennisabteilung kennen. Markus Petzka, Tino Trefil und Markus Luprich führen die Abteilung in die Zukunft.',
  ogTitle: 'Abteilungsleitung - TUS Traunreut Tennis',
  ogDescription: 'Lernen Sie die Abteilungsleitung der TUS Traunreut Tennisabteilung kennen. Markus Petzka, Tino Trefil und Markus Luprich führen die Abteilung in die Zukunft.',
  ogImage: '/tennis-team.jpg',
  twitterCard: 'summary_large_image',
});
</script>
