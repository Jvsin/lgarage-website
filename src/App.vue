<template>
  <v-app>
    <v-app-bar class="navbar" color="surface" flat height="72">
      <v-container class="d-flex align-center">
        <v-btn class="text-none" color="secondary" href="/" variant="text">
          Gawrych Serwis&Detaling
        </v-btn>
        <v-spacer />
        <div class="d-flex ga-2">
          <v-btn color="secondary" href="#sekcja-1" variant="text">Sekcja 1</v-btn>
          <v-btn color="secondary" href="#sekcja-2" variant="text">Sekcja 2</v-btn>
          <v-btn color="secondary" href="#sekcja-3" variant="text">Sekcja 3</v-btn>
        </div>
        <v-spacer />
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app class="footer" color="surface">
      <v-container class="py-6 d-flex flex-column flex-md-row align-center justify-space-between">
        <div>
          <div class="text-h6 font-weight-bold">Gawrych Serwis&Detaling</div>
          <div class="text-body-2">Warsztat samochodowy i detailing</div>
        </div>
        <div class="text-body-2 mt-4 mt-md-0">
          <div>Telefon: 000 000 000</div>
          <div>Email: kontakt@lgarage.pl</div>
          <div>Godziny: Pon-Pt 08:00-17:00</div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
