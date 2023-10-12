import { defineNuxtPlugin } from '#app'
import * as vt from 'vue-toastification'
import '@/assets/css/toast.scss'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default)
  return {
    provide: {
      toast: vt.useToast()
    }
  }
})