/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '../router'
import vuetify from './vuetify'
// Types

export function registerPlugins (app: App) {
  const pinia = createPinia()

  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
