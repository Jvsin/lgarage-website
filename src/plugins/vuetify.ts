/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

  theme: {
    defaultTheme: 'garageDark',
    themes: {
      garageLight: {
        dark: false,
        colors: {
          primary: '#0B0B0B',
          secondary: '#C0C0C0',
          surface: '#FFFFFF',
          background: '#F5F5F5',
          error: '#D64545',
          info: '#2F80ED',
          success: '#27AE60',
          warning: '#F2C94C',
        },
      },
      garageDark: {
        dark: true,
        colors: {
          'primary': '#0B0B0B',
          'secondary': '#C0C0C0',
          'surface': '#C0C0C0',
          'background': '#0B0B0B',
          'on-primary': '#0B0B0B',
          'on-secondary': '#C0C0C0',
          'on-surface': '#0B0B0B',
          'on-background': '#C0C0C0',
          'red-background': '#5d0c0c',
          'error': '#D64545',
          'info': '#2F80ED',
          'success': '#27AE60',
          'warning': '#F2C94C',
        },
      },
    },
  },
})
