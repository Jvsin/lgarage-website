<script setup>
  import { onMounted, ref } from 'vue'
  import CarDetailsDialog from '@/components/CarDetailsDialog.vue'
  import { useAnnouncementsStore } from '@/stores/announcements'

  const store = useAnnouncementsStore()

  const isDialogOpen = ref(false)
  const selectedCar = ref(null)

  function openCarDetails (car) {
    selectedCar.value = car
    isDialogOpen.value = true
  }

  onMounted(() => {
    store.fetchCars()
  })
</script>

<template>
  <v-container class="py-8" fluid>
    <v-btn class="mb-4 text-secondary" prepend-icon="mdi-arrow-left" to="/" variant="text">
      Wróć na stronę główną
    </v-btn>

    <h1 class="text-h3 font-weight-bold text-secondary mb-8">Wszystkie ogłoszenia</h1>

    <div v-if="store.loadingCars" class="text-center py-10">
      <v-progress-circular color="primary" indeterminate size="64" />
    </div>

    <v-alert v-else-if="store.cars.length === 0" type="info" variant="tonal">
      Aktualnie brak pojazdów na sprzedaż.
    </v-alert>

    <v-row v-else>
      <v-col
        v-for="car in store.cars"
        :key="car.id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card class="h-100 d-flex flex-column" rounded="lg" variant="outlined">
          <v-img
            class="bg-grey-lighten-2"
            cover
            height="250"
            :src="car.images?.[0] || car.image || 'https://via.placeholder.com/300?text=Brak+zdjęcia'"
          />

          <v-card-title class="font-weight-bold text-secondary text-h5 mt-2">
            {{ car.title }}
          </v-card-title>

          <v-card-subtitle class="opacity-100 mb-2">
            <div class="mb-2">
              <v-row align="center">
                <v-col cols="12" sm="4">
                  <span class="text-h4 font-weight-bold text-red">
                    {{ car.price?.toLocaleString() }} PLN
                  </span>
                </v-col>

                <v-col class="d-flex align-center justify-start justify-sm-end flex-wrap ga-2" cols="12" sm="8">
                  <v-chip class="font-weight-bold text-white" color="white" variant="outlined">
                    Rok: {{ car.year }}
                  </v-chip>

                  <v-chip class="font-weight-bold text-white" color="white" variant="outlined">
                    Przebieg: {{ car.mileage.toLocaleString() }} km
                  </v-chip>
                </v-col>
              </v-row>
            </div>
          </v-card-subtitle>

          <v-card-actions class="px-4 pb-4">
            <v-btn
              block
              color="secondary"
              prepend-icon="mdi-information-outline"
              variant="outlined"
              @click="openCarDetails(car)"
            >
              Zobacz szczegóły
            </v-btn>

          </v-card-actions>
          <!-- <v-card-text class="text-secondary text-body-1">
            {{ car.description }}
          </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>

    <CarDetailsDialog
      v-model="isDialogOpen"
      :car="selectedCar"
    />
  </v-container>
</template>
