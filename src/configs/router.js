import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth } from '../components/utils/auth.js'

Vue.use(Router)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new Router({
  routes: [
    { path: '/', beforeEnter: requireAuth, component: load('views/Mapping/CodeManager'), meta: { name: 'Vue Editable Grid' }, name: 'dash-one' },
    { path: '/CodeManager', beforeEnter: requireAuth, component: load('views/Mapping/CodeManager'), meta: { name: 'Vue Editable Grid' }, name: 'CodeManager' },
    { path: '*', component: load('Error404') } // Not found
  ]
})
