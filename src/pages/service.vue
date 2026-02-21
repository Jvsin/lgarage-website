<script setup>
  import { ref } from 'vue'

  function getImageUrl (name) {
    const fileName = name.toLowerCase()

    return new URL(`../assets/marks/${fileName.toLowerCase()}.png`, import.meta.url).href
  }

  const supportedBrands = ref([
    { name: 'Audi' },
    { name: 'Bentley' },
    { name: 'BMW' },
    { name: 'Cupra' },
    { name: 'Ford' },
    { name: 'Lexus' },
    { name: 'Mazda' },
    { name: 'Mercedes' },
    { name: 'Mini' },
    { name: 'Seat' },
    { name: 'Skoda' },
    { name: 'Toyota' },
    { name: 'Volkswagen' },
  ])
</script>

<template>
  <div class="service-page">
    <v-img
      class="align-center justify-center text-center position-relative"
      cover
      height="600"
      src="@/assets/service/service_background.png"
    >
      <div class="overlay" />
      <v-container class="position-relative z-1">
        <h1 class="text-h3 text-md-h2 font-weight-bold text-white mb-4">
          Twoja droga zaczyna się tutaj.
        </h1>
        <p class="text-h6 text-white font-weight-regular mx-auto" style="max-width: 800px;">
          Wierzymy, że każdy samochód ma swoją historię – pełną codziennych wyzwań, dalekich podróży i wyjątkowych chwil. Naszą misją jest zadbać o to, abyś zawsze mógł ruszać w trasę z pewnością, bezpieczeństwem i spokojem ducha.
        </p>
      </v-container>
    </v-img>

    <v-container class="py-8 px-4 px-md-16" fluid>
      <v-row class="align-center">
        <v-col class="pl-md-12" cols="12" md="6">
          <div class="my-6 text-center">
            <h2 class="text-h4 text-center font-weight-bold text-secondary mb-4 d-flex justify-center align-center">
              <v-icon class="mr-4 flex-shrink-0" color="red" icon="mdi-cards-heart" size="36" />
              Precyzja i pasja
            </h2>
            <p class="text-body-1 text-secondary" style="line-height: 1.8;">
              Łączymy doświadczenie z nowoczesną technologią, precyzję z pasją, a profesjonalizm z indywidualnym podejściem do każdego klienta. Bo dla nas serwis to coś więcej niż naprawa – to troska o Twoją mobilność, komfort i niezawodność każdego dnia.
            </p>
          </div>
        </v-col>

        <v-col class="mb-8 mb-md-0" cols="12" md="6">
          <v-img
            class="elevation-4 mx-auto"
            cover
            height="500"
            position="bottom"
            rounded="lg"
            src="@/assets/service/service_cars.jpeg"
            width="600"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="py-2">
      <v-container fluid>
        <div class="mb-12 text-center">
          <h2 class="font-weight-bold mb-4 text-h4 text-md-h3 text-white">
            Nasze Oficjalne Autoryzacje
          </h2>
          <p class="mx-auto text-body-1 text-grey-lighten-1" style="line-height: 1.8; max-width: 800px;">
            Jesteśmy dumni z faktu, że spełniamy najwyższe standardy światowych marek. Posiadamy oficjalne autoryzacje, co oznacza naprawy zgodne z restrykcyjnymi wytycznymi producentów, dostęp do oryginalnej dokumentacji oraz najwyższej klasy sprzęt diagnostyczny.
          </p>
        </div>

        <v-row class="flex-md-wrap flex-nowrap ga-2 ga-md-4 justify-md-center overflow-x-auto pb-6 px-2">
          <v-col
            v-for="brand in supportedBrands"
            :key="brand.name"
            class="flex-shrink-0 px-2 py-0 py-md-4 text-center"
            cols="auto"
          >
            <v-card
              class="align-center d-flex flex-column justify-center transition-swing"
              color="transparent"
              elevation="0"
              height="190"
              width="150"
            >
              <v-img
                :alt="`Logo marki ${brand.name}`"
                class="mx-auto"
                height="150"
                :src="getImageUrl(brand.name)"
                width="150"
              />
              <span
                class="font-weight-bold text-caption text-center text-md-subtitle-2 text-uppercase text-white"
                style="letter-spacing: 1px; line-height: 1.3;"
              >
                Autoryzacja<br><span class="text-red">{{ brand.name }}</span>
              </span>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </div>

    <v-img
      class="align-center d-flex"
      cover
      gradient="to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.9)"
      max-height="700"
      min-height="600"
      src="@/assets/service/service_garage.jpg"
    >
      <v-container class="px-4 py-10 py-md-16 text-center" style="max-width: 900px;">
        <h2 class="font-weight-bold mb-4 mb-md-6 text-h4 text-md-h3 text-white">
          Więcej niż standardowy serwis
        </h2>

        <p class="mb-6 mb-md-8 mx-auto text-body-1 text-grey-lighten-1" style="line-height: 1.8; max-width: 700px;">
          Kiedy mówimy, że zadbamy o Twoje auto, mamy na myśli coś więcej niż standardowy serwis. Oferujemy:
        </p>

        <div class="d-flex justify-center mb-8 mb-md-10">
          <v-list class="bg-transparent text-left" density="compact" style="max-width: 650px;">
            <v-list-item class="align-start d-flex mb-2 mb-md-3 px-0">
              <template #prepend>
                <v-icon class="mr-3 mr-md-4 mt-1 text-red" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-grey-lighten-1" style="line-height: 1.5;">
                najwyższy poziom usług serwisowych, oparty na wiedzy i doświadczeniu
              </span>
            </v-list-item>

            <v-list-item class="align-start d-flex mb-2 mb-md-3 px-0">
              <template #prepend>
                <v-icon class="mr-3 mr-md-4 mt-1 text-red" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-grey-lighten-1" style="line-height: 1.5;">
                przeglądy gwarancyjne i pogwarancyjne zgodne ze standardami producenta
              </span>
            </v-list-item>

            <v-list-item class="align-start d-flex mb-2 mb-md-3 px-0">
              <template #prepend>
                <v-icon class="mr-3 mr-md-4 mt-1 text-red" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-grey-lighten-1" style="line-height: 1.5;">
                pracę na oryginalnym systemie oraz stosowanie się do wytycznych marki
              </span>
            </v-list-item>

            <v-list-item class="align-start d-flex mb-2 mb-md- px-0">
              <template #prepend>
                <v-icon class="mr-3 mr-md-4 mt-1 text-red" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-grey-lighten-1" style="line-height: 1.5;">
                kompleksową obsługę dopasowaną do potrzeb Twojego auta – od diagnostyki po zaawansowane naprawy
              </span>
            </v-list-item>
          </v-list>
        </div>

        <div
          class="align-center bg-grey-darken-4 d-flex elevation-3 mx-auto pa-4 pa-md-6 rounded-lg text-left"
          style="border-left: 5px solid #E53935; max-width: 700px;"
        >
          <v-icon class="flex-shrink-0 mr-3 mr-md-4" color="red" icon="mdi-shield-check-outline" size="36" />
          <p class="font-weight-bold mb-0 text-subtitle-1 text-md-h6 text-white" style="line-height: 1.4;">
            Bo doskonałość to nie opcja.<br>
            <span class="text-grey-lighten-1">To standard, na który zasługuje Twoje auto.</span>
          </p>
        </div>

      </v-container>
    </v-img>

    <v-container class="py-10" style="max-width: 1500px;">
      <div class="text-center mb-16 px-4">
        <h2 class="text-h5 text-md-h4 font-weight-bold text-secondary mb-4 justify-center d-flex align-center text-wrap">
          <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-shield-car" size="36" />
          Twój samochód w najlepszych rękach.
        </h2>
        <p class="text-body-1 text-secondary mx-auto text-wrap" style="line-height: 1.8; max-width: 800px;">
          Zaufaj specjalistom, którzy rozumieją motoryzację tak samo dobrze jak Ty kochasz jazdę.
        </p>
      </div>

      <v-row class="ga-4 ga-lg-0 flex-nowrap flex-lg-wrap overflow-x-auto pb-6">
        <v-col
          class="flex-shrink-0"
          cols="10"
          lg="3"
          md="4"
          sm="5"
        >
          <v-img
            class="elevation-3 w-100"
            cover
            height="380"
            rounded="lg"
            src="@/assets/service/service_detail.jpg"
          />
        </v-col>

        <v-col
          class="flex-shrink-0 mt-lg-12"
          cols="10"
          lg="3"
          md="4"
          sm="5"
        >
          <v-img
            class="elevation-3 w-100"
            cover
            height="380"
            rounded="lg"
            src="@/assets/service/service_detail2.jpg"
          />
        </v-col>

        <v-col
          class="flex-shrink-0"
          cols="10"
          lg="3"
          md="4"
          sm="5"
        >
          <v-img
            class="elevation-3 w-100"
            cover
            height="380"
            rounded="lg"
            src="@/assets/service/service_detail3.jpg"
          />
        </v-col>

        <v-col
          class="flex-shrink-0 mt-lg-12"
          cols="10"
          lg="3"
          md="4"
          sm="5"
        >
          <v-img
            class="elevation-3 w-100"
            cover
            height="380"
            rounded="lg"
            src="@/assets/service/service_detail4.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>
/* Gradient przyciemniający dla głównego banera, by biały tekst był czytelny na każdym zdjęciu */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
}
.z-1 {
  z-index: 1;
}
</style>
