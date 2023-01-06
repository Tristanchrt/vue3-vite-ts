import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Analytics from './primary/views/analytics/Analytics.vue';
import DesignPage from './primary/views/design1/DesignPage.vue';
import HomePage from './primary/views/homePage/HomePage.vue';
import TailwindTest from './primary/views/tailwindTest/TailwindTest.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/testing',
    name: 'TailwindTest',
    component: TailwindTest,
  },
  {
    path: '/Analytics',
    name: 'Analytics',
    component: Analytics,
  },
  {
    path: '/DesignPage',
    name: 'DesignPage',
    component: DesignPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
