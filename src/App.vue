<template>
  <v-app>
    <AppNavbar />

    <v-main>
      <router-view />
    </v-main>

    <FloatingContact />

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import AppFooter from '@/components/AppFooter.vue'
  import AppNavbar from '@/components/AppNavbar.vue'
  import FloatingContact from '@/components/FloatingContact.vue'
</script>
