<script setup>
  import { getAuth, signOut } from 'firebase/auth'
  import { computed, onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import AddCarDialog from '@/components/AddCarDialog.vue'
  import { useAnnouncementsStore } from '@/stores/announcements'

  const router = useRouter()
  const dialogOpen = ref(false)
  const editingCar = ref(null)
  const announcementsStore = useAnnouncementsStore()

  const cars = computed(() => announcementsStore.cars)
  const loadingCars = computed(() => announcementsStore.loadingCars)
  const uploading = computed(() => announcementsStore.savingCar)

  async function fetchCars () {
    await announcementsStore.fetchCars()
  }

  onMounted(() => {
    fetchCars()
  })

  watch(dialogOpen, value => {
    if (!value) {
      editingCar.value = null
    }
  })

  async function handleLogout () {
    await signOut(getAuth())
    router.push('/')
  }

  // async function uploadImage () {
  //   if (!imageFile.value) return null

  //   try {
  //     uploading.value = true
  //     const fileName = `cars/${Date.now()}_${imageFile.value.name}`
  //     const fileRef = storageRef(storage, fileName)

  //     const snapshot = await uploadBytes(fileRef, imageFile.value)
  //     const downloadUrl = await getDownloadURL(snapshot.ref)
  //     return downloadUrl
  //   } catch (error) {
  //     console.error('"Błąd wysyłania zdjęcia:"', error)
  //     return null
  //   } finally {
  //     uploading.value = false
  //   }
  // }

  async function handleSaveCar (formData) {
    try {
      await (editingCar.value
        ? announcementsStore.updateCar(editingCar.value.id, formData, editingCar.value)
        : announcementsStore.addCar(formData))
      dialogOpen.value = false
      editingCar.value = null
    } catch (error) {
      console.error('Blad zapisu', error)
    }
  }

  function openCreateDialog () {
    editingCar.value = null
    dialogOpen.value = true
  }

  function openEditDialog (car) {
    editingCar.value = car
    dialogOpen.value = true
  }

  async function handleDeleteCar (car) {
    const confirmDelete = window.confirm('Czy na pewno chcesz usunac to ogloszenie?')
    if (!confirmDelete) return

    try {
      await announcementsStore.deleteCar(car)
    } catch (error) {
      console.error('Blad usuwania', error)
    }
  }
</script>

<template>
  <v-container>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">
        Zarządzanie Ofertami
      </h1>
      <div class="d-flex align-center ga-3 flex-wrap">
        <v-btn
          color="red-background"
          prepend-icon="mdi-plus"
          size="large"
          @click="openCreateDialog"
        >
          Dodaj ogłoszenie
        </v-btn>

        <v-spacer />
        <v-btn
          color="secondary"
          prepend-icon="mdi-logout"
          variant="outlined"
          @click="handleLogout"
        >
          Wyloguj się
        </v-btn>

      </div>
      <v-divider class="mt-4" />
    </div>

    <div v-if="loadingCars" class="text-center py-5">
      <v-progress-circular color="primary" indeterminate />
    </div>

    <v-alert v-else-if="cars.length === 0" type="info" variant="tonal">
      Nie masz jeszcze żadnych ogłoszeń.
    </v-alert>

    <v-row v-else>
      <v-col
        v-for="car in cars"
        :key="car.id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card class="h-100 d-flex flex-column">
          <v-img
            class="bg-grey-lighten-2"
            cover
            height="200"
            :src="car.image || 'https://via.placeholder.com/300?text=Brak+zdjęcia'"
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
            {{ car.description?.substring(0, 100) }}...
          </v-card-text>

          <v-spacer />

          <v-divider />
          <v-card-actions>
            <v-btn
              color="info"
              prepend-icon="mdi-pencil"
              variant="text"
              @click="openEditDialog(car)"
            >
              Edytuj
            </v-btn>
            <v-spacer />
            <v-btn
              color="error"
              prepend-icon="mdi-delete"
              variant="text"
              @click="handleDeleteCar(car)"
            >
              Usuń
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col cols="12">
        <v-alert type="info" variant="tonal">Tutaj pojawi się lista Twoich aut do edycji/usunięcia.</v-alert>
      </v-col>
    </v-row> -->

    <AddCarDialog
      v-model="dialogOpen"
      :car="editingCar"
      :loading="uploading"
      @save="handleSaveCar"
    />

  </v-container>
</template>
