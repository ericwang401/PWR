import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        name: "Home",
        path: "",
        component: () => import('@/views/Home.vue'),
      },
      {
        name: "Technology",
        path: "technology",
        component: () => import('@/views/Home.vue'),
      },
      {
        name: "Specifications",
        path: "specifications",
        component: () => import('@/views/Home.vue'),
      },
      {
        name: "Reviews",
        path: "reviews",
        component: () => import('@/views/Home.vue'),
      },
      {
        name: "Contact Us",
        path: "contact-us",
        component: () => import('@/views/Home.vue'),
      },
      {
        name: "Buy Now",
        path: "buy-now",
        component: () => import('@/views/Home.vue'),
      },
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
