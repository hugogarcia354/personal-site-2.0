// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {vueAccordion} from 'vue-accordion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from 'vue-awesome/components/Icon'



Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-accordion', vueAccordion)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
