<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative text-white overflow-hidden min-h-[70vh] flex items-center">
      <!-- Background Image -->
      <NuxtImg 
        src="/images/IMG_4715-min-scaled.jpeg" 
        alt="Tennis court background"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{ zIndex: -1 }"
        loading="eager"
        preload
        format="webp"
        quality="80"
        width="1920"
        height="1080"
        :custom="true"
        v-slot="{ src, isLoaded, imgAttrs }"
      >
        <img
          v-if="isLoaded"
          v-bind="imgAttrs"
          :src="src"
        >

        <!-- Show a placeholder while loading -->
        <div
          v-else
          class="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900"
        >
          <Icon 
            name="solar:tennis-bold" 
            class="w-16 h-16 animate-spin opacity-30" 
            style="color: var(--tennis-ball)" 
          />
        </div>
      </NuxtImg>
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40"></div>
      
      <UContainer class="relative py-20">
        
        <div class="text-center">
          <div class="flex items-center justify-center mb-6 space-x-2">
            
            <h1 class="title-hero ">
              TENNIS IM TUS TRAUNREUT
            </h1>
          </div>
          
            <p class="text-body-lg-dark mb-8">
              der Turn- und Sportverein im Herzen des Chiemgaus
            </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-32">
            <NuxtLink to="https://sportbuchung-traunreut.ebusy.de/" class="btn btn-outline">
              Jetzt buchen
            </NuxtLink>
            <NuxtLink to="/anlagen" class="btn btn-outline">
              Tennishalle
            </NuxtLink>
          </div>
          
        </div>
        
      </UContainer>
    </section>

    <!-- Quick Info Section -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Next Event -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:calendar-days" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-green)" />
            <h3 class="title mb-2">Nächster Termin</h3>
            <p class="text-body mb-4">Alle Termine anzeigen...</p>
            <p class="text-gray-900 font-medium">Keine Termine gefunden</p>
          </div>

          <!-- Tennis Department -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:trophy" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-secondary)" />
            <h3 class="title mb-2">TuS Tennisabteilung</h3>
            <p class="text-body mb-4">Die TuS-Tennisabteilung wünscht viel Glück und ein gesundes, verletzungsfreies Jahr 2025.</p>
            <NuxtLink to="/abteilung" class="text-green-600 hover:text-green-700 font-medium">
              Mehr erfahren →
            </NuxtLink>
          </div>

          <!-- Sand Courts -->
          <div class="tennis-card p-6 text-center">
            <Icon name="heroicons:building-storefront" class="w-12 h-12 mx-auto mb-4" style="color: var(--tennis-green)" />
            <h3 class="title mb-2">Sand-Tennisplätze</h3>
            <p class="text-body mb-4">Unsere schöne Anlage bietet zwei Outdoor Tennisplätze sowie eine Tennishalle mit drei Spielfeldern.</p>
            <NuxtLink to="/anlagen" class="text-green-600 hover:text-green-700 font-medium">
              Anlagen ansehen →
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- More Than Tennis Section -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="title-xl mb-4" style="color: var(--tennis-green-dark)">
            MEHR ALS NUR<br>
            <span style="color: var(--tennis-secondary)">TENNIS SPIELEN</span>
          </h2>
          <div class="w-32 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Events -->
          <div class="text-center">
            <div class="tennis-card p-8">
              <Icon name="heroicons:sparkles" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-secondary)" />
              <h3 class="title mb-4">Termine & Events</h3>
              <p class="text-body">
                Wir veranstalten über den Sommer diverse Tennisevents. Angefangen von Saisoneröffnungen im Mai, 
                über Cups während der Saison, bis hin zum Sommerfest und Abschlussfeier.
              </p>
            </div>
          </div>

          <!-- Training -->
          <div class="text-center">
            <div class="tennis-card p-8">
              <Icon name="heroicons:academic-cap" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-green)" />
              <h3 class="title mb-4">Trainingsangebote</h3>
              <p class="text-body mb-4">
                Ihnen steht eine Vielzahl von verschiedenen Trainingsangeboten zur Auswahl:
              </p>
              <ul class="text-left text-body space-y-1">
                <li>• Jugendtraining in verschiedenen Leistungsgruppen</li>
                <li>• Individualtraining in Form von Einzelstunden</li>
                <li>• Matchtraining</li>
                <li>• Konditionstraining</li>
                <li>• mehr . . .</li>
              </ul>
            </div>
          </div>

          <!-- Facilities -->
          <div class="text-center">
            <div class="tennis-card p-8">
              <Icon name="heroicons:building-office-2" class="w-16 h-16 mx-auto mb-4" style="color: var(--tennis-secondary)" />
              <h3 class="title mb-4">Unsere schöne Anlage</h3>
              <p class="text-body">
                Unsere Anlage bietet zwei Outdoor Tennisplätze sowie eine Tennishalle, 
                mit drei Spielfeldern, zur Nutzung.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Latest News Section -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="title-xl mb-4" style="color: var(--tennis-green-dark)">
            Aktuelle <span style="color: var(--tennis-secondary)">Neuigkeiten</span>
          </h2>
          <div class="w-32 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- News Item 1 -->
          <article class="tennis-card p-6">
            <h3 class="title mb-2" style="color: var(--tennis-green-dark)">
              Plätze werden saniert und vorbereitet
            </h3>
            <p class="text-muted mb-4">März 11, 2021</p>
            <p class="text-body">
              Das Tennis-Spielen kann bald losgehen, mit dem herrichten der Plätze wird bald begonnen! 
              Spielen nur nach vorheriger Buchung!
            </p>
          </article>

          <!-- News Item 2 -->
          <article class="tennis-card p-6">
            <h3 class="title mb-2" style="color: var(--tennis-green-dark)">
              Information für Abospieler der Saison 2020/2021
            </h3>
            <p class="text-muted mb-4">März 11, 2021</p>
            <p class="text-body">
              Unsere Abokunden erhalten ihren Ausfall während der Corona Sperren erstattet. 
              Am Ende des ABOs werden alle Spieler benachrichtigt. 
              Weitere Infos und Kontaktaufnahme bitte unter info@tennishalle-traunreut.de
            </p>
          </article>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/aktuelles" class="btn-tennis-primary">
            Alle Neuigkeiten ansehen
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 tennis-gradient text-white">
      <UContainer>
        <div class="text-center">
          <h2 class="title-lg-dark mb-4">SPIELEN SIE GERNE TENNIS?</h2>
          <p class="text-body-lg-dark mb-8">
            Melden Sie sich für unseren Newsletter an und erhalten Sie die neuesten Tipps und Tricks, 
            um Ihr Spiel aufzupolieren, ebenso wie unsere Mitgliederrabatte und eine Liste der kommenden Turniere!
          </p>
          <div class="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Ihre E-Mail Adresse"
              class="flex-1 px-4 py-3 rounded-lg text-white bg-white/20 hover:bg-white/30 border border-white/30"
            />
            <button class="btn px-6 py-3">
              Anmelden
            </button>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Use the default layout (with tennis ball)
definePageMeta({
  layout: 'default'
})

// SEO meta tags
useSeoMeta({
  title: 'Home - TUS Traunreut Tennis',
  description: 'TUS Traunreut Tennis - der Turn- und Sportverein im Herzen des Chiemgaus. Erleben Sie erstklassige Tennisanlagen mit professionellem Training.',
  ogTitle: 'TUS Traunreut Tennis - Home',
  ogDescription: 'TUS Traunreut Tennis - der Turn- und Sportverein im Herzen des Chiemgaus. Erleben Sie erstklassige Tennisanlagen mit professionellem Training.',
  ogImage: '/tennis-hero.jpg',
  twitterCard: 'summary_large_image'
})
</script>
