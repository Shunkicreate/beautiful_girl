import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  //   children: [
  //     {
  //       path:'/',
  //       component:Home,
  //     },
  //     {
  //       path:'/about',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //     }
  //   ]
  },
  // {
  //   path: '/beautiful_girl',
  //   name: 'Home2',
  //   component: Home2,
  // //   children: [
  // //     {
  // //       path:'/',
  // //       component:Home2,
  // //     },
  // //     {
  // //       path:'/about',
  // //       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // //     }
  // //   ]
  // },
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
