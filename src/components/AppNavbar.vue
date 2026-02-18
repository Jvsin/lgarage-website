<script setup>
  // Script jest teraz pusty, bo usunęliśmy logikę xs/sm
</script>

<template>
  <v-app-bar class="navbar navbar-border" color="primary" flat height="60">
    <div class="navbar__left ml-4">
      <v-menu location="bottom start" transition="scale-transition">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            color="red-background"
            icon="mdi-menu"
            variant="elevated"
          />
        </template>

        <v-list bg-color="background" density="comfortable" elevation="4">
          <v-list-item href="/" link>
            <v-list-item-title class="text-secondary font-weight-bold">Strona Główna</v-list-item-title>
          </v-list-item>

          <v-divider class="my-2 border-opacity-25" />

          <v-list-item href="#sekcja-1" link>
            <v-list-item-title class="text-secondary">Serwis</v-list-item-title>
          </v-list-item>

          <v-list-item href="#sekcja-2" link>
            <v-list-item-title class="text-secondary">Detaling</v-list-item-title>
          </v-list-item>

          <v-list-item href="#sekcja-3" link>
            <v-list-item-title class="text-secondary">Performence</v-list-item-title>
          </v-list-item>

          <v-list-item href="#ogloszenia" link>
            <v-list-item-title class="text-secondary">Ogłoszenia</v-list-item-title>
          </v-list-item>

          <v-divider class="my-2 border-opacity-25" />

          <v-list-item href="#kontakt" link>
            <v-list-item-title class="text-red-background font-weight-bold">Kontakt</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-spacer />

    <div class="navbar__right mr-4 d-flex align-center ga-2">
      <v-btn
        aria-label="Facebook"
        color="red-background"
        href="https://www.facebook.com/GawrychSerwis?locale=pl_PL"
        icon="mdi-facebook"
        target="_blank"
        variant="elevated"
      />

      <v-btn
        aria-label="Instagram"
        color="red-background"
        href="https://www.instagram.com/gawrych_serwis_detailing"
        icon="mdi-instagram"
        target="_blank"
        variant="elevated"
      />
    </div>
  </v-app-bar>
</template>

<style scoped>
  .navbar-border {
    /* Czerwony pasek na dole */
    border-bottom: 2px solid rgb(var(--v-theme-red-background)) !important;
  }

  .navbar__left,
  .navbar__right {
    display: flex;
    min-width: 0;
  }
</style>
