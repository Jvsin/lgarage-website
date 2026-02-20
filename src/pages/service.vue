<script setup>
  // Tu na razie nie potrzebujemy skomplikowanej logiki,
  // ale zostawiam otwarty skrypt na przyszłość.
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

    <v-container class="py-16">
      <v-row class="align-center">
        <v-col class="mb-8 mb-md-0" cols="12" md="6">
          <v-img
            class="elevation-4 mx-auto"
            cover
            height="500"
            position="bottom"
            rounded="lg"
            src="@/assets/service/service_cars.jpeg"
            width="100%"
          />
        </v-col>
        <v-col class="pl-md-12" cols="12" md="6">
          <h2 class="text-h4 font-weight-bold text-secondary mb-6">
            Precyzja i Pasja
          </h2>
          <p class="text-body-1 text-secondary" style="line-height: 1.8;">
            Łączymy doświadczenie z nowoczesną technologią, precyzję z pasją, a profesjonalizm z indywidualnym podejściem do każdego klienta. Bo dla nas serwis to coś więcej niż naprawa – to troska o Twoją mobilność, komfort i niezawodność każdego dnia.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="bg-grey-darken-4 text-center">
      <v-img
        class="align-center text-center"
        cover
        gradient="to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
        height="600"
        position="bottom"
        src="@/assets/service/service_garage.jpg"
      >
        <div class="py-16 w-100">
          <v-container>
            <!-- <v-icon class="text-red mb-4" icon="mdi-car-wrench" size="64" /> -->
            <h3 class="text-h3 font-weight-bold text-white mb-4">
              Twój samochód w najlepszych rękach.
            </h3>
            <p class="text-h5 text-grey-lighten-1 font-weight-light mx-auto" style="max-width: 700px;">
              Zaufaj specjalistom, którzy rozumieją motoryzację tak samo dobrze jak Ty kochasz jazdę.
            </p>
          </v-container>
        </div>
      </v-img>
    </v-sheet>

    <v-container class="py-16">
      <v-row class="align-center">
        <v-col class="pr-md-12 mb-8 mb-md-0" cols="12" md="6">
          <h2 class="text-h3 font-weight-bold text-secondary mb-6">
            Więcej niż standardowy serwis
          </h2>
          <p class="text-body-1 text-secondary mb-6" style="line-height: 1.8;">
            Kiedy mówimy, że zadbamy o Twoje auto, mamy na myśli coś więcej niż standardowy serwis. Oferujemy:
          </p>

          <v-list class="bg-transparent mb-8" density="compact">
            <v-list-item class="px-0 mb-3 d-flex align-start">
              <template #prepend>
                <v-icon class="text-red mr-4 mt-1" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-secondary" style="line-height: 1.5;">
                najwyższy poziom usług serwisowych, oparty na wiedzy i doświadczeniu
              </span>
            </v-list-item>

            <v-list-item class="px-0 mb-3 d-flex align-start">
              <template #prepend>
                <v-icon class="text-red mr-4 mt-1" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-secondary" style="line-height: 1.5;">
                przeglądy gwarancyjne i pogwarancyjne zgodne ze standardami producenta
              </span>
            </v-list-item>

            <v-list-item class="px-0 mb-3 d-flex align-start">
              <template #prepend>
                <v-icon class="text-red mr-4 mt-1" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-secondary" style="line-height: 1.5;">
                pracę na oryginalnym systemie oraz stosowanie się do wytycznych marki
              </span>
            </v-list-item>

            <v-list-item class="px-0 mb-3 d-flex align-start">
              <template #prepend>
                <v-icon class="text-red mr-4 mt-1" icon="mdi-check-circle" />
              </template>
              <span class="text-body-1 text-secondary" style="line-height: 1.5;">
                kompleksową obsługę dopasowaną do potrzeb Twojego auta – od diagnostyki po zaawansowane naprawy
              </span>
            </v-list-item>
          </v-list>

          <div
            class="pa-6 bg-grey-darken-4 rounded-lg d-flex align-center elevation-3"
            style="border-left: 5px solid #E53935;"
          >
            <v-icon class="mr-4 flex-shrink-0" color="red" icon="mdi-shield-check-outline" size="36" />

            <p class="text-h6 font-weight-bold text-white mb-0" style="line-height: 1.4;">
              Bo doskonałość to nie opcja.<br>
              <span class="text-white">To standard, na który zasługuje Twoje auto.</span>
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-row class="ga-4" dense>
            <v-col>
              <v-img
                class="elevation-3 w-100"
                cover
                height="380"
                rounded="lg"
                src="@/assets/service/service_detail2.jpeg"
              />
            </v-col>
            <v-col class="mt-12">
              <v-img
                class="elevation-3 w-100"
                cover
                height="380"
                rounded="lg"
                src="@/assets/service/service_detail.jpg"
              />
            </v-col>
          </v-row>
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
