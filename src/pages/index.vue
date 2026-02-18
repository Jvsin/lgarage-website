<script setup>
  import { useGoTo } from 'vuetify'
  import ContactMapSection from '@/components/ContactMapSection.vue'
  import OpinionsSection from '@/components/OpinionsSection.vue'
  import WhyUsCarousel from '@/components/WhyUsCarousel.vue'

  const goTo = useGoTo()

  function moveTo (id) {
    goTo(id, {
      duration: 800,
      offset: -50,
      easing: 'easeInOutCubic',
    })
  }
</script>

<template>
  <v-container class="py-3" fluid>
    <v-card class="hero-card pa-8 pa-md-12" rounded="lg">
      <!-- <h1 class="text-h3 text-md-h1 font-weight-bold text-secondary">
        GAWRYCH
      </h1>
      <h2 class="text-h5 text-md-h4 mb-6 text-secondary">
        Serwis & Detaling
      </h2> -->
      <v-img
        alt="Logo Gawrych"
        class="mb-6"
        max-width="500"
        src="@/assets/logo_firm_cut.png"
      />
      <h3 class="text-body-1 text-md-body-1 mb-6 text-secondary">
        Profesjonalna obsługa twojego samochodu
      </h3>
      <h3 class="text-body-1 text-md-body-1 mb-6 font-weight-bold text-red-background">
        Od 1990 roku.
      </h3>

      <v-row class="mt-6" dense>
        <v-col cols="12" md="auto">
          <v-btn
            color="red-background"
            size="large"
            style="width: 200px;"
            @click="moveTo('#oferta')"
          >
            Zobacz ofertę
          </v-btn>
        </v-col>
        <v-col cols="12" md="auto">
          <v-btn
            color="secondary"
            size="large"
            style="width: 200px;"
            variant="outlined"
            @click="moveTo('#kontakt')"
          >
            Kontakt
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <div id="oferta">
      <WhyUsCarousel />
    </div>

    <v-container class="py-3" fluid>
      <OpinionsSection />
    </v-container>

    <div id="kontakt">
      <ContactMapSection />
    </div>

  </v-container>
</template>

<style scoped>
  .hero-card {
    background-image: url("@/assets/garage_background1.png");
    background-position: 50% 35%;
    background-repeat: no-repeat;
    background-size: 110% auto;
    min-height: 420px;
  }

  @media (max-width: 960px) {
    .hero-card {
      background-position: center;
      background-size: cover;
    }
  }

  .service-card {
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  /* Przywrócony styl dla tekstu po najechaniu (opcjonalny, jeśli chcesz zmienić kolor tekstu na hover) */
  .service-card--hover {
    color: var(--v-theme-on-red-background);
  }
</style>
