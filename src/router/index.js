import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Web Dev LIVE India',
      color: 'white'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: {
      title: 'Team | Web Dev LIVE India',
      color: 'white'
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers | Web Dev LIVE India',
      color: 'white'
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue'),
    meta: {
      title: 'Schedule | Web Dev LIVE India',
      color: 'white'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ | Web Dev LIVE India',
      color: 'white'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
    meta: {
      title: 'Register | Web Dev LIVE India',
      color: 'white'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
