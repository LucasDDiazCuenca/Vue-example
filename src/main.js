import Vue from 'vue'
import App from './App.vue'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHouse, faCartShopping, faUsers, faTable, faTruckFast } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false




library.add(faUser, faHouse, faCartShopping, faUsers, faTable, faTruckFast)

new Vue(App).$mount('#app')
