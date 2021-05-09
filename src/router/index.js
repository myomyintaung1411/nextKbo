import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: resolve => require(['@/views/Home.vue'], resolve),
      },
      {
        path: '/real',
        name: 'Real',
        component: resolve => require(['@/views/Real.vue'], resolve),
      },
      {
        path: '/app',
        name: 'Application',
        component: resolve => require(['@/views/Application.vue'], resolve),
      },
      {
        path: '/promotion',
        name: 'Promotion',
        component: resolve => require(['@/views/Promotion.vue'], resolve),
      },
      {
        path: '/pay',
        name: 'Pay',
        component: resolve => require(['@/views/Pay.vue'], resolve),
      },
    ]
  },
  {
    path: '/m',
    name: 'MobileSite',
    component: resolve => require(['@/views/mobile/MobileSite.vue'], resolve),
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/views/mobile/Login.vue'], resolve),
  },
  {
    path: '/register',
    name: 'Register',
    component: resolve => require(['@/views/mobile/Register.vue'], resolve),
  }
]

const router = new VueRouter({
  routes
})

export default router
