<template>
  <v-footer class="footer" color="red-background">
    <v-container class="py-6 d-flex flex-column flex-md-row align-center justify-space-between">
      <div class="text-center">
        <div class="text-h6 font-weight-bold">Gawrych Serwis&Detaling</div>
        <div class="text-body-2">Warsztat samochodowy i detailing</div>
        <div class="mt-2 d-flex ga-2 justify-center">
          <v-btn
            aria-label="Facebook"
            icon="mdi-facebook"
            size="small"
            variant="text"
          />
          <v-btn
            aria-label="Instagram"
            icon="mdi-instagram"
            size="small"
            variant="text"
          />
        </div>
      </div>
      <div class="text-body-2 mt-4 mt-md-0 text-center">
        <div>Telefon: 000 000 000</div>
        <div>Email: kontakt@lgarage.pl</div>
        <div>Godziny: Pon-Pt 08:00-17:00</div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
