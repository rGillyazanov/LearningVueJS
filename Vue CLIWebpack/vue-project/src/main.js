import Vue from 'vue'
import App from './App.vue'
import ColorDirective from "./color";
import List from "./List";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";

Vue.directive('colored', ColorDirective);
Vue.filter('uppercase', (value) => value.toUpperCase())
Vue.component('list', List)
Vue.mixin({
  beforeCreate() {
    console.log('beforeCreated');
  }
})
Vue.use(VueRouter)

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})