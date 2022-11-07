import { createRouter, createWebHistory } from 'vue-router'

import Standard from './views/Standard.vue'

const routes = [{ path: '/', component: Standard }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
