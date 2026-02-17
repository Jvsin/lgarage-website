<script setup>
  import { useDisplay } from 'vuetify'
  const { sm } = useDisplay()
</script>

<template>
  <v-app-bar class="navbar" color="primary" flat height="60">
    <div class="navbar__left ml-4">
      <v-btn
        class="text-bold"
        color="red-background"
        href="/"
        prepend-icon="mdi-garage"
        variant="outlined"
      >
        Gawrych Serwis&Detaling
      </v-btn>
    </div>
    <template v-if="!sm">
      <div class="navbar__right d-flex ga-2 mr-4">
        <v-btn color="red-background" href="#sekcja-1" variant="elevated">Serwis</v-btn>
        <v-btn color="red-background" href="#sekcja-2" variant="elevated">Detaling</v-btn>
        <v-btn color="red-background" href="#sekcja-3" variant="elevated">Performence</v-btn>
        <v-btn color="red-background" href="#ogloszenia" variant="elevated">Ogłoszenia</v-btn>
      </div>
      <!-- <div class="navbar__right">
      </div> -->
    </template>
  </v-app-bar>
</template>

<style scoped>
  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

  .navbar__right {
    margin-left: auto;
  }
</style>
