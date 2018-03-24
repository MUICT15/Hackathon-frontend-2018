import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import bDashboard from '@/components/b-owner/b-dashboard'
import mtoForm from '@/components/b-owner/mto-form'
import otsForm from '@/components/b-owner/ots-form'
import otsTemplete from '@/components/b-owner/ots-templete'
import fDashboard from '@/components/freelance/f-dashboard'
import fProfile from '@/components/freelance/f-profile'
import jobBidding from '@/components/freelance/job-bidding'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/bDashboard', name: 'bDashboard', component: bDashboard},
    { path: '/mtoForm', name: 'mtoForm', component: mtoForm },
    { path: '/otsForm', name: 'otsForm', component: otsForm },
    { path: '/otsTemplete', name: 'otsTemplete', component: otsTemplete },
    { path: '/fDashboard', name: 'fDashboard', component: fDashboard },
    { path: '/fProfile', name: 'fProfile', component: fProfile },
    { path: '/jobBidding', name: 'jobBidding', component: jobBidding },
  ]
})
