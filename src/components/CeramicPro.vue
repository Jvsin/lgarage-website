<script setup>
  import PricingTable from '@/components/PricingTable.vue'
</script>

<template>
  <div>
    <v-container class="pb-12 pb-md-16 px-4 px-md-16" fluid>
      <div class="text-center mb-8 mb-md-12">
        <h2 class="font-weight-bold text-h4 text-md-h3 text-secondary">
          Czym jest <span class="text-red">Ceramic Pro</span>?
        </h2>
      </div>

      <v-row class="justify-md-center px-2 flex-nowrap flex-md-wrap overflow-x-auto pb-4">
        <v-col
          class="px-2 mb-6 mb-md-0 flex-grow-1 flex-shrink-0 mt-md-0"
          cols="9"
          md="2"
          sm="5"
          style="max-width: 350px;"
        >
          <v-img
            class="elevation-4 rounded-lg mx-auto"
            cover
            src="@/assets/detailing/ceramicpro/ceramicpro_5.jpeg"
            style="aspect-ratio: 1;"
          />
        </v-col>

        <v-col
          class="px-2 mb-6 mb-md-0 flex-grow-1 flex-shrink-0 mt-md-8"
          cols="9"
          md="2"
          sm="5"
          style="max-width: 350px;"
        >
          <v-img
            class="elevation-4 rounded-lg mx-auto"
            cover
            src="@/assets/detailing/ceramicpro/ceramicpro_2.jpeg"
            style="aspect-ratio: 1;"
          />
        </v-col>

        <v-col
          class="px-2 mb-6 mb-md-0 flex-grow-1 flex-shrink-0 mt-md-16"
          cols="9"
          md="2"
          sm="5"
          style="max-width: 350px;"
        >
          <v-img
            class="elevation-4 rounded-lg mx-auto"
            cover
            src="@/assets/detailing/ceramicpro/ceramicpro_3.jpeg"
            style="aspect-ratio: 1;"
          />
        </v-col>

        <v-col
          class="px-2 mb-6 mb-md-0 flex-grow-1 flex-shrink-0 mt-md-8"
          cols="9"
          md="2"
          sm="5"
          style="max-width: 350px;"
        >
          <v-img
            class="elevation-4 rounded-lg mx-auto"
            cover
            src="@/assets/detailing/ceramicpro/ceramicpro_4.jpeg"
            style="aspect-ratio: 1;"
          />
        </v-col>

        <v-col
          class="px-2 mb-6 mb-md-0 flex-grow-1 flex-shrink-0 mt-md-0"
          cols="9"
          md="2"
          sm="5"
          style="max-width: 350px;"
        >
          <v-img
            class="elevation-4 rounded-lg mx-auto"
            cover
            src="@/assets/detailing/ceramicpro/ceramicpro_1.jpeg"
            style="aspect-ratio: 1;"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-md-4 px-2 px-md-1 px-2 px-md-10" fluid>
      <v-row class="align-center align-md-stretch mb-md-4">
        <v-col class="d-flex flex-column justify-center" cols="12" md="4">
          <h2 class="font-weight-bold mb-4 mb-md-6 text-h4 text-md-h3 text-secondary">
            Powłoki ceramiczne
          </h2>

          <p class="mb-4 text-body-1 text-secondary font-weight-bold" style="line-height: 1.8;">
            Ceramic Pro jest prekursorem i jednocześnie największym światowym liderem w dziedzinie najwyższej jakości powłok ceramicznych.
          </p>

          <p class="mb-4 text-body-1 text-secondary" style="line-height: 1.8;">
            Oferujemy szeroką gamę powłok ceramicznych oraz folii ochronnych PPF. Nasze powłoki oraz folie PPF przeznaczone są do zastosowań w motoryzacji, marine, lotnictwie, przemyśle oraz w domu. Formuły powłok są opracowane na poziomie molekularnym i trwale chronią różne powierzchnie, takie jak lakier, szkło, stal oraz różne tworzywa i materiały.
          </p>

          <p class="mb-0 text-body-1 text-secondary" style="line-height: 1.8;">
            Powłoki wiążą się z powierzchniami na poziomie molekularnym, wypełniając wszelkie nanopory i tworząc hydrofobową powierzchnię, która jest odporna na zanieczyszczenia oraz działania zewnętrzne.
          </p>
        </v-col>

        <v-col class="d-flex flex-column mt-6 mt-md-0 pl-md-8 overflow-hidden" cols="12" md="8">
          <v-row class="h-100 d-none d-md-flex" dense>
            <v-col class="d-flex flex-column pb-4 pr-2" cols="6">
              <v-img
                class="elevation-4 mb-4 rounded-lg w-100 flex-grow-1"
                cover
                src="@/assets/detailing/ceramic_1.jpeg"
                style="min-height: 100px; max-height: 350px;"
              />
              <v-img
                class="elevation-4 rounded-lg w-100 flex-grow-1"
                cover
                src="@/assets/detailing/ceramic_3.jpeg"
                style="min-height: 100px; max-height: 350px;"
              />
            </v-col>

            <v-col class="d-flex flex-column pt-8 pl-2" cols="6">
              <v-img
                class="elevation-4 mb-4 rounded-lg w-100 flex-grow-1"
                cover
                src="@/assets/detailing/ceramic_2.jpeg"
                style="min-height: 100px; max-height: 350px;"
              />
              <v-img
                class="elevation-4 rounded-lg w-100 flex-grow-1"
                cover
                position="top"
                src="@/assets/detailing/ceramic_4.jpeg"
                style="min-height: 100px; max-height: 350px;"
              />
            </v-col>
          </v-row>

          <v-row class="d-flex d-md-none flex-nowrap overflow-x-auto pb-4" dense>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_1.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_2.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_3.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                position="top"
                src="@/assets/detailing/ceramic_4.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="px-4 px-md-10" fluid>
      <v-row class="justify-center mb-5 mb-md-5">
        <v-col cols="12">
          <v-img
            class="elevation-4 mx-auto rounded-lg"
            cover
            src="@/assets/detailing/ceramic_background.jpeg"
            style="min-height: 250px; max-height: 700px;"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="px-4 px-md-10" fluid>
      <v-row class="align-center align-md-stretch mb-md-8">
        <v-col class="d-flex flex-column justify-center pr-md-8" cols="12" md="6">
          <h2 class="font-weight-bold mb-4 mb-md-6 text-h4 text-md-h3 text-secondary">
            Powłoki od Ceramic Pro nie mają sobie równych.
          </h2>

          <p class="mb-6 text-body-1 text-secondary" style="line-height: 1.8;">
            Ceramic Pro to wielowarstwowa, przezroczysta, płynna powłoka nanoceramiczna. Po utwardzeniu technologia ta przekształca się na powierzchni w trwały, ale elastyczny szklany ekran. Ceramic Pro można opisać jako dodatkową bezbarwną powłokę o 3-krotnie większej twardości i właściwościach samoczyszczących, a także regenerujących.
          </p>

          <h3 class="font-weight-bold mb-3 text-h5 text-secondary">
            Jak to jest możliwe?
          </h3>
          <p class="mb-4 text-body-1 text-secondary font-weight-bold" style="line-height: 1.8;">
            Żadna inna powłoka nie zapewnia takiego poziomu hydrofobowości, ochrony i trwałości.
          </p>

          <p class="mb-4 text-body-1 text-secondary" style="line-height: 1.8;">
            Po utwardzeniu Ceramic Pro ma twardość powyżej 9H. Zwykły lakier bezbarwny ma twardość od 2H do 4H. Wzrost twardości zabezpieczonej powierzchni jest ogromny. To sprawia, że jest to obecnie najtwardsza powłoka ochronna na rynku. Ceramic Pro zmniejsza podatność na drobne zadrapania lakieru bezbarwnego i działa jako warstwa ochronna. Pozwala to zachować oryginalny lakier nienaruszony.
          </p>

          <p class="mb-6 text-body-1 text-secondary" style="line-height: 1.8;">
            Wszelkie zarysowania powierzchni powstałe na powłoce można łatwo usunąć za pomocą lekkiego polerowania, które nie osłabi oryginalnego lakieru. Dzięki Ceramic Pro lakier nie blaknie ani nie starzeje się dzięki ochronie przed promieniowaniem UV. Pomyśl o Ceramic Pro jako dodatkowej przezroczystej warstwie lakieru, tylko dużo twardszej. Wszystko to pozwala na większy spokój ducha i pełniejszą radość z jazdy, nawet w trudnych warunkach.
          </p>

          <h3 class="font-weight-bold mb-3 text-h5 text-secondary">
            Błyszczący, gładki i samoczyszczący
          </h3>
          <p class="mb-4 text-body-1 text-secondary" style="line-height: 1.8;">
            Ta nanotechnologia pozwala ceramicznym nanocząsteczkom wypełnić najmniejsze pory w lakierze, co sprawia, że powłoka Ceramic Pro jest błyszcząca, gładka i wyjątkowo hydrofobowa. Ceramic Pro radykalnie obniża napięcie powierzchniowe, zmniejszając przywieranie do powierzchni zanieczyszczeń takich jak: ptasie odchody, owady, brud, smoła i farba graffiti. Woda z łatwością usuwa brud z powierzchni, otaczając go podczas spływania z powierzchni. Nazywa się to efektem samooczyszczania.
          </p>

          <div class="bg-grey-darken-4 pa-4 rounded-lg" style="border-left: 4px solid #E53935;">
            <p class="mb-0 text-body-1 text-secondary font-weight-medium" style="line-height: 1.6;">
              Po utwardzeniu powłoki Ceramic Pro można ją usunąć tylko poprzez polerowanie maszynowe. To stawia Ceramic Pro w kategorii samej w sobie, w porównaniu do selantów lub wosków, które szybko się rozkładają.
            </p>
          </div>
        </v-col>

        <v-col class="d-flex mt-6 mt-md-0" cols="12" md="6">
          <v-row class="h-100" dense>
            <v-col class="pb-md-8 pr-md-2 mb-4 mb-md-0" cols="12" md="6">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_5.jpeg"
                style="height: 100%; min-height: 300px;"
              />
            </v-col>
            <v-col class="pt-md-4 pl-md-2" cols="12" md="6">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_6.jpeg"
                style="height: 100%; min-height: 300px;"
              />
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="justify-center mb-md-10">
        <v-col class="text-center" cols="12" md="10">
          <h2 class="font-weight-bold mb-6 text-h4 text-md-h3 text-secondary">
            Charakterystyka powłok ceramicznych Ceramic Pro
          </h2>

          <v-img
            class="elevation-4 mx-auto mb-6 rounded-lg w-100 d-none d-md-block"
            src="@/assets/detailing/ceramic_characteristic.png"
          />

          <v-img
            class="elevation-4 mx-auto mb-6 rounded-lg w-100 d-block d-md-none"
            src="@/assets/detailing/ceramic_characteristic_mobile.png"
          />

          <div class="bg-grey-darken-4 mx-auto pa-4 pa-md-6 rounded-lg text-left" style="border-left: 4px solid #E53935;">
            <p class="font-weight-bold mb-0 text-body-1 text-secondary" style="line-height: 1.6;">
              Ochrona LIGHT, MEDIUM, TITANIUM wymaga corocznego przeglądu i konserwacji, które są warunkami utrzymania właściwości poszczególnych typów.
            </p>
            <p class="mt-2 mb-0 text-body-2 text-secondary">
              Źródło:
              <a
                class="font-weight-bold text-decoration-none text-red"
                href="https://ceramic-pro.pl/powloki-ceramiczne/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Powłoki ceramiczne - Ceramic Pro Poland
              </a>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container class="px-4 px-md-10" fluid>
      <v-row class="justify-center mb-10 mb-md-16">
        <v-col cols="12">
          <v-img
            class="elevation-4 mx-auto rounded-lg"
            cover
            position="center"
            src="https://via.placeholder.com/1600x400?text=Separator+3"
            style="height: 250px; min-height: 250px; max-height: 400px;"
          />
        </v-col>
      </v-row>
    </v-container> -->

    <v-container fluid>
      <v-row class="justify-center mb-md-8">
        <v-col class="text-center" cols="12" md="10">
          <h2 class="font-weight-bold mb-6 text-h4 text-md-h3 text-secondary">
            Cennik
          </h2>

          <!-- <v-img
            class="elevation-4 mx-auto rounded-lg w-100"
            src="@/assets/detailing/cennik.png"
          /> -->

          <PricingTable />

          <div class="bg-grey-darken-4 mt-6 mx-auto pa-4 pa-md-6 rounded-lg text-left" style="border-left: 4px solid #E53935;">
            <v-row class="text-secondary align-end">
              <v-col cols="12" md="8">
                <p class="mb-1 text-body-2">
                  <span class="font-weight-bold text-white">Auta małe</span> - np. Mini, Audi A1, BMW I3
                </p>
                <p class="mb-1 text-body-2">
                  <span class="font-weight-bold text-white">Auta średnie</span> - np. Audi A3-A5, BMW 1-4, Porsche 911, Mercedes A-C
                </p>
                <p class="mb-1 text-body-2">
                  <span class="font-weight-bold text-white">Auta Duże</span> - Audi A6-7, Q5, BMW 5, X3-4
                </p>
                <p class="mb-0 text-body-2">
                  <span class="font-weight-bold text-white">SUV/Limuzyna</span> - Range Rover, AUDI A8, Mercedes GLS
                </p>
              </v-col>

              <v-col class="text-md-right mt-md-0" cols="12" md="4">
                <span class="font-weight-medium text-body-1 text-red">
                  Podane ceny są cenami netto
                </span>
              </v-col>
            </v-row>
          </div>

        </v-col>
      </v-row>
    </v-container>

    <v-container class="px-4 px-md-10" fluid>
      <v-row class="align-center align-md-stretch mb-8">
        <v-col class="d-flex flex-column justify-center" cols="12" md="6">
          <h2 class="font-weight-bold mb-4 mb-md-6 text-h4 text-md-h3 text-secondary">
            System gwarancyjny
          </h2>

          <p class="mb-4 text-body-1 text-secondary" style="line-height: 1.8;">
            Oferujemy w pełni transparentny i prestiżowy system gwarancyjny oparty na oficjalnej platformie Ceramic Pro.
          </p>

          <p class="mb-6 text-body-1 text-secondary" style="line-height: 1.8;">
            Każdy klient, który zabezpieczy swoje auto powłoką ceramiczną Ceramic Pro lub folią ochronną PPF Kavaca, otrzymuje indywidualne elektroniczne konto na platformie producenta.
          </p>

          <h3 class="font-weight-bold mb-4 text-h6 text-secondary">W ramach systemu:</h3>

          <div class="d-flex align-center mb-3">
            <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-lock" />
            <span class="text-body-1 text-secondary">Rejestrowana jest oficjalna gwarancja producenta</span>
          </div>

          <div class="d-flex align-center mb-3">
            <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-clipboard-text" />
            <span class="text-body-1 text-secondary">Klient ma stały dostęp do bieżących oraz archiwalnych usług detailingowych wykonanych przy jego samochodzie</span>
          </div>

          <div class="d-flex align-center mb-3">
            <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-shield-check" />
            <span class="text-body-1 text-secondary">Wszystkie aplikacje są potwierdzone w systemie autoryzowanym przez markę</span>
          </div>

          <div class="d-flex align-center mb-3">
            <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-chart-line-variant" />
            <span class="text-body-1 text-secondary">Historia zabezpieczenia zwiększa wartość pojazdu przy odsprzedaży</span>
          </div>

          <div class="d-flex align-center mb-6">
            <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-check-circle" />
            <span class="text-body-1 text-secondary">Potwierdzona dokumentacja podnosi wiarygodność wykonanych prac</span>
          </div>

          <div class="bg-grey-darken-4 pa-4 pa-md-6 rounded-lg" style="border-left: 4px solid #E53935;">
            <p class="mb-0 text-body-1 font-weight-bold text-grey-lighten-1" style="line-height: 1.6;">
              Dzięki temu właściciel auta posiada cyfrową historię zabezpieczenia pojazdu, co stanowi realny atut rynkowy oraz gwarancję jakości wykonania usługi.
            </p>
            <v-btn class="mt-2" color="red-background" href="https://ceramicpro.care/" target="_blank">Link do gwarancji</v-btn>
          </div>
        </v-col>

        <v-col class="d-flex flex-column mt-md-0 pl-md-8 overflow-hidden" cols="12" md="6">
          <v-row class="h-100 d-none d-md-flex" dense>
            <v-col class="d-flex flex-column pb-6 pr-2" cols="6">
              <v-img
                class="elevation-4 mb-4 rounded-lg w-100 flex-grow-1"
                cover
                src="@/assets/detailing/ceramic_7.jpeg"
                style="min-height: 100px; max-height: 350px;"
              />
              <v-img
                class="elevation-4 rounded-lg w-100 flex-grow-1"
                cover
                src="@/assets/detailing/ceramic_8.jpeg"
                style="min-height: 100px; max-height: 350px;"
              />
            </v-col>
            <v-col class="pt-12 pl-2" cols="6">
              <v-img
                class="elevation-4 rounded-lg w-100 h-100"
                cover
                src="@/assets/detailing/ceramic_9.jpeg"
                style="min-height: 100px;"
              />
            </v-col>
          </v-row>

          <v-row class="d-flex d-md-none flex-nowrap overflow-x-auto pb-4" dense>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_7.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_8.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
            <v-col class="flex-shrink-0" cols="9" sm="5">
              <v-img
                class="elevation-4 rounded-lg w-100"
                cover
                src="@/assets/detailing/ceramic_9.jpeg"
                style="min-height: 250px;"
              />
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
