import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import circle from './views/circle'
import attention from './views/attention'
import science from './views/science'
import adminIndex from './views/admin/index'
import circleHot from './views/hot'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', name: 'circle', component: circle},
  {path: '/index', name: 'circle', component: circle},
  {path: '/attention', name: 'attention', component: attention},
  {path: '/science', name: 'science', component: science},
  {path: '/circleHot', name: 'circleHot', component: circleHot},
  {path: '/admin/index', name: 'adminIndex', component: adminIndex},
  {path: '*', name: 'circle', component: circle}
]
const router = new VueRouter({
  routes:routes
})

router.beforeEach((to, from, next) => {
  // window.console.log(to);
  // window.console.log(from);
  next();
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
