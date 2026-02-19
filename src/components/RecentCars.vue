<script setup>
  import { computed, onMounted } from 'vue'
  import { useAnnouncementsStore } from '@/stores/announcements'

  const store = useAnnouncementsStore()

  const recentCars = computed(() => store.cars.slice(0, 3))

  onMounted(() => {
    store.fetchCars()
  })
</script>

<template>
  <v-container v-if="recentCars.length > 0" class="py-6" fluid>
    <h2 class="text-h4 font-weight-bold text-secondary text-center mb-6">
      Ogłoszenia aut
    </h2>

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

    <v-row v-else class="justify-center" dense>
      <v-col
        v-for="car in recentCars"
        :key="car.id"
        cols="12"
        md="4"
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

          <v-card-subtitle class="opacity-100 mb-2">
            <div class="mb-6">
              <v-row align="center">
                <v-col cols="12" sm="4">
                  <span class="text-h5 font-weight-bold text-red">
                    {{ car.price?.toLocaleString() }} PLN
                  </span>
                </v-col>

                <v-col class="d-flex align-center justify-start justify-sm-end flex-wrap ga-2" cols="12" sm="8">
                  <v-chip class="font-weight-bold text-white" color="white" size="default" variant="outlined">
                    Rok: {{ car.year }}
                  </v-chip>

                  <v-chip class="font-weight-bold text-white" color="white" size="default" variant="outlined">
                    Przebieg: {{ car.mileage.toLocaleString() }} km
                  </v-chip>
                </v-col>
              </v-row>
            </div>
          </v-card-subtitle>

          <!-- <v-card-text class="text-secondary text-truncate">
            {{ car.description }}
          </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mt-8">
      <v-btn color="red-background" size="large" to="/announcements">
        Zobacz wszystkie oferty
      </v-btn>
    </div>
  </v-container>
</template>
