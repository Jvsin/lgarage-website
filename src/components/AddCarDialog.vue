<script setup>
  import { computed, ref, watch } from 'vue'

  // 1. Props: Co otrzymujemy od rodzica?
  // - modelValue: steruje czy okno jest otwarte (v-model)
  // - loading: informacja czy trwa wysyłanie (żeby kręcić kółkiem na przycisku)
  const props = defineProps({
    modelValue: Boolean,
    loading: Boolean,
  })

  // 2. Emits: Co wysyłamy do rodzica?
  // - update:modelValue: żeby zamknąć okno
  // - save: żeby wysłać dane formularza do AdminView
  const emit = defineEmits(['update:modelValue', 'save'])

  const newCar = ref({
    title: '',
    year: '',
    price: '',
    description: '',
  })
  const imageFile = ref(null)

  const dialog = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val),
  })

  const previewUrl = computed(() => {
    if (imageFile.value) {
      return URL.createObjectURL(imageFile.value)
    }
    return ''
  })

  function handleSave () {
    emit('save', {
      ...newCar.value,
      imageFile: imageFile.value,
    })
  }

  watch(dialog, val => {
    if (!val) {
      newCar.value = { title: '', year: '', price: '', description: '' }
      imageFile.value = null
    }
  })
</script>

<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title class="text-h5 pa-4">
        Dodaj Samochód
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="newCar.title"
          label="Marka i Model"
          variant="outlined"
        />

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="newCar.year"
              label="Rocznik"
              type="number"
              variant="outlined"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="newCar.price"
              label="Cena (PLN)"
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

        <v-file-input
          v-model="imageFile"
          accept="image/*"
          class="mb-2"
          label="Zdjęcie główne"
          prepend-icon="mdi-camera"
          show-size
          truncate-length="20"
          variant="outlined"
        />

        <v-img
          v-if="imageFile"
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
          Zapisz Ogłoszenie
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
