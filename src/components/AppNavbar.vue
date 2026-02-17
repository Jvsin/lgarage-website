<template>
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
</template>

<style scoped>
  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
