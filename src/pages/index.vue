<template>
  <v-container class="py-10" fluid>
    <v-card class="hero-card pa-8 pa-md-12" rounded="lg">
      <h1 class="text-h2 text-md-h1 font-weight-bold text-secondary">
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
      <v-btn class="mr-2" color="red-background" size="large">Zobacz oferte</v-btn>
      <v-btn class="ml-2" color="secondary" size="large" variant="outlined">Kontakt</v-btn>
    </v-card>

    <v-row class="mt-10" dense>
      <v-col cols="12" md="4">
        <v-card
          id="sekcja-1"
          class="service-card h-100"
          href="#sekcja-1"
          link
          rounded="lg"
          variant="tonal"
        >
          <v-card-title class="text-h6">SERWIS</v-card-title>
          <v-card-text>
            Mechanika i diagnostyka.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          id="sekcja-2"
          class="service-card h-100"
          href="#sekcja-2"
          link
          rounded="lg"
          variant="tonal"
        >
          <v-card-title class="text-h6">DETALING</v-card-title>
          <v-card-text>
            Folie ceramiczne, folie PPF.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          id="sekcja-3"
          class="service-card h-100"
          href="#sekcja-3"
          link
          rounded="lg"
          variant="tonal"
        >
          <v-card-title class="text-h6">PERFORMENCE</v-card-title>
          <v-card-text>
            Tuning i modyfikacje.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-sheet class="mt-10 pa-8" rounded="lg" variant="outlined">
      <h2 class="text-h5 font-weight-bold mb-3">Kontakt</h2>
      <p class="text-body-1 mb-0">
        Telefon: 000 000 000 | Email: kontakt@lgarage.pl
      </p>
      <p class="text-body-2 mb-0">
        To sa dane przykladowe. Edytuj je w tej sekcji.
      </p>
    </v-sheet>
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

  .service-card {
    cursor: pointer;
    transition: 'red-background';
  }

  .service-card:hover {
    background-color: var(--v-theme-red-background);
    color: var(--v-theme-on-red-background);
  }
</style>
