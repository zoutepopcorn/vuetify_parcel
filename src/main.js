import Vue from 'vue';
import routes from './routes'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App.vue'
import Test from './components/Test.vue';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/route-one',
    component: Test
  }]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})