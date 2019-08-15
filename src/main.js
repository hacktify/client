import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faUserSecret)

// Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue(App).$mount('#app');