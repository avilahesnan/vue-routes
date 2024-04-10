import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from './views/HomeView.vue'
import ContatosView from './views/contatos/ContatosView'
import ContatoDetalhesView from './views/contatos/ContatoDetalhesView'
import ContatosHomeView from './views/contatos/ContatosHomeView'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: HomeView },
    { 
      path: '/contatos',
      component: ContatosView,
      children: [
        { path: '/contatos/:id', component: ContatoDetalhesView, name: 'contato'},
        { path: '', component: ContatosHomeView },
      ]
    },
    
  ]
})
