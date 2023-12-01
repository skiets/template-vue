import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/dashboard.vue'
import login from '../views/login.vue'
import events from '../views/events.vue'
import layout from '../layout/sidebar-navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      component: layout,
      children: [
        {
          path: '/dashboard', // here it is, route /user/profile
          component: dashboard // we reference /src/pages/Profile.vue imported above
        },
        {
          path: '/events', // here it is, route /user/profile
          component: events // we reference /src/pages/Profile.vue imported above
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
