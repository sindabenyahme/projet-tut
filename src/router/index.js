/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue';
import LoginForm from '../components/LoginForm.vue';
import Panier from "@/components/Panier.vue";
import MenuUser from "@/components/MenuUser.vue";
import MenuAdmin from "@/components/MenuAdmin.vue";
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
      path: '/MenuUser',
      name: 'MenuPage',
      component: MenuUser

    },
    {
      path: '/MenuAdmin',
      name: 'AdminPage',
      component: MenuAdmin
    },
    {
      path: '/Panier',
      name: 'PanierPage',
      component: Panier
    }

  ]
});

export default router;

