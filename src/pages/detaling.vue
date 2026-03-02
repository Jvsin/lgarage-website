<script setup>
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify'
  import desktopBg from '@/assets/detailing/detailing_background.png'
  import mobileBg from '@/assets/detailing/detailing_background_mobile.png'
  import CeramicPro from '@/components/detaling/CeramicPro.vue'
  import PpfKavaca from '@/components/detaling/PpfKavaca.vue'

  const { mdAndDown } = useDisplay()
  const selectedService = ref(null)
</script>

<template>
  <div class="detailing-page">
    <v-container class="pa-0 px-md-4" fluid>
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            class="elevation-4 d-flex align-end text-white rounded-0 rounded-md-lg"
            cover
            gradient="to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.95) 100%"
            :height="mdAndDown ? 500 : 650"
            :src="mdAndDown ? mobileBg : desktopBg"
          >
            <div class="w-100 text-center px-4 px-md-16 pb-6 pb-md-8">
              <h1 class="font-weight-bold text-h6 text-md-h4 w-100 mx-auto" style="line-height: 1.4; text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
                Jako jedyna firma w regionie posiadamy oficjalną akredytację na aplikację powłok ceramicznych
                <span class="font-weight-bold text-ceramic-pro-background">Ceramic Pro</span> – światowej, topowej marki w branży zabezpieczeń lakieru –
                oraz folii ochronnych<span class="font-weight-bold text-ceramic-pro-background"> PPF Kavaca.</span>
              </h1>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-8" fluid>
      <v-row class="justify-center">
        <v-col class="px-4 px-md-4" cols="12" md="6" sm="6">
          <v-card
            class="elevation-4 rounded-lg bg-grey-darken-4 text-white text-center service-card"
            :class="{ 'selected-card': selectedService === 'ceramic' }"
            ripple
            @click="selectedService = 'ceramic'"
          >
            <v-img
              class="d-flex align-end pa-4"
              cover
              gradient="to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%"
              height="300"
              src="@/assets/detailing/detailing_background2.jpeg"
            >
              <h2 class="text-h5 font-weight-bold w-100">POWŁOKI CERAMICZNE<span class="font-weight-bold text-ceramic-pro-background"> Ceramic Pro</span></h2>
            </v-img>
          </v-card>
        </v-col>

        <v-col class="px-4 px-md-4" cols="12" md="6" sm="6">
          <v-card
            class="elevation-4 rounded-lg bg-grey-darken-4 text-white text-center service-card"
            :class="{ 'selected-card': selectedService === 'kavaca' }"
            ripple
            @click="selectedService = 'kavaca'"
          >
            <v-img
              class="d-flex align-end pa-4"
              cover
              gradient="to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%"
              height="300"
              src="@/assets/detailing/ppf_background.jpeg"
            >
              <h2 class="text-h5 font-weight-bold w-100">FOLIE OCHRONNE <span class="font-weight-bold text-ceramic-pro-background">PPF Kavaca</span></h2>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <div v-if="selectedService" class="mt-8">
        <CeramicPro v-if="selectedService === 'ceramic'" />
        <PpfKavaca v-else-if="selectedService === 'kavaca'" />
      </div>
    </v-container>

  </div>
</template>

<style scoped>
.service-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.service-card:hover {
  transform: translateY(-5px) scale(1.03);
}
.selected-card {
  border: 4px solid #B3005F;
}
</style>
