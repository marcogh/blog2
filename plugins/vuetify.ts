import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

import {mdi} from "vuetify/lib/iconsets/mdi";
// make sure to also import the coresponding css
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    blueprint: md3,
    // your config will come here
    theme: {
      defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
      sets: { mdi }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
