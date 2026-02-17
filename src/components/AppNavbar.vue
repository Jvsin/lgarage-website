<template>
  <v-app-bar class="navbar" color="secondary" flat height="72">
    <div class="navbar__left">
      <v-btn class="text-none" color="button" href="/" variant="text">
        Gawrych Serwis&Detaling
      </v-btn>
    </div>
    <div class="navbar__center d-flex ga-2">
      <v-btn color="button" href="#sekcja-1" variant="text">Serwis</v-btn>
      <v-btn color="button" href="#sekcja-2" variant="outlined">Detaling</v-btn>
      <v-btn color="button" href="#sekcja-3" variant="elevated">Performence</v-btn>
    </div>
    <div class="navbar__right">
      <v-btn color="button" href="#ogloszenia" variant="text">Ogłoszenia</v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .navbar__content {
    width: 100%;
  }

  .navbar__left,
  .navbar__right {
    display: flex;
    min-width: 0;
  }

  .navbar__center {
    flex: 1;
    justify-content: center;
  }
</style>
