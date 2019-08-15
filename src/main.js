import App from './App.vue'

import Vue from 'vue'
import Axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Axios)
Vue.use(Vuetify)

new Vue(App).$mount('#app')