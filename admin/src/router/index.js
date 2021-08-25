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
      { path: '/categories/list', component: () => import('../views/CategoryList/index') },

      { path: '/heroes/create', component: () => import('../views/Heroes/index') },
      { path: '/heroes/edit/:id', component: () => import('../views/Heroes/index'), props: true },
      { path: '/heroes/list', component: () => import('../views/HeroesList/index') },
      
      { path: '/items/create', component: () => import('../views/ItemEdit/index') },
      { path: '/items/edit/:id', component: () => import('../views/ItemEdit/index'), props: true },
      { path: '/items/list', component: () => import('../views/ItemList/index') },

      { path: '/articles/create', component: () => import('../views/ArticleEdit/index') },
      { path: '/articles/edit/:id', component: () => import('../views/ArticleEdit/index'), props: true },
      { path: '/articles/list', component: () => import('../views/ArticleList/index') },

      { path: '/admin_users/create', component: () => import('../views/AdminUserEdit/index') },
      {
        path: "/admin_users/edit/:id",
        component: () => import('../views/AdminUserEdit/index'),
        props: true
      },
      { path: '/admin_users/list', component: () => import('../views/AdminUserList/index') },

      { path: '/ads/create', component: () => import('../views/AdEdit/index') },
      { path: '/ads/edit/:id', component: () => import('../views/AdEdit/index'), props: true },
      { path: '/ads/list', component: () => import('../views/AdList/index') }

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
