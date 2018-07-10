import Vue from 'vue';
import VueRouter from 'vue-router'

// Components
import Test from '../components/Test.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [{
    path: '/route-one',
    component: Test
  }]
});