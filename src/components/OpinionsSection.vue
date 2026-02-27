<script setup>
  import { ref } from 'vue'

  const googleStats = ref({
    rating: '4.7',
    count: 63,
  })

  const reviews = ref([
    {
      id: 1,
      author: 'Izabela J.',
      text: 'Polecam z czystym sumieniem. Usługa wykonana bardzo profesjonalnie i rzetelnie. Odbierając auto zostało mi dokładnie przekazane wszystko co zostało zrobione i za ile. Pan właściciel nie bierze 10-ciu aut na raz, tylko zajmuje się jednym od początku do końca. Dodatkowo warsztat czyściutki, auto oddane do użytku umyte i odkurzone. Za wszystkie części otrzymałam paragony. Jednym słowem warsztat godny polecenia, powiedziałabym nawet wzorcowy dla wszystkich mechaników.',
      stars: 5,
    },
    {
      id: 2,
      author: 'Bartosz T.',
      text: 'Wszystko w jak najlepszym porządku. Uczciwe podejście do klienta - wszystkie informacje dotyczące naprawianego pojazdu przekazywane na bieżąco, w sposób szczegółowy i zrozumiały dla samochodowych "laików". Rozmawiając z pracownikami widać duże doświadczenie i przede wszystkim pasję. Gorąco polecam!',
      stars: 5,
    },
    {
      id: 3,
      author: 'Rafał M.',
      text: 'Cała moja rodzina naprawia tu samochody od lat i zawsze było i jest  mega profesjonalnie. W tym serwisie jest coś co rzadko można spotkać gdzie indziej - zaufanie i szczerość. Jak się da to naprawią idealnie, jeśli mają wątpliwości to szczerze powiedzą, że się nie podejmują.',
      stars: 5,
    },
  ])
</script>

<template>
  <v-container class="py-8 py-md-5 px-4 px-md-10" fluid>
    <h2 class="mb-4 text-h4 font-weight-bold text-secondary text-center">
      Opinie klientów
    </h2>

    <div class="text-center mb-10">
      <div class="d-flex justify-center align-center gap-1 mb-2">
        <v-icon v-for="n in 5" :key="n" color="yellow-darken-2" size="small">
          mdi-star
        </v-icon>
      </div>
      <p class="text-body-1 font-weight-bold text-secondary mb-0">
        {{ googleStats.rating }}/5 ({{ googleStats.count }} opinie)
      </p>
      <p class="text-caption text-grey">Zweryfikowane opinie z Google</p>
      <p class="text-caption text-grey">stan na luty 2026</p>
    </div>

    <v-row class="mb-8 justify-center" dense>
      <v-col
        v-for="review in reviews"
        :key="review.id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card class="h-100 pa-6 d-flex flex-column bg-grey-darken-4 text-white elevation-4" rounded="lg">
          <div class="d-flex align-center mb-4">
            <v-icon
              v-for="n in review.stars"
              :key="n"
              class="mr-1"
              color="yellow-darken-2"
              size="small"
            >
              mdi-star
            </v-icon>
          </div>

          <p class="text-body-2 font-italic mb-4 flex-grow-1" style="line-height: 1.6;">
            "{{ review.text }}"
          </p>

          <div class="d-flex align-center mt-auto">
            <v-avatar
              class="mr-3 font-weight-bold"
              color="grey-darken-3"
              size="36"
            >
              {{ review.author.charAt(0) }}
            </v-avatar>
            <span class="text-subtitle-2 font-weight-bold">{{ review.author }}</span>
          </div>

        </v-card>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-btn
        class="text-white px-8"
        color="red-background"
        href="https://www.google.com/search?sca_esv=f85aee35ab456974&sxsrf=ANbL-n54xWLr4GVTO4jfDa8ns8zkzMulXQ:1771335098123&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x8mTr-TvS5VDfOLX48ipTDaGVu9ZRM0hd7NgewvPZLvGJeDTY112UyYk3wPPPcWgmjr4qpPBz9o5dGxeR5W6x8VURt6Af6AxZJkKqNbHxn6jsLCzJw%3D%3D&q=AUTO-SERWIS+Krzysztof+Gawrych+Opinie&sa=X&ved=2ahUKEwid47S60eCSAxUMExAIHb-vNkQQ0bkNegQIIxAF&biw=1528&bih=698&dpr=1.25"
        rel="noopener noreferrer"
        size="large"
        target="_blank"
        variant="elevated"
      >
        Zobacz więcej opinii
      </v-btn>
    </div>

  </v-container>
</template>

<style scoped>
.gap-1 {
  gap: 4px;
}
</style>
