<script setup>
  import { getAuth, signOut } from 'firebase/auth'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const dialog = ref(false)

  const newCar = ref({
    title: '',
    price: '',
    year: '',
    description: '',
  })

  async function handleLogout () {
    await signOut(getAuth())
    router.push('/login')
  }

  function addCar () {
    // TUTAJ BĘDZIE LOGIKA WYSYŁANIA DANYCH DO BACKENDU (BUN) LUB FIREBASE
    console.log('Dodaję auto:', newCar.value)
    dialog.value = false
  }
</script>

<template>
  <v-container>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1>Zarządzanie Ofertami</h1>
      <v-btn color="secondary" variant="outlined" @click="handleLogout">
        Wyloguj się
      </v-btn>
    </div>

    <v-card class="pa-8 text-center border-dashed mb-8" color="primary" variant="outlined">
      <v-icon class="mb-4" size="64">mdi-car-convertible</v-icon>
      <h3>Dodaj nowe ogłoszenie</h3>
      <v-btn class="mt-4" color="primary" @click="dialog = true">
        Rozpocznij
      </v-btn>
    </v-card>

    <v-row>
      <v-col cols="12">
        <v-alert type="info" variant="tonal">Tutaj pojawi się lista Twoich aut do edycji/usunięcia.</v-alert>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Dodaj Samochód</v-card-title>
        <v-card-text>
          <v-text-field v-model="newCar.title" label="Marka i Model" variant="outlined" />
          <v-text-field v-model="newCar.year" label="Rocznik" type="number" variant="outlined" />
          <v-text-field v-model="newCar.price" label="Cena (PLN)" type="number" variant="outlined" />
          <v-textarea v-model="newCar.description" label="Opis pojazdu" variant="outlined" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="error" text @click="dialog = false">Anuluj</v-btn>
          <v-btn color="success" variant="elevated" @click="addCar">Zapisz</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>
