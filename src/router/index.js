/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue';
import LoginForm from '../components/LoginForm.vue';
import Menu from "@/components/Menu.vue";
import Panier from "@/components/Panier.vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/Menu',
      name: 'MenuPage',
      component: Menu
    },
    {
      path: '/Panier',
      name: 'PanierPage',
      component: Panier
    }

  ]
});

export default router;

