import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TaskOne from '@/views/TaskOne.vue'
import TaskTwo from '@/views/TaskTwo.vue'
import TaskThree from '@/views/taskThree.vue'
import TaskFour from '@/views/TaskFour.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory('/vue2/'),
  routes: [
    {
      path: '/',
      redirect:'/home',     
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
    },
    {
      path: '/task-3',
      component: TaskThree
    },
    {
      path: '/task-4',
      component: TaskFour
    }
  ],
})

export default router
