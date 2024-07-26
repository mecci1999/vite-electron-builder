import type {RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about'),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 只能用hash模式
  routes,
});

export default router;
