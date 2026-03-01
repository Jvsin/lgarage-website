<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const showFab = computed(() => (route.path !== '/') && (route.path !== '/contact'))
</script>

<template>
  <v-menu
    v-if="showFab"
    location="top end"
    origin="bottom right"
    transition="scale-transition"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        class="ma-4 ma-md-6"
        color="#E53935"
        elevation="8"
        icon="mdi-phone-message"
        location="bottom right"
        position="fixed"
        size="large"
        style="z-index: 9999;"
      />
    </template>

    <v-card class="mb-4 rounded-lg elevation-8" min-width="280">
      <v-list bg-color="grey-darken-4" class="text-white">
        <v-list-item
          prepend-icon="mdi-card-account-phone"
          title="Kontakt"
        />
      </v-list>

      <v-divider />

      <v-list class="pa-2">
        <v-list-item
          density="compact"
          href="tel:+48730995828"
          prepend-icon="mdi-phone"
          title="+48 730 995 828"
        />
        <v-list-item
          density="compact"
          href="tel:+48796073929"
          prepend-icon="mdi-phone"
          title="+48 796 073 929"
        />
        <v-list-item
          density="compact"
          href="mailto:lukisgaw@gmail.com"
          prepend-icon="mdi-email"
          title="lukisgaw@gmail.com"
        />
      </v-list>

      <v-card-actions class="px-4 pb-4 pt-0">
        <v-btn
          block
          color="grey-darken-4"
          to="/contact"
          variant="elevated"
        >
          Pełne dane i dojazd
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
