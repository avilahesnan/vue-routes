import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from './views/HomeView.vue'
import ContatosView from './views/contatos/ContatosView'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: HomeView },
    { path: '/contatos', component: ContatosView }
  ]
})
