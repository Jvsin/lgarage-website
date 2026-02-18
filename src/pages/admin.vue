<script setup>
  import { getAuth, signOut } from 'firebase/auth'
  import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
  import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage'
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import AddCarDialog from '@/components/AddCarDialog.vue'
  import { db, storage } from '@/firebase'

  const uploading = ref(false)
  const router = useRouter()
  const dialogOpen = ref(false)

  const cars = ref([])
  const loadingCars = ref(true)

  async function fetchCars () {
    loadingCars.value = true
    try {
      const q = query(collection(db, 'cars'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)

      cars.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (error) {
      console.error(error)
    } finally {
      loadingCars.value = false
    }
  }

  onMounted(() => {
    fetchCars()
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
    uploading.value = true

    try {
      let imageUrl = ''
      if (formData.imageFile) {
        const fileName = `cars/${Date.now()}_${formData.imageFile.name}`
        const fileRef = storageRef(storage, fileName)
        const snapshot = await uploadBytes(fileRef, formData.imageFile)
        imageUrl = await getDownloadURL(snapshot.ref)
      }

      const carData = {
        title: formData.title,
        year: formData.year,
        price: formData.price,
        description: formData.description,
        image: imageUrl,
        createdAt: new Date(),
      }

      const docRef = await addDoc(collection(db, 'cars'), carData)
      console.log(docRef.id)
      console.log('Zapisuję w bazie:', carData)

      await fetchCars()
      dialogOpen.value = false
    } catch (error) {
      console.error('Bład zapisu', error)
    } finally {
      uploading.value = false
    }
  }

  function changeDialogFlag () {
    dialogOpen.value = !dialogOpen.value
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
          @click="changeDialogFlag"
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
            <v-btn color="info" prepend-icon="mdi-pencil" variant="text">
              Edytuj
            </v-btn>
            <v-spacer />
            <v-btn color="error" prepend-icon="mdi-delete" variant="text">
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
      :loading="uploading"
      @save="handleSaveCar"
    />

  </v-container>
</template>
