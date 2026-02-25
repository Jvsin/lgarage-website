<script setup>
  const slides = [
    {
      description: 'Mechanika i diagnostyka.',
      icon: 'mdi-car-wrench',
      image: 'serwis.png',
      link: '/service',
      title: 'SERWIS',
    },
    {
      description: 'Folie ceramiczne, folie PPF.',
      icon: 'mdi-creation',
      image: 'detaling.png',
      link: '/detaling',
      title: 'DETAILING',
    },
    {
      description: 'Tuning i modyfikacje.',
      icon: 'mdi-speedometer',
      image: 'performance.png',
      link: '/performance',
      title: 'PERFORMANCE',
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
    <h2 class="font-weight-bold my-3 text-center text-h4 text-secondary">
      Dlaczego my?
    </h2>
    <v-carousel
      class="why-us-carousel"
      cycle
      height="360"
      :interval="3500"
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
            <v-icon class="mb-3 pt-2" color="secondary" size="x-large">
              {{ slide.icon }}
            </v-icon>

            <div class="font-weight-bold mb-2 text-h4 text-md-h3">
              {{ slide.title }}
            </div>

            <div class="mb-6 text-h6 text-md-h5">
              {{ slide.description }}
            </div>

            <v-btn class="text-secondary" color="red-background" size="large" :to="slide.link">
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

  .why-us-carousel :deep(.v-carousel__controls) {
    background-color: rgba(0, 0, 0, 0.55);
  }

  .why-us-carousel :deep(.v-carousel__controls .v-btn) {
    color: #ff6b6b;
  }

  .carousel-tile {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }

  .tile-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
</style>
