<template>
  <v-container class="py-3" fluid>
    <h2 class="my-3 text-h4 font-weight-bold text-secondary text-center">
      Opinie klientów:
    </h2>
    <div class="text-center mb-6">
      <div class="d-flex justify-center align-center gap-2 mb-2">
        <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
        <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
        <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
        <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
        <v-icon color="yellow-darken-2" size="small">mdi-star-half-full</v-icon>
      </div>
      <p class="text-body-1 font-weight-bold text-secondary">4.7/5 (63 opinie)</p>
      <p class="text-caption text-secondary">Google</p>
    </div>

    <v-row class="my-3" dense>
      <v-col cols="12" md="4">
        <v-card class="opinion-card h-100" rounded="lg" variant="tonal">
          <div class="d-flex align-center mb-2">
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
          </div>
          <p class="text-body-2 mb-2">Świetny serwis, profesjonalna obsługa!</p>
          <p class="text-caption text-secondary">Jan K.</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="opinion-card h-100" rounded="lg" variant="tonal">
          <div class="d-flex align-center mb-2">
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
          </div>
          <p class="text-body-2 mb-2">Detaling na najwyższym poziomie. Polecam!</p>
          <p class="text-caption text-secondary">Maria W.</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="opinion-card h-100" rounded="lg" variant="tonal">
          <div class="d-flex align-center mb-2">
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
            <v-icon color="yellow-darken-2" size="small">mdi-star</v-icon>
          </div>
          <p class="text-body-2 mb-2">Najlepszy tuning w mieście. Dziękuję!</p>
          <p class="text-caption text-secondary">Piotr S.</p>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-btn
        color="red-background"
        href="https://www.google.com/search?sca_esv=f85aee35ab456974&sxsrf=ANbL-n54xWLr4GVTO4jfDa8ns8zkzMulXQ:1771335098123&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x8mTr-TvS5VDfOLX48ipTDaGVu9ZRM0hd7NgewvPZLvGJeDTY112UyYk3wPPPcWgmjr4qpPBz9o5dGxeR5W6x8VURt6Af6AxZJkKqNbHxn6jsLCzJw%3D%3D&q=AUTO-SERWIS+Krzysztof+Gawrych+Opinie&sa=X&ved=2ahUKEwid47S60eCSAxUMExAIHb-vNkQQ0bkNegQIIxAF&biw=1528&bih=698&dpr=1.25"
        rel="noopener"
        target="_blank"
        variant="elevated"
      >
        Zobacz więcej opinii
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
  .opinion-card {
    padding: 16px;
  }
</style>
