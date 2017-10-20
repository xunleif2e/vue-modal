/**
  * vue-modal
  * (c) 2017 赵兵
  * @license MIT
  */
import VueModalComponent from './VueModal.vue'

const VueModal = {
  component: VueModalComponent
}

/**
 * Plugin API
 */
VueModal.install = function (Vue) {

  // Add a global asset
  Vue.component('vue-modal', VueModalComponent)
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueModal)
}

export default VueModal
