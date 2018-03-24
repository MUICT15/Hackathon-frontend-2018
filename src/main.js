// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import cookie from 'js-cookie'
import jwtDecode from 'jwt-decode';
import store from './store/index';
Vue.config.productionTip = false
Vue.use(vuex)
const id = cookie.get('feathers-jwt')
if(id != undefined){
  const {userId} = jwtDecode(id);
  cookie.set('userId' , userId)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
