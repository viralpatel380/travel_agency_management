import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewContact from '@/components/ViewContact'
import NewContact from '@/components/NewContact'
import auth from '@/components/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: auth
    },

    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/success',
      name: 'auth',
      component: Home,
      meta: {requiresAuth: true}
    },
    {
      path: '/add',
      name: 'new-contact',
      component: NewContact
    },
    {
      path: '/:person/:success?',
      name: 'view-contact',
      component: ViewContact
    }
  ]
})
