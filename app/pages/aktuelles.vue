<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section class="tennis-gradient text-white py-16">
      <UContainer>
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="text-orange-400">Aktuelles</span>
          </h1>
          <div class="w-32 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p class="text-xl text-green-100">
            Neuigkeiten und Berichte aus der Tennisabteilung
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Latest News -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="space-y-8">
          <!-- News Article 1 -->
          <article class="tennis-card p-8">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/4">
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <Icon name="heroicons:photo" class="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="flex items-center gap-4 mb-3">
                  <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Saison 2025
                  </span>
                  <span class="text-gray-500 text-sm">März 11, 2021</span>
                </div>
                <h2 class="text-2xl font-bold mb-4" style="color: var(--tennis-green-dark)">
                  Plätze werden saniert und vorbereitet
                </h2>
                <p class="text-gray-600 mb-4">
                  Das Tennis-Spielen kann bald losgehen, mit dem herrichten der Plätze wird bald begonnen! 
                  Die Außenplätze werden professionell aufbereitet und für die neue Saison vorbereitet.
                </p>
                <p class="text-gray-600 mb-4">
                  <strong>Wichtiger Hinweis:</strong> Spielen nur nach vorheriger Buchung möglich. 
                  Nutzen Sie unser Online-Buchungssystem oder rufen Sie uns an.
                </p>
                <NuxtLink to="/booking" class="text-orange-600 hover:text-orange-700 font-medium">
                  Jetzt Platz buchen →
                </NuxtLink>
              </div>
            </div>
          </article>

          <!-- News Article 2 -->
          <article class="tennis-card p-8">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/4">
                <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <Icon name="heroicons:document-text" class="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="flex items-center gap-4 mb-3">
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Information
                  </span>
                  <span class="text-gray-500 text-sm">März 11, 2021</span>
                </div>
                <h2 class="text-2xl font-bold mb-4" style="color: var(--tennis-green-dark)">
                  Information für Abospieler der Saison 2020/2021
                </h2>
                <p class="text-gray-600 mb-4">
                  Unsere Abokunden erhalten ihren Ausfall während der Corona Sperren erstattet. 
                  Am Ende des ABOs werden alle Spieler automatisch benachrichtigt.
                </p>
                <p class="text-gray-600 mb-4">
                  Für weitere Informationen und Kontaktaufnahme wenden Sie sich bitte an: 
                  <a href="mailto:info@tennishalle-traunreut.de" class="text-orange-600 hover:text-orange-700">
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
                  <Icon name="heroicons:users" class="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="flex items-center gap-4 mb-3">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Vereinsführung
                  </span>
                  <span class="text-gray-500 text-sm">Januar 15, 2021</span>
                </div>
                <h2 class="text-2xl font-bold mb-4" style="color: var(--tennis-green-dark)">
                  Neue Abteilungsleitung übernimmt das Ruder
                </h2>
                <p class="text-gray-600 mb-4">
                  Nach zwölf erfolgreichen Jahren hat Christel Hofmann die Leitung der Tennisabteilung abgegeben. 
                  Das neue Führungsteam bestehend aus Markus Petzka, Tino Trefil und Markus Luprich übernimmt die Verantwortung.
                </p>
                <p class="text-gray-600 mb-4">
                  Ein Schwerpunkt der neuen Leitung liegt auf der Digitalisierung und der Zusammenführung von 
                  Abteilung und Tennishalle unter einem Dach. Das neue Online-Buchungssystem soll die 
                  Platzauslastung optimieren.
                </p>
                <NuxtLink to="/abteilung" class="text-orange-600 hover:text-orange-700 font-medium">
                  Mehr zur Abteilungsleitung →
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- Upcoming Events -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4" style="color: var(--tennis-green-dark)">
            Kommende <span style="color: var(--tennis-orange)">Termine</span>
          </h2>
          <div class="w-32 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p class="text-lg text-gray-600">
            Alle Termine anzeigen...
          </p>
        </div>

        <div class="max-w-2xl mx-auto tennis-card p-8 text-center">
          <Icon name="heroicons:calendar-days" class="w-16 h-16 mx-auto mb-6" style="color: var(--tennis-orange)" />
          <h3 class="text-xl font-semibold mb-4" style="color: var(--tennis-green-dark)">
            Keine Termine gefunden
          </h3>
          <p class="text-gray-600 mb-6">
            Derzeit sind keine besonderen Termine geplant. 
            Schauen Sie regelmäßig vorbei oder melden Sie sich für unseren Newsletter an.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/" class="btn-tennis-secondary">
              Newsletter abonnieren
            </NuxtLink>
            <a href="mailto:info@tennis-traunreut.de" class="btn-tennis-primary">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- News Categories -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4" style="color: var(--tennis-green-dark)">
            Kategorien
          </h2>
          <div class="w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Berichte -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:document-text" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-orange)" />
            <h3 class="text-lg font-semibold mb-2" style="color: var(--tennis-green-dark)">Berichte</h3>
            <p class="text-gray-600 text-sm mb-4">
              Berichte von Turnieren, Events und besonderen Ereignissen
            </p>
            <span class="text-orange-600 text-sm font-medium">3 Artikel</span>
          </div>

          <!-- Termine -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:calendar-days" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-green)" />
            <h3 class="text-lg font-semibold mb-2" style="color: var(--tennis-green-dark)">Termine</h3>
            <p class="text-gray-600 text-sm mb-4">
              Wichtige Termine und Veranstaltungen der Tennisabteilung
            </p>
            <span class="text-orange-600 text-sm font-medium">0 Termine</span>
          </div>

          <!-- Vereinsnews -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:megaphone" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-orange)" />
            <h3 class="text-lg font-semibold mb-2" style="color: var(--tennis-green-dark)">Vereinsnews</h3>
            <p class="text-gray-600 text-sm mb-4">
              Neuigkeiten aus dem Vereinsleben und der Abteilungsführung
            </p>
            <span class="text-orange-600 text-sm font-medium">2 Artikel</span>
          </div>

          <!-- Erfolge -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:trophy" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-green)" />
            <h3 class="text-lg font-semibold mb-2" style="color: var(--tennis-green-dark)">Erfolge</h3>
            <p class="text-gray-600 text-sm mb-4">
              Erfolge unserer Spieler und Teams bei Turnieren
            </p>
            <span class="text-orange-600 text-sm font-medium">1 Artikel</span>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 tennis-gradient text-white">
      <UContainer>
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Immer auf dem Laufenden bleiben</h2>
          <p class="text-lg mb-8 text-green-100">
            Melden Sie sich für unseren Newsletter an und verpassen Sie keine wichtigen Neuigkeiten mehr
          </p>
          
          <div class="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Ihre E-Mail Adresse"
              class="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button class="btn-tennis-secondary px-6 py-3">
              Anmelden
            </button>
          </div>
          
          <p class="text-sm text-green-100 mt-4">
            Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <AppFooter />
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
  twitterCard: 'summary_large_image'
})
</script>
