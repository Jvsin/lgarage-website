<template>
  <v-container class="py-10" fluid>
    <v-card class="hero pa-8 pa-md-12" rounded="lg">
      <h1 class="text-h2 text-md-h1 font-weight-bold text-on-surface">
        GAWRYCH
      </h1>
      <h2 class="text-h5 text-md-h4 mb-6">
        Serwis & Detaling
      </h2>
      <h3 class="text-body-1 text-md-body-1 mb-6">
        Profesjonalna obsługa twojego samochodu
      </h3>
      <h3 class="text-body-1 text-md-body-1 mb-6 font-weight-bold">
        Od 1990 roku.
      </h3>
      <v-btn class="mr-2" color="button" size="large">Zobacz oferte</v-btn>
      <v-btn class="ml-2" color="button" size="large" variant="outlined">Kontakt</v-btn>
    </v-card>

    <v-row class="mt-10" dense>
      <v-col cols="12" md="4">
        <v-card id="sekcja-1" class="h-100" rounded="lg" variant="tonal">
          <v-card-title class="text-h6">Sekcja 1</v-card-title>
          <v-card-text>
            Tutaj wpisz krotki opis uslugi lub przewagi. Tekst do edycji.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card id="sekcja-2" class="h-100" rounded="lg" variant="tonal">
          <v-card-title class="text-h6">Sekcja 2</v-card-title>
          <v-card-text>
            Kolejne miejsce na tresc. Mozesz tu dodac np. liste uslug.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card id="sekcja-3" class="h-100" rounded="lg" variant="tonal">
          <v-card-title class="text-h6">Sekcja 3</v-card-title>
          <v-card-text>
            Jeszcze jeden blok informacyjny. Wstaw dowolny opis.
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
  .hero {
    background: linear-gradient(135deg, #d9d9d9, #bfbfbf);
  }
</style>
