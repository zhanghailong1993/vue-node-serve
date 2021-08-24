import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      isPublic: true
    },
    component: () => import('../views/Login/index')
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/admin_users/create',
    children: [
      { path: '/categories/create', component: () => import('../views/CategoryEdit/index') },
      { path: '/admin_users/create', component: () => import('../views/AdminUserEdit/index') },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return `/login`
  }
  return true
})

export default router
