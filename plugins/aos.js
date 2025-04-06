// Plugin para Animate On Scroll (AOS)
// Adiciona animações aos elementos quando eles entram na viewport

import { defineNuxtPlugin } from '#app'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 100,
        anchorPlacement: 'top-bottom'
      })
    })
  }
})