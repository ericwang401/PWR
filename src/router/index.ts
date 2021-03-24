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
        component: () => import('@/views/Technology.vue'),
      },
      {
        name: "Specifications",
        path: "specifications",
        component: () => import('@/views/Specifications.vue'),
      },
      {
        name: "Buy Now",
        path: "buy-now",
        component: () => import('@/views/BuyNow.vue'),
      },
      {
        name: "Sources",
        path: "sources",
        component: () => import('@/views/Sources.vue'),
      },
      {
        name: "About",
        path: "about",
        component: () => import('@/views/About.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
