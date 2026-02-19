<script setup>
  import { computed, ref, watch } from 'vue'

  // 1. Props: Co otrzymujemy od rodzica?
  // - modelValue: steruje czy okno jest otwarte (v-model)
  // - loading: informacja czy trwa wysyłanie (żeby kręcić kółkiem na przycisku)
  const props = defineProps({
    modelValue: Boolean,
    loading: Boolean,
    car: {
      type: Object,
      default: null,
    },
  })

  // 2. Emits: Co wysyłamy do rodzica?
  // - update:modelValue: żeby zamknąć okno
  // - save: żeby wysłać dane formularza do AdminView
  const emit = defineEmits(['update:modelValue', 'save'])

  const newCar = ref({
    title: '',
    year: '',
    price: '',
    mileage: '',
    description: '',
    fuel: '',
    power: '',
    engineCapacity: '',
    gearbox: '',
    origin: '',
    drive: '',
    contactPhone: '',
    listingUrl: '',
  })
  const imageFiles = ref([])

  const dialog = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val),
  })

  const isEdit = computed(() => Boolean(props.car && props.car.id))

  const dialogTitle = computed(() => (isEdit.value ? 'Edytuj Samochód' : 'Dodaj Samochód'))
  const submitLabel = computed(() => (isEdit.value ? 'Zapisz zmiany' : 'Dodaj ogłoszenie'))

  const previewUrl = computed(() => {
    if (imageFiles.value.length > 0) {
      return URL.createObjectURL(imageFiles.value[0])
    }
    return props.car?.images?.[0] || props.car?.image || ''
  })

  function handleSave () {
    emit('save', {
      ...newCar.value,
      imageFiles: imageFiles.value,
    })
  }

  watch([dialog, () => props.car], ([isOpen]) => {
    if (isOpen && props.car) {
      newCar.value = {
        title: props.car.title || '',
        year: props.car.year || '',
        price: props.car.price || '',
        mileage: props.car.mileage || '',
        description: props.car.description || '',
        fuel: props.car.fuel || '',
        power: props.car.power || '',
        engineCapacity: props.car.engineCapacity || '',
        gearbox: props.car.gearbox || '',
        origin: props.car.origin || '',
        drive: props.car.drive || '',
        contactPhone: props.car.contactPhone || '',
        listingUrl: props.car.listingUrl || '',
      }
      imageFiles.value = []
      return
    }

    if (!isOpen) {
      newCar.value = {
        title: '',
        year: '',
        price: '',
        mileage: '',
        description: '',
        fuel: '',
        power: '',
        engineCapacity: '',
        gearbox: '',
        origin: '',
        drive: '',
        contactPhone: '',
        listingUrl: '',
      }
      imageFiles.value = []
    }
  })
</script>

<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title class="text-h5 pa-4">
        {{ dialogTitle }}
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="newCar.title"
          label="Marka i Model"
          variant="outlined"
        />

        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="newCar.year"
              label="Rocznik"
              type="number"
              variant="outlined"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="newCar.price"
              label="Cena (PLN)"
              type="number"
              variant="outlined"
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              v-model="newCar.mileage"
              label="km"
              type="number"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-textarea
          v-model="newCar.description"
          label="Opis pojazdu"
          rows="3"
          variant="outlined"
        />

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.fuel"
              label="Paliwo"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.power"
              label="Moc (KM)"
              type="number"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.engineCapacity"
              label="Pojemność silnika (cm3)"
              type="number"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.gearbox"
              label="Skrzynia biegow"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.origin"
              label="Pochodzenie"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.drive"
              label="Naped"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.contactPhone"
              label="Numer kontaktowy"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newCar.listingUrl"
              label="Dodatkowy link do ogloszenia"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-file-input
          v-model="imageFiles"
          accept="image/*"
          class="mb-2"
          label="Zdjecia (pierwsze jako glowne)"
          multiple
          prepend-icon="mdi-camera"
          show-size
          truncate-length="20"
          variant="outlined"
        />

        <v-img
          v-if="previewUrl"
          class="mb-4 rounded border"
          cover
          height="200"
          :src="previewUrl"
        />
      </v-card-text>

      <v-card-actions class="pa-4 pt-0">
        <v-spacer />
        <v-btn
          color="error"
          variant="text"
          @click="dialog = false"
        >
          Anuluj
        </v-btn>

        <v-btn
          color="success"
          :loading="loading"
          variant="elevated"
          @click="handleSave"
        >
          {{ submitLabel }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
