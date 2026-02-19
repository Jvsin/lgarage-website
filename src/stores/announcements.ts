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
  imageFiles?: File[] | null
}

type CarRecord = {
  id: string
  title?: string
  year?: number | string
  price?: number | string
  mileage?: string | number
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
  images?: string[]
  imagePath?: string
  imagePaths?: string[]
}

function toNumberOrNull (value: string | number | null | undefined) {
  if (value === '' || value === null || value === undefined) {
    return null
  }

  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : parsed
}

async function uploadCarImages (imageFiles: File[], carId: string) {
  const uploads = imageFiles.map(async (imageFile, index) => {
    const fileName = `cars/${carId}/${Date.now()}_${index}_${imageFile.name}`
    const fileRef = storageRef(storage, fileName)
    const snapshot = await uploadBytes(fileRef, imageFile)
    const imageUrl = await getDownloadURL(snapshot.ref)

    return {
      imageUrl,
      imagePath: fileName,
    }
  })

  const results = await Promise.all(uploads)

  return {
    imageUrls: results.map(result => result.imageUrl),
    imagePaths: results.map(result => result.imagePath),
  }
}

async function deleteCarImages (imagePaths?: string[], imageUrls?: string[]) {
  const paths = (imagePaths || []).filter(Boolean)
  const urls = (imageUrls || []).filter(Boolean)

  try {
    if (paths.length > 0) {
      await Promise.all(paths.map(path => deleteObject(storageRef(storage, path))))
      return
    }

    if (urls.length > 0) {
      await Promise.all(urls.map(url => deleteObject(storageRef(storage, url))))
    }
  } catch (error) {
    console.error('Blad usuwania zdjec', error)
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
        image: '',
        images: [],
        imagePath: '',
        imagePaths: [],
        createdAt: new Date(),
      }

      const docRef = await addDoc(collection(db, 'cars'), carData)
      const imageFiles = formData.imageFiles || []

      if (imageFiles.length > 0) {
        const uploadResult = await uploadCarImages(imageFiles, docRef.id)
        const mainImage = uploadResult.imageUrls[0] || ''

        await updateDoc(doc(db, 'cars', docRef.id), {
          image: mainImage,
          images: uploadResult.imageUrls,
          imagePath: uploadResult.imagePaths[0] || '',
          imagePaths: uploadResult.imagePaths,
        })
      }
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
      const imageFiles = formData.imageFiles || []
      let imageUrls = existingCar?.images || (existingCar?.image ? [existingCar.image] : [])
      let imagePaths = existingCar?.imagePaths || (existingCar?.imagePath ? [existingCar.imagePath] : [])

      if (imageFiles.length > 0) {
        await deleteCarImages(imagePaths, imageUrls)
        const uploadResult = await uploadCarImages(imageFiles, carId)
        imageUrls = uploadResult.imageUrls
        imagePaths = uploadResult.imagePaths
      }

      const mainImage = imageUrls[0] || ''

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
        image: mainImage,
        images: imageUrls,
        imagePath: imagePaths[0] || '',
        imagePaths,
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
      await deleteCarImages(car.imagePaths, car.images || (car.image ? [car.image] : []))
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
