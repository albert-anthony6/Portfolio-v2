import { createWebHistory, createRouter } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always be at top page view
    return { x: 0, y: 0 };
  },
});

export default router;
