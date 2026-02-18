<script setup>
  import { useDisplay } from 'vuetify'
  const { xs, sm } = useDisplay()
</script>

<template>
  <v-app-bar class="navbar" color="primary" flat height="60">
    <div class="navbar__left ml-4">
      <!-- <v-btn
        class="text-bold"
        color="red-background"
        href="/"
        prepend-icon="mdi-garage"
        variant="elevated"
      >
        Gawrych Serwis&Detaling
      </v-btn> -->
      <v-btn>
        <v-icon color="red-background">mdi-home</v-icon>
      </v-btn>
    </div>
    <!-- <div class="navbar__left ml-4">
      <v-btn
        class="text-bold"
        color="red-background"
        href="/"
        variant="text"
      >
        <img alt="logo" src="@/assets/logo_firm.png" style="height: 40px;">
      </v-btn>
    </div> -->
    <template v-if="!(sm || xs)">
      <div class="navbar__right d-flex ga-2 mr-4">
        <v-btn color="red-background" href="#sekcja-1" variant="elevated">Serwis</v-btn>
        <v-btn color="red-background" href="#sekcja-2" variant="elevated">Detaling</v-btn>
        <v-btn color="red-background" href="#sekcja-3" variant="elevated">Performence</v-btn>
        <v-btn color="red-background" href="#ogloszenia" variant="elevated">Ogłoszenia</v-btn>
      </div>
      <!-- <div class="navbar__right">
      </div> -->
    </template>
    <template v-else>
      <div class="navbar__right mr-4">
        <v-menu location="bottom end">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              color="red-background"
              icon="mdi-menu"
              variant="elevated"
            />
          </template>
          <v-list density="comfortable">
            <v-list-item href="#sekcja-1" title="Serwis" />
            <v-list-item href="#sekcja-2" title="Detaling" />
            <v-list-item href="#sekcja-3" title="Performence" />
            <v-list-item href="#ogloszenia" title="Ogłoszenia" />
          </v-list>
        </v-menu>
      </div>
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
