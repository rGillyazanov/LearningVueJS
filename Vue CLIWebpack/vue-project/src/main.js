import Vue from 'vue'
import App from './App.vue'
import ColorDirective from "./color";

Vue.directive('colored', ColorDirective);
Vue.filter('uppercase', (value) => value.toUpperCase())

new Vue({
  el: '#app',
  render: h => h(App)
})