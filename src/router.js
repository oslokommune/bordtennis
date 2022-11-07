import { createRouter, createWebHistory } from 'vue-router'

import Standard from './views/Standard.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/old', component: Standard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
