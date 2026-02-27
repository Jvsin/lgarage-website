<script setup>
  const props = defineProps({
    car: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['edit', 'delete'])

  function handleEdit () {
    emit('edit', props.car)
  }

  function handleDelete () {
    emit('delete', props.car)
  }
</script>

<template>
  <v-card class="h-100 d-flex flex-column">
    <v-img
      class="bg-grey-lighten-2"
      cover
      height="200"
      :src="car.images?.[0] || car.image || 'https://via.placeholder.com/300?text=Brak+zdjęcia'"
    />

    <v-card-title class="font-weight-bold">
      {{ car.title }}
    </v-card-title>

    <v-card-subtitle class="opacity-100 mb-2">
      <span class="text-primary font-weight-bold text-h6">
        {{ car.price?.toLocaleString() }} PLN
      </span>
      <span class="ms-2 text-medium-emphasis">({{ car.year }})</span>
    </v-card-subtitle>

    <v-card-text>
      {{ car.description?.substring(0, 100) }}
    </v-card-text>

    <v-spacer />

    <v-divider />
    <v-card-actions>
      <v-btn color="info" prepend-icon="mdi-pencil" variant="text" @click="handleEdit">
        Edytuj
      </v-btn>
      <v-spacer />
      <v-btn color="error" prepend-icon="mdi-delete" variant="text" @click="handleDelete">
        Usuń
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
