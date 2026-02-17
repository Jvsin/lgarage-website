<script setup>
  import ContactMapSection from '@/components/ContactMapSection.vue'
  import OpinionsSection from '@/components/OpinionsSection.vue'
</script>

<template>
  <v-container class="py-3" fluid>
    <v-card class="hero-card pa-8 pa-md-12" rounded="lg">
      <h1 class="text-h3 text-md-h1 font-weight-bold text-secondary">
        GAWRYCH
      </h1>
      <h2 class="text-h5 text-md-h4 mb-6 text-secondary">
        Serwis & Detaling
      </h2>
      <h3 class="text-body-1 text-md-body-1 mb-6 text-secondary">
        Profesjonalna obsługa twojego samochodu
      </h3>
      <h3 class="text-body-1 text-md-body-1 mb-6 font-weight-bold text-red-background">
        Od 1990 roku.
      </h3>
      <v-row class="mt-6" dense>
        <v-col cols="12" md="auto">
          <v-btn color="red-background" size="large" style="width: 200px;">Zobacz ofertę</v-btn>
        </v-col>
        <v-col cols="12" md="auto">
          <v-btn
            color="secondary"
            size="large"
            style="width: 200px;"
            variant="outlined"
            @click="$vuetify.goTo('#kontakt')"
          >
            Kontakt
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-container class="py-3" fluid>
      <h2 class="my-3 text-h4 font-weight-bold text-secondary text-center">
        Dlaczego my?
      </h2>
      <v-row class="my-3" dense>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              id="sekcja-1"
              :class="['service-card h-100', { 'service-card--hover': isHovering }]"
              :color="isHovering ? 'red-background' : undefined"
              href="#sekcja-1"
              link
              rounded="lg"
              variant="tonal"
            >
              <div class="text-center">
                <v-icon class="pt-5 mb-1" size="x-large">mdi-car-wrench</v-icon>
                <v-card-title class="text-h6">SERWIS</v-card-title>
                <v-card-text>
                  Mechanika i diagnostyka.
                </v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              id="sekcja-2"
              :class="['service-card h-100', { 'service-card--hover': isHovering }]"
              :color="isHovering ? 'red-background' : undefined"
              href="#sekcja-2"
              link
              rounded="lg"
              variant="tonal"
            >
              <div class="text-center">
                <v-icon class="pt-5 mb-1" size="x-large">mdi-creation</v-icon>
                <v-card-title class="text-h6">DETALING</v-card-title>
                <v-card-text>
                  Folie ceramiczne, folie PPF.
                </v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              id="sekcja-3"
              :class="['service-card h-100', { 'service-card--hover': isHovering }]"
              :color="isHovering ? 'red-background' : undefined"
              href="#sekcja-3"
              link
              rounded="lg"
              variant="tonal"
            >
              <div class="text-center">
                <v-icon class="pt-5 mb-1" size="x-large">mdi-speedometer</v-icon>
                <v-card-title class="text-h6">PERFORMENCE</v-card-title>
                <v-card-text>
                  Tuning i modyfikacje.
                </v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-3" fluid>
      <OpinionsSection />
    </v-container>

    <ContactMapSection />
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

  .service-card--hover {
    color: var(--v-theme-on-red-background);
  }
</style>
