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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
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
          primary: '#C0C0C0',
          secondary: '#0B0B0B',
          surface: '#C0C0C0',
          background: '#0B0B0B',
          'on-primary': '#0B0B0B',
          'on-secondary': '#C0C0C0',
          'on-surface': '#0B0B0B',
          'on-background': '#C0C0C0',
          error: '#D64545',
          info: '#2F80ED',
          success: '#27AE60',
          warning: '#F2C94C',
        },
      },
    },
  },
})
