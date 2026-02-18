<script setup>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  // import { auth } from '@/firebase'

  const email = ref('')
  const password = ref('')
  const errorMsg = ref('')
  const router = useRouter()
  const loading = ref(false)

  async function handleLogin () {
    loading.value = true
    errorMsg.value = ''

    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      router.push('/admin')
    } catch (error) {
      console.log(error)
      errorMsg.value = 'Błędny email lub hasło.'
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-card class="pa-6" elevation="4" rounded="lg" width="400">
      <h2 class="text-h5 text-center mb-6">Panel Właściciela</h2>
      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Email"
          prepend-inner-icon="mdi-email"
          variant="outlined"
        />

        <v-text-field
          v-model="password"
          label="Hasło"
          prepend-inner-icon="mdi-lock"
          type="password"
          variant="outlined"
        />

        <p v-if="errorMsg" class="text-error mb-4 text-center">{{ errorMsg }}</p>

        <v-btn
          block
          color="red-background"
          :loading="loading"
          size="large"
          type="submit"
        >
          Zaloguj
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
