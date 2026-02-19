import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from 'firebase/storage'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db, storage } from '@/firebase'

type CarInput = {
  title: string
  year: string | number
  price: string | number
  mileage: string | number
  description: string
  fuel?: string
  power?: string | number
  engineCapacity?: string | number
  gearbox?: string
  origin?: string
  drive?: string
  contactPhone?: string
  listingUrl?: string
  imageFile?: File | null
}

type CarRecord = {
  id: string
  title?: string
  year?: number | string
  price?: number | string
  mileage: string | number
  description?: string
  fuel?: string
  power?: number | string
  engineCapacity?: number | string
  gearbox?: string
  origin?: string
  drive?: string
  contactPhone?: string
  listingUrl?: string
  image?: string
  imagePath?: string
}

function toNumberOrNull (value: string | number | null | undefined) {
  if (value === '' || value === null || value === undefined) {
    return null
  }

  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : parsed
}

async function uploadCarImage (imageFile: File) {
  const fileName = `cars/${Date.now()}_${imageFile.name}`
  const fileRef = storageRef(storage, fileName)
  const snapshot = await uploadBytes(fileRef, imageFile)
  const imageUrl = await getDownloadURL(snapshot.ref)

  return {
    imageUrl,
    imagePath: fileName,
  }
}

async function deleteCarImage (imagePath?: string, imageUrl?: string) {
  try {
    if (imagePath) {
      await deleteObject(storageRef(storage, imagePath))
      return
    }
    if (imageUrl) {
      await deleteObject(storageRef(storage, imageUrl))
    }
  } catch (error) {
    console.error('Blad usuwania zdjecia', error)
  }
}

export const useAnnouncementsStore = defineStore('announcements', () => {
  const cars = ref<CarRecord[]>([])
  const loadingCars = ref(false)
  const savingCar = ref(false)
  const deletingCar = ref(false)

  async function fetchCars () {
    loadingCars.value = true
    try {
      const q = query(collection(db, 'cars'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)

      cars.value = querySnapshot.docs.map(docSnapshot => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      })) as CarRecord[]
    } catch (error) {
      console.error(error)
    } finally {
      loadingCars.value = false
    }
  }

  async function addCar (formData: CarInput) {
    savingCar.value = true

    try {
      let imageUrl = ''
      let imagePath = ''

      if (formData.imageFile) {
        const uploadResult = await uploadCarImage(formData.imageFile)
        imageUrl = uploadResult.imageUrl
        imagePath = uploadResult.imagePath
      }

      const carData = {
        title: formData.title,
        year: toNumberOrNull(formData.year),
        price: toNumberOrNull(formData.price),
        mileage: toNumberOrNull(formData.mileage),
        description: formData.description,
        fuel: formData.fuel || '',
        power: toNumberOrNull(formData.power),
        engineCapacity: toNumberOrNull(formData.engineCapacity),
        gearbox: formData.gearbox || '',
        origin: formData.origin || '',
        drive: formData.drive || '',
        contactPhone: formData.contactPhone || '',
        listingUrl: formData.listingUrl || '',
        image: imageUrl,
        imagePath,
        createdAt: new Date(),
      }

      await addDoc(collection(db, 'cars'), carData)
      await fetchCars()
    } catch (error) {
      console.error('Blad zapisu', error)
      throw error
    } finally {
      savingCar.value = false
    }
  }

  async function updateCar (carId: string, formData: CarInput, existingCar?: CarRecord | null) {
    savingCar.value = true

    try {
      let imageUrl = existingCar?.image || ''
      let imagePath = existingCar?.imagePath || ''

      if (formData.imageFile) {
        await deleteCarImage(existingCar?.imagePath, existingCar?.image)
        const uploadResult = await uploadCarImage(formData.imageFile)
        imageUrl = uploadResult.imageUrl
        imagePath = uploadResult.imagePath
      }

      const updateData = {
        title: formData.title,
        year: toNumberOrNull(formData.year),
        price: toNumberOrNull(formData.price),
        mileage: toNumberOrNull(formData.mileage),
        description: formData.description,
        fuel: formData.fuel || '',
        power: toNumberOrNull(formData.power),
        engineCapacity: toNumberOrNull(formData.engineCapacity),
        gearbox: formData.gearbox || '',
        origin: formData.origin || '',
        drive: formData.drive || '',
        contactPhone: formData.contactPhone || '',
        listingUrl: formData.listingUrl || '',
        image: imageUrl,
        imagePath,
        updatedAt: new Date(),
      }

      await updateDoc(doc(db, 'cars', carId), updateData)
      await fetchCars()
    } catch (error) {
      console.error('Blad edycji', error)
      throw error
    } finally {
      savingCar.value = false
    }
  }

  async function deleteCar (car: CarRecord) {
    deletingCar.value = true

    try {
      await deleteCarImage(car.imagePath, car.image)
      await deleteDoc(doc(db, 'cars', car.id))
      cars.value = cars.value.filter(item => item.id !== car.id)
    } catch (error) {
      console.error('Blad usuwania', error)
      throw error
    } finally {
      deletingCar.value = false
    }
  }

  return {
    cars,
    loadingCars,
    savingCar,
    deletingCar,
    fetchCars,
    addCar,
    updateCar,
    deleteCar,
  }
})
