<script setup>
  import { computed, onMounted } from 'vue'
  import { useAnnouncementsStore } from '@/stores/announcements'

  const store = useAnnouncementsStore()

  const recentCars = computed(() => store.cars.slice(0, 3))
  const allCarsNumber = computed(() => (store.cars).length)

  onMounted(() => {
    store.fetchCars()
  })
</script>

<template>
  <v-container v-if="recentCars.length > 0" class="py-6" fluid>
    <div class="text-center mb-4">
      <h2 class="text-h4 font-weight-bold text-secondary mb-2">
        Ogłoszenia aut
      </h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        Aktualnie dostępnych ogłoszeń: <span class="font-weight-bold text-red">{{ allCarsNumber }}</span>
      </p>
    </div>

    <div v-if="store.loadingCars" class="text-center py-5">
      <v-progress-circular color="primary" indeterminate />
    </div>

    <v-alert
      v-else-if="recentCars.length === 0"
      class="text-center mx-auto"
      max-width="600"
      type="info"
      variant="tonal"
    >
      Brak aktualnych ogłoszeń.
    </v-alert>

    <v-row v-else class="flex-nowrap flex-lg-wrap overflow-x-auto pb-4" dense>
      <v-col
        v-for="car in recentCars"
        :key="car.id"
        class="flex-shrink-0"
        cols="10"
        lg="4"
        md="5"
        sm="6"
      >
        <v-card class="h-100 d-flex flex-column" rounded="lg" variant="outlined">
          <v-img
            class="bg-grey-lighten-2"
            cover
            height="200"
            max-height="200"
            :src="car.images?.[0] || car.image || 'https://via.placeholder.com/300?text=Brak+zdjęcia'"
          />

          <v-card-title class="font-weight-bold text-secondary mt-2">
            {{ car.title }}
          </v-card-title>

          <v-card-subtitle class="opacity-100">
            <div class="d-flex flex-column ga-2 mb-4">
              <div>
                <span class="text-h5 font-weight-bold text-red">
                  {{ car.price?.toLocaleString() }} PLN
                </span>
              </div>

              <div class="d-flex flex-wrap align-center ga-2">
                <v-chip class="font-weight-bold text-white" color="white" size="default" variant="outlined">
                  Rok: {{ car.year }}
                </v-chip>

                <v-chip class="font-weight-bold text-white" color="white" size="default" variant="outlined">
                  Przebieg: {{ car.mileage.toLocaleString() }} km
                </v-chip>
              </div>

            </div>
          </v-card-subtitle>

          <!-- <v-card-text class="text-secondary text-truncate">
            {{ car.description }}
          </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mt-2">
      <v-btn color="red-background" size="large" to="/announcements">
        {{ 'Więcej ogłoszeń (+' + (allCarsNumber - recentCars.length) + ')' }}
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
