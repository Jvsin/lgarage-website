<script setup>
  // Miejsce na ewentualne importy w przyszłości
</script>

<template>
  <v-container class="py-6 py-md-10" fluid>
    <v-row class="align-center align-md-stretch">
      <v-col class="d-flex" cols="12" md="6">
        <v-img
          class="elevation-4 mx-auto rounded-lg"
          cover
          src="@/assets/performance/chip_tuning.png"
          style="min-height: 350px; height: 100%;"
        />
      </v-col>

      <v-col cols="12" md="6">
        <h2 class="font-weight-bold mb-4 mb-md-6 text-h4 text-md-h3 text-secondary">
          Twój samochód ma większy potencjał, niż myślisz.
        </h2>

        <p class="mb-4 text-body-1 text-secondary" style="line-height: 1.8;">
          Wiele aut opuszcza fabrykę z niewykorzystanym zapasem mocy, który producent pozostawia ze względów marketingowych, norm emisji lub różnicowania modeli. Odpowiednio przygotowany program potrafi ten potencjał bezpiecznie wykorzystać — bez nadmiernego obciążania silnika i układu napędowego.
        </p>

        <p class="mb-6 mb-md-8 text-body-1 text-secondary" style="line-height: 1.8;">
          Co więcej — ten sam silnik często występuje w kilku wariantach mocy, różniących się wyłącznie oprogramowaniem. My optymalizujemy parametry tak, aby pracowały w bezpiecznym zakresie konstrukcyjnym jednostki.
        </p>

        <v-row class="mb-0">
          <v-col class="d-flex flex-column justify-center" cols="12" md="6">
            <h3 class="font-weight-bold mb-3 text-h6 text-secondary">Co zyskujesz?</h3>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-check-circle" />
              <span class="text-body-1 text-secondary">Zwiększenie mocy i momentu obrotowego</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-check-circle" />
              <span class="text-body-1 text-secondary">Lepsze przyspieszenie i elastyczność</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-check-circle" />
              <span class="text-body-1 text-secondary">Dynamiczniejszą, płynniejszą jazdę</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-check-circle" />
              <span class="text-body-1 text-secondary">Możliwość optymalizacji spalania</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-check-circle" />
              <span class="text-body-1 text-secondary">Program dopasowany indywidualnie do Twojego auta</span>
            </div>
          </v-col>

          <v-col class="mt-4 mt-sm-0" cols="12" sm="6">
            <h3 class="font-weight-bold mb-3 text-h6 text-secondary">Jak pracujemy?</h3>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-cog" />
              <span class="text-body-1 text-secondary">Odczyt oryginalnego oprogramowania ECU</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-cog" />
              <span class="text-body-1 text-secondary">Analiza parametrów silnika</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-cog" />
              <span class="text-body-1 text-secondary">Indywidualne strojenie mapy</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-cog" />
              <span class="text-body-1 text-secondary">Zachowanie bezpiecznych norm pracy</span>
            </div>
            <div class="d-flex align-start mb-2">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-cog" />
              <span class="text-body-1 text-secondary">Kontrola efektów po modyfikacji</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="justify-center mb-5 mb-md-16">
      <v-col cols="12" md="8">
        <div class="bg-grey-darken-4 mt-4 mt-md-6 pa-4 pa-md-6 rounded-lg" style="border-left: 4px solid #E53935;">
          <p class="font-weight-bold mb-2 text-h6 text-secondary" style="line-height: 1.4;">
            Więcej mocy. Więcej momentu. Ta sama trwałość.
          </p>
          <p class="mb-0 text-body-1 text-secondary" style="line-height: 1.6;">
            W Gawrych Serwis stawiamy na bezpieczeństwo, wiedzę i doświadczenie. Nie wgrywamy „gotowych plików” — każde auto traktujemy indywidualnie. Skontaktuj się z nami i sprawdź, ile może zyskać Twój samochód!
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row class="justify-center mb-md-16">
      <v-col cols="12">
        <v-img
          class="elevation-4 mx-auto rounded-lg"
          cover
          position="center"
          src="@/assets/performance/performance_background.jpg"
          style="height: 400px; min-height: 250px; max-height: 400px;"
        />
      </v-col>
    </v-row>

    <v-row class="align-center align-md-stretch">
      <v-col class="d-flex flex-column justify-center mt-6 mt-md-0 pl-md-8" cols="12" md="6">
        <h2 class="font-weight-bold mb-4 mb-md-6 text-h4 text-md-h3 text-secondary">
          Doposażenie elektroniczne Twojego auta
        </h2>

        <p class="mb-6 mb-md-8 text-body-1 text-secondary" style="line-height: 1.8;">
          Nowoczesne samochody mają ogromne możliwości — często niewykorzystane. My aktywujemy funkcje, które producent przewidział, ale nie zawsze uruchomił.
        </p>

        <h3 class="font-weight-bold mb-4 mb-md-6 text-h5 text-secondary">Co możemy dla Ciebie zrobić?</h3>

        <v-row class="mb-4 mb-md-8">
          <v-col cols="12" sm="6">
            <h4 class="font-weight-bold mb-2 text-subtitle-1 text-red">Dezaktywacja systemu Start-Stop</h4>
            <p class="mb-4 mb-sm-6 text-body-2 text-secondary" style="line-height: 1.6;">
              Masz dość wyłączającego się silnika na światłach? Możemy trwale dezaktywować system lub zaprogramować jego domyślne wyłączenie.
            </p>

            <h4 class="font-weight-bold mb-2 text-subtitle-1 text-red">Doświetlanie zakrętów</h4>
            <p class="mb-0 mb-sm-0 text-body-2 text-secondary" style="line-height: 1.6;">
              Lepsza widoczność w nocy i podczas manewrów. Aktywujemy funkcję poprawiającą bezpieczeństwo jazdy.
            </p>
          </v-col>

          <v-col class="mt-4 mt-sm-0" cols="12" sm="6">
            <h4 class="font-weight-bold mb-2 text-subtitle-1 text-red">Aktywacja Apple CarPlay / Android Auto</h4>
            <p class="mb-4 mb-sm-6 text-body-2 text-secondary" style="line-height: 1.6;">
              Podłącz telefon i korzystaj z nawigacji, muzyki, wiadomości i aplikacji. Bez wymiany radia — programowo.
            </p>

            <h4 class="font-weight-bold mb-2 text-subtitle-1 text-red">Funkcje multimedialne</h4>
            <p class="mb-0 text-body-2 text-secondary" style="line-height: 1.6;">
              Odblokowanie dodatkowych opcji systemu infotainment oraz indywidualna konfiguracja ustawień pojazdu.
            </p>
          </v-col>
        </v-row>

        <h3 class="font-weight-bold mb-4 text-h6 text-secondary">Dlaczego warto?</h3>
        <v-row class="mb-2">
          <v-col class="py-1" cols="12" sm="6">
            <div class="d-flex align-start">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-shield-check" />
              <span class="text-body-1 text-secondary">Bez ingerencji mechanicznej</span>
            </div>
          </v-col>

          <v-col class="py-1" cols="12" sm="6">
            <div class="d-flex align-start">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-shield-check" />
              <span class="text-body-1 text-secondary">Kodowanie zgodne ze specyfikacją auta</span>
            </div>
          </v-col>

          <v-col class="py-1" cols="12" sm="6">
            <div class="d-flex align-start">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-shield-check" />
              <span class="text-body-1 text-secondary">Bezpieczne programowanie sterowników</span>
            </div>
          </v-col>

          <v-col class="py-1" cols="12" sm="6">
            <div class="d-flex align-start">
              <v-icon class="mr-3 mt-1 flex-shrink-0" color="red" icon="mdi-shield-check" />
              <span class="text-body-1 text-secondary">Indywidualne podejście do modelu</span>
            </div>
          </v-col>

          <v-col class="py-2 mt-2" cols="12">
            <div class="d-flex align-center justify-center">
              <v-icon class="mr-3 flex-shrink-0" color="red" icon="mdi-shield-check" />
              <span class="font-weight-bold text-body-1 text-secondary">Po inne modyfikacje skontaktuj się z nami.</span>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="pa-0 pa-md-3 d-flex"
        cols="12"
        md="6"
      >
        <v-img
          class="elevation-4 rounded-0 rounded-md-lg"
          contain
          src="@/assets/performance/start_stop.png"
          style="min-height: 300px;"
          width="100%"
        />
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <div class="bg-grey-darken-4 mt-4 mt-md-6 pa-4 pa-md-6 rounded-lg" style="border-left: 4px solid #E53935;">
          <p class="font-weight-bold mb-2 text-h6 text-secondary" style="line-height: 1.4;">
            Twój samochód może więcej — my pokażemy Ci jak.
          </p>
          <p class="mb-0 text-body-1 text-secondary" style="line-height: 1.6;">
            Skontaktuj się z nami i sprawdź, jakie funkcje możemy aktywować w Twoim aucie.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
