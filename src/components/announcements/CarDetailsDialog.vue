<script setup>
  import { computed, ref, watch } from 'vue'

  const props = defineProps({
    modelValue: Boolean,
    car: {
      type: Object,
      default: () => ({}),
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const dialog = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val),
  })

  const imageIndex = ref(0)

  const imageList = computed(() => {
    if (!props.car) return []
    if (props.car.images?.length) return props.car.images
    if (props.car.image) return [props.car.image]
    return ['https://via.placeholder.com/800x400?text=Brak+zdjęcia']
  })

  const activeImage = computed(() => imageList.value[imageIndex.value] || imageList.value[0])

  const hasMultipleImages = computed(() => imageList.value.length > 1)

  function showNextImage () {
    if (!hasMultipleImages.value) return
    imageIndex.value = (imageIndex.value + 1) % imageList.value.length
  }

  function showPreviousImage () {
    if (!hasMultipleImages.value) return
    imageIndex.value = (imageIndex.value - 1 + imageList.value.length) % imageList.value.length
  }

  watch(() => props.car, () => {
    imageIndex.value = 0
  })
</script>

<template>
  <v-dialog v-model="dialog" max-width="800">
    <v-card
      v-if="car"
      class="text-white"
      color="black"
      rounded="lg"
      theme="dark"
    >
      <!-- <v-toolbar color="transparent" flat>
        <v-toolbar-title class="text-h5 font-weight-bold text-white">
          {{ car.title }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="text-white" icon="mdi-close" variant="text" @click="dialog = false" />
      </v-toolbar> -->

      <v-img
        class="bg-grey-lighten-2 align-end"
        cover
        height="400"
        :src="activeImage"
      >
        <v-btn
          v-if="hasMultipleImages"
          class="position-absolute"
          color="black"
          icon="mdi-chevron-left"
          size="small"
          style="left: 12px; top: 50%; transform: translateY(-50%);"
          variant="flat"
          @click="showPreviousImage"
        />
        <v-btn
          v-if="hasMultipleImages"
          class="position-absolute"
          color="black"
          icon="mdi-chevron-right"
          size="small"
          style="right: 12px; top: 50%; transform: translateY(-50%);"
          variant="flat"
          @click="showNextImage"
        />
        <div class="w-100 px-4 pb-4 pt-15" style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);">
          <h2 class="text-h3 font-weight-bold text-white">
            {{ car.title }}
          </h2>
        </div>
      </v-img>

      <v-card-text class="pt-6">
        <div class="mb-6">
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

        <v-divider class="my-2 border-opacity-50" />

        <h3 class="text-h6 font-weight-bold my-2">Szczegóły:</h3>
        <v-row class="text-body-1">
          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-gas-station" />
            <div><span class="text-grey-lighten-1">Paliwo:</span> <strong>{{ car.fuel || '-' }}</strong></div>
          </v-col>

          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-engine-outline" />
            <div><span class="text-grey-lighten-1">Moc:</span> <strong>{{ car.power ? car.power + ' KM' : '-' }}</strong></div>
          </v-col>

          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-car-coolant-level" />
            <div><span class="text-grey-lighten-1">Pojemność silnika:</span> <strong>{{ car.engineCapacity ? car.engineCapacity + ' cm3' : '-' }}</strong></div>
          </v-col>

          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-car-shift-pattern" />
            <div><span class="text-grey-lighten-1">Skrzynia biegów:</span> <strong>{{ car.gearbox || '-' }}</strong></div>
          </v-col>

          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-car-cog" />
            <div><span class="text-grey-lighten-1">Napęd:</span> <strong>{{ car.drive || '-' }}</strong></div>
          </v-col>
        </v-row>

        <v-divider class="my-2 border-opacity-50" />

        <h3 class="text-h6 font-weight-bold my-2">Informacje:</h3>
        <v-row class="text-body-1">
          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-earth" />
            <div><span class="text-grey-lighten-1">Pochodzenie:</span> <strong>{{ car.origin || '-' }}</strong></div>
          </v-col>

          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-phone" />
            <div><span class="text-grey-lighten-1">Kontakt:</span> <strong>{{ car.contactPhone || '-' }}</strong></div>
          </v-col>

          <v-col class="d-flex align-center text-truncate" cols="12" sm="6">
            <v-icon class="mr-3" color="red" icon="mdi-link-variant" />
            <div class="text-truncate">
              <span class="text-grey-lighten-1">Ogłoszenie: </span>
              <span v-if="car.listingUrl">
                <a class="text-white font-weight-bold" :href="car.listingUrl.startsWith('http') ? car.listingUrl : `https://${car.listingUrl}`" rel="noopener" target="_blank">
                  Otwórz link
                </a>
              </span>
              <strong v-else>-</strong>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-3 border-opacity-50" />

        <h3 class="text-h6 font-weight-bold mb-2">Opis pojazdu:</h3>
        <p class="text-body-1 text-grey-lighten-2" style="white-space: pre-wrap; line-height: 1.6;">
          {{ car.description || 'Brak opisu dla tego pojazdu.' }}
        </p>
      </v-card-text>

      <v-card-actions class="pa-4 bg-black">
        <v-spacer />
        <v-btn
          v-if="car.contactPhone"
          class="mr-2"
          color="white"
          :href="`tel:${car.contactPhone}`"
          prepend-icon="mdi-phone"
          variant="outlined"
        >
          Zadzwoń
        </v-btn>

        <v-btn
          color="red-background"
          variant="elevated"
          @click="dialog = false"
        >
          Zamknij
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
