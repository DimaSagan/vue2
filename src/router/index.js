import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TaskOne from '@/views/TaskOne.vue'
import TaskTwo from '@/views/TaskTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'home',     
    },
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/task-1',
      component: TaskOne
    },
    {
      path: '/task-2',
      component: TaskTwo
    }
  ],
})

export default router
