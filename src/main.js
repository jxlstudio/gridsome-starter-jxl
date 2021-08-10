// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '@fontsource/lato'
import BContainer from '~/components/ui/BContainer.vue'
import BRow from '~/components/ui/BRow.vue'
import BColumn from '~/components/ui/BColumn.vue'
import BButton from '~/components/ui/BButton.vue'
import Divider from '~/components/ui/Divider.vue'
import Modal from '~/components/ui/Modal.vue'
import Hero from '@/components/ui/Hero.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Set basic "main container" as a global component
  Vue.component('BContainer', BContainer)
  // Set basic row as a global component
  Vue.component('BRow', BRow)
  // Set basic column as a global component
  Vue.component('BColumn', BColumn)
  // Set button as a global component
  Vue.component('BButton', BButton)
  // Set basic divider as a global component
  Vue.component('Divider', Divider)
  // Set basic Modal as a global component
  Vue.component('Modal', Modal)
  // Set basic Hero as a global component
  Vue.component('Hero', Hero)
}
