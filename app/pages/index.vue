<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Facilities Section -->
    <FacilitiesSection />
    
    <!-- Tennis Department -->
    <TennisDepartment />
    
    <!-- Booking Section -->
    <BookingSection />
    
    <!-- News Section -->
    <NewsSection />
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// All components are auto-imported from ~/components/
// No explicit imports needed according to Nuxt 4 best practices

// SEO meta tags
useSeoMeta({
  title: 'Tennis Club - Premium Tennis Facilities',
  description: 'Experience world-class tennis facilities with professional coaching, modern courts, and exclusive membership benefits.',
  ogTitle: 'Tennis Club - Premium Tennis Facilities',
  ogDescription: 'Experience world-class tennis facilities with professional coaching, modern courts, and exclusive membership benefits.',
  ogImage: '/tennis-hero.jpg',
  twitterCard: 'summary_large_image'
})
</script>
