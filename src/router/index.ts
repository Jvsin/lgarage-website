/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// --- NOWA CZĘŚĆ: ZABEZPIECZENIE (GUARD) ---

// Funkcja pomocnicza: Czeka na sprawdzenie, czy Firebase załadował użytkownika
function getCurrentUser () {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

router.beforeEach(async (to, from, next) => {
  // Sprawdzamy, czy użytkownik próbuje wejść na stronę admina
  // Zakładamy, że wszystkie pliki w src/pages/admin/... są chronione
  const requiresAuth = to.path.startsWith('/admin')

  if (requiresAuth) {
    const currentUser = await getCurrentUser()
    if (currentUser) {
      // Jest zalogowany -> wpuszczamy
      next()
    } else {
      // Nie jest zalogowany -> wypad do logowania
      next('/login')
    }
  } else {
    // Każda inna strona (dla klientów) -> wpuszczamy bez pytań
    next()
  }
})

// ------------------------------------------

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
