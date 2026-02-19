<script setup>
  import { computed } from 'vue'

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
      <v-toolbar color="transparent" flat>
        <v-toolbar-title class="text-h5 font-weight-bold text-white">
          {{ car.title }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="text-white" icon="mdi-close" variant="text" @click="dialog = false" />
      </v-toolbar>

      <v-img
        class="bg-grey-lighten-2"
        cover
        height="400"
        :src="car.image || 'https://via.placeholder.com/800x400?text=Brak+zdjęcia'"
      />

      <v-card-text class="pt-6">
        <div class="d-flex align-center mb-6">
          <span class="text-h4 font-weight-bold text-red">
            {{ car.price?.toLocaleString() }} PLN
          </span>
          <v-chip class="ml-4 font-weight-bold text-white" color="white" variant="outlined">
            Rok: {{ car.year }}
          </v-chip>
        </div>

        <v-divider class="mb-4 border-opacity-100" />

        <h3 class="text-h6 font-weight-bold mb-2">Opis pojazdu:</h3>
        <p class="text-body-1" style="white-space: pre-wrap;">
          {{ car.description || 'Brak opisu dla tego pojazdu.' }}
        </p>
      </v-card-text>

      <v-card-actions class="pa-4 bg-black">
        <v-spacer />
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
