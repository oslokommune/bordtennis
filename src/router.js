import { createRouter, createWebHistory } from 'vue-router'

import Standard from './views/Standard.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/', component: Standard },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
