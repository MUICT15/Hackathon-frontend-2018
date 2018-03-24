import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import home from '@/components/home'
import bDashboard from '@/components/b-owner/b-dashboard'
import mtoForm from '@/components/b-owner/mto-form'
import otsForm from '@/components/b-owner/ots-form'
import otsTemplete from '@/components/b-owner/ots-templete'
import fDashboard from '@/components/freelance/f-dashboard'
import fProfile from '@/components/freelance/f-profile'
import jobBidding from '@/components/freelance/job-bidding'
=======
import Hello from '@/components/Hello'
>>>>>>> ca93fbeb755161a0f90270ff638cb6ed3549a4b9

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    { path: '/', name: 'home', component: home },
    { path: '/bDashboard', name: 'bDashboard', component: bDashboard},
    { path: '/mtoForm', name: 'mtoForm', component: mtoForm },
    { path: '/otsForm', name: 'otsForm', component: otsForm },
    { path: '/otsTemplete', name: 'otsTemplete', component: otsTemplete },
    { path: '/fDashboard', name: 'fDashboard', component: fDashboard },
    { path: '/fProfile', name: 'fProfile', component: fProfile },
    { path: '/jobBidding', name: 'jobBidding', component: jobBidding },
=======
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
>>>>>>> ca93fbeb755161a0f90270ff638cb6ed3549a4b9
  ]
})
