<script setup>
  const slides = [
    {
      icon: 'mdi-car-wrench',
      title: 'SERWIS',
      description: 'Mechanika i diagnostyka.',
      image: 'serwis.png',
    },
    {
      icon: 'mdi-creation',
      title: 'DETAILING',
      description: 'Folie ceramiczne, folie PPF.',
      image: 'detaling.png',
    },
    {
      icon: 'mdi-speedometer',
      title: 'PERFORMANCE',
      description: 'Tuning i modyfikacje.',
      image: 'performance.png',
    },
  ]

  function getSlideStyle (image) {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${new URL(`../assets/${image}`, import.meta.url).href})`,
    }
  }
</script>

<template>
  <v-container class="py-3" fluid>
    <h2 class="my-3 text-h4 font-weight-bold text-secondary text-center">
      Dlaczego my?
    </h2>
    <v-carousel
      class="why-us-carousel"
      cycle
      height="320"
      hide-delimiters
      :interval="4500"
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="slide in slides"
        :key="slide.title"
      >
        <v-card
          class="carousel-tile pa-6 pa-md-8"
          color="transparent"
          flat
          rounded="lg"
          :style="getSlideStyle(slide.image)"
        >
          <div class="tile-content text-center text-secondary">
            <v-icon class="pt-2 mb-3" color="secondary" size="x-large">
              {{ slide.icon }}
            </v-icon>
            <div class="text-h5 font-weight-bold mb-2">
              {{ slide.title }}
            </div>
            <div class="text-body-1 mb-6">
              {{ slide.description }}
            </div>
            <v-btn class="text-secondary" color="red-background" size="large">
              Zobacz
            </v-btn>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style scoped>
  .why-us-carousel {
    border-radius: 16px;
    overflow: hidden;
  }

  .carousel-tile {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .tile-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
