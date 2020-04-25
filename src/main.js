import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource);
// this gets VueRouter connected to everything
Vue.use(VueRouter);

Vue.http.options.root = 'https://pokemon-acb59.firebaseio.com/';

const router = new VueRouter({
    routes,
    mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
