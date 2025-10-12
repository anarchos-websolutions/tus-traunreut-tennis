<template>
  <ClientOnly>
    <swiper-container
      ref="containerRef"
      class="w-full h-full"
    >
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: rgb(32, 233, 70); color: white;"
      >
        <NuxtImg
          :src="slide"
          alt="Image"
          class="w-full h-full object-cover"
        />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <!-- Go back one slide -->
  <button @click="swiper.prev()">
    Prev
  </button>
  <!-- Go forward one slide -->
  <button @click="swiper.next()">
    Next
  </button>
</template>

<script setup lang="ts">
const { images } = defineProps<{
  images: string[];
}>();

const containerRef = ref(null);
const slides = ref(images);

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
});
</script>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>
