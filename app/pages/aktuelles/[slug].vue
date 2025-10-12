<template>
  <div class="min-h-screen">
    <!-- Article Header -->
    <section class="tennis-gradient text-white py-16">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <NuxtLink
              to="/aktuelles"
              class="text-green-100 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Icon
                name="heroicons:arrow-left"
                class="w-4 h-4"
              />
              Zurück zu Aktuelles
            </NuxtLink>
          </nav>

          <!-- Article Meta -->
          <div class="flex items-center gap-4 mb-6">
            <span
              class="px-4 py-2 rounded-full text-sm font-medium"
              :class="article.category === 'Saison 2025' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'"
            >
              {{ article.category }}
            </span>
            <span class="text-green-100 text-sm">{{ article.date }}</span>
          </div>

          <!-- Article Title -->
          <h1 class="title-hero mb-6">
            {{ article.title }}
          </h1>

          <!-- Article Excerpt -->
          <p class="text-body-lg-dark mb-8">
            {{ article.excerpt }}
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
                :name="article.icon"
                class="w-24 h-24 text-gray-400"
              />
            </div>
          </div>

          <!-- Article Body -->
          <div class="prose prose-lg max-w-none">
            <div
              v-for="(paragraph, index) in article.content"
              :key="index"
              class="mb-6"
            >
              <p
                v-if="paragraph.type === 'paragraph'"
                class="text-body"
              >
                {{ paragraph.text }}
              </p>
              <div
                v-else-if="paragraph.type === 'highlight'"
                class="bg-orange-50 border-l-4 border-orange-400 p-6 my-6"
              >
                <p class="text-accent font-medium mb-2">
                  {{ paragraph.title }}
                </p>
                <p class="text-body">
                  {{ paragraph.text }}
                </p>
              </div>
              <div
                v-else-if="paragraph.type === 'cta'"
                class="bg-green-50 border border-green-200 rounded-lg p-6 my-6"
              >
                <p class="text-body mb-4">
                  {{ paragraph.text }}
                </p>
                <NuxtLink
                  :to="paragraph.link"
                  class="text-orange-600 hover:text-orange-700 font-medium"
                >
                  {{ paragraph.linkText }} →
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Article Footer -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p class="text-muted text-sm">
                  Veröffentlicht am {{ article.date }}
                </p>
                <p class="text-muted text-sm">
                  Kategorie: {{ article.category }}
                </p>
              </div>
              <div class="flex gap-4">
                <NuxtLink
                  to="/aktuelles"
                  class="btn-tennis-secondary"
                >
                  Alle Artikel
                </NuxtLink>
                <NuxtLink
                  to="/booking"
                  class="btn-tennis-primary"
                >
                  Platz buchen
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Related Articles -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <h2 class="title mb-8">
            Weitere Artikel
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <article
              v-for="relatedArticle in relatedArticles"
              :key="relatedArticle.slug"
              class="tennis-card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <NuxtLink
                :to="`/aktuelles/${relatedArticle.slug}`"
                class="block"
              >
                <div class="flex items-center gap-4 mb-3">
                  <span
                    class="px-3 py-1 rounded-full text-sm font-medium"
                    :class="relatedArticle.category === 'Saison 2025' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'"
                  >
                    {{ relatedArticle.category }}
                  </span>
                  <span class="text-muted text-sm">{{ relatedArticle.date }}</span>
                </div>
                <h3 class="title mb-3">{{ relatedArticle.title }}</h3>
                <p class="text-body-sm">{{ relatedArticle.excerpt }}</p>
              </NuxtLink>
            </article>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
// Get the slug from the route
const route = useRoute();
const slug = route.params.slug;

// Article data - in a real app, this would come from a CMS or API
const articles = {
  'platz-sanierung-2025': {
    slug: 'platz-sanierung-2025',
    title: 'Plätze werden saniert und vorbereitet',
    excerpt: 'Das Tennis-Spielen kann bald losgehen, mit dem herrichten der Plätze wird bald begonnen! Die Außenplätze werden professionell aufbereitet und für die neue Saison vorbereitet.',
    category: 'Saison 2025',
    date: 'März 11, 2021',
    icon: 'heroicons:photo',
    content: [
      {
        type: 'paragraph',
        text: 'Das Tennis-Spielen kann bald losgehen, mit dem herrichten der Plätze wird bald begonnen! Die Außenplätze werden professionell aufbereitet und für die neue Saison vorbereitet.',
      },
      {
        type: 'paragraph',
        text: 'Unsere erfahrenen Platzwarte arbeiten mit modernster Technik und bewährten Methoden, um die Tennisplätze in optimalem Zustand zu bringen. Dabei werden nicht nur die Oberflächen erneuert, sondern auch die Linien neu gezogen und die Netze überprüft.',
      },
      {
        type: 'highlight',
        title: 'Wichtiger Hinweis',
        text: 'Spielen nur nach vorheriger Buchung möglich. Nutzen Sie unser Online-Buchungssystem oder rufen Sie uns an.',
      },
      {
        type: 'paragraph',
        text: 'Die Sanierungsarbeiten umfassen auch die Überprüfung der Beleuchtung für die Abendstunden und die Instandsetzung der Umzäunung. Wir legen großen Wert darauf, dass alle Sicherheitsstandards eingehalten werden.',
      },
      {
        type: 'cta',
        text: 'Bereit für die neue Saison? Buchen Sie jetzt Ihren Platz und sichern Sie sich die besten Zeiten!',
        link: '/booking',
        linkText: 'Jetzt Platz buchen',
      },
    ],
  },
};

// Get the current article
const article = articles[slug];

// Related articles (excluding current one)
const relatedArticles = [
  {
    slug: 'abteilungsleitung-2021',
    title: 'Neue Abteilungsleitung übernimmt das Ruder',
    excerpt: 'Nach zwölf erfolgreichen Jahren hat Christel Hofmann die Leitung der Tennisabteilung abgegeben.',
    category: 'Vereinsführung',
    date: 'Januar 15, 2021',
  },
  {
    slug: 'corona-information-2021',
    title: 'Information für Abospieler der Saison 2020/2021',
    excerpt: 'Unsere Abokunden erhalten ihren Ausfall während der Corona Sperren erstattet.',
    category: 'Information',
    date: 'März 11, 2021',
  },
];

// Handle 404 if article not found
if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artikel nicht gefunden',
  });
}

// SEO meta tags
useSeoMeta({
  title: `${article.title} - TUS Traunreut Tennis`,
  description: article.excerpt,
  ogTitle: article.title,
  ogDescription: article.excerpt,
  ogImage: '/tennis-news.jpg',
  twitterCard: 'summary_large_image',
});
</script>
