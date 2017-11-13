import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth } from '../components/utils/auth.js'

Vue.use(Router)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new Router({
  routes: [
    { path: '/', beforeEnter: requireAuth, component: load('views/dashboard/one/dashboard'), meta: { name: 'Dashboard One' }, name: 'dash-one' },
    { path: '/login', component: load('views/login/login'), meta: { name: 'Login' }, name: 'login' },
    { path: '/CodeManager', beforeEnter: requireAuth, component: load('views/Mapping/CodeManager'), meta: { name: 'Test Codes Manager' }, name: 'CodeManager' },
    { path: '*', component: load('Error404') } // Not found
  ]
})
