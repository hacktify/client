import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SocialSharing from 'vue-social-sharing'
 
Vue.use(BootstrapVue);
Vue.use(SocialSharing);

new Vue(App).$mount('#app');