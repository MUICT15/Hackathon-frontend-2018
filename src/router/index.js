import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import bDashboard from '@/components/b-owner/b-dashboard'
import mtoForm from '@/components/b-owner/mto-form'
import otsForm from '@/components/b-owner/ots-form'
import fDashboard from '@/components/freelance/f-dashboard'
import fProfile from '@/components/freelance/f-profile'
import jobBidding from '@/components/freelance/job-bidding'
import Login from '@/components/login'
import Registration from '@/components/register'
import Payment from '@/components/b-owner/payment'
import userAgent from '@/components/user-agent'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/reg',
      name: 'register',
      component: Registration
    },
    {
      path: '/bDashboard',
      name: 'bDashboard',
      component: bDashboard
    },
    {
      path: '/mtoForm',
      name: 'mtoForm',
      component: mtoForm
    },
    {
      path: '/otsForm',
      name: 'otsForm',
      component: otsForm
    },
    {
      path: '/fDashboard',
      name: 'fDashboard',
      component: fDashboard
    },
    {
      path: '/fProfile/:id',
      name: 'fProfile',
      component: fProfile
    },
    {
      path: '/jobBidding',
      name: 'jobBidding',
      component: jobBidding
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/userAgent',
      name: 'userAgent',
      component: userAgent
    }

  ]
})
