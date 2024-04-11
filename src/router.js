import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from './views/HomeView.vue'
import Erro404View from './views/Erro404View.vue'
import Erro404ContatoView from './views/contatos/Erro404ContatoView.vue'
import ContatosView from './views/contatos/ContatosView'
import ContatoDetalhesView from './views/contatos/ContatoDetalhesView'
import ContatosHomeView from './views/contatos/ContatosHomeView'
import ContatoEditarView from './views/contatos/ContatoEditarView'

Vue.use(VueRouter)

const extrairParamsId = (route) => ({ id: +route.params.id })

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/home',
      component: HomeView,
      alias: '/index'
    },
    { 
      path: '/contatos',
      component: ContatosView,
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } : {}
      },
      children: [
        { 
          path: ':id(\\d+)',
          component: ContatoDetalhesView,
          name: 'contato',
          props: extrairParamsId
        },
        { 
          path: ':id(\\d+)/editar',
          components: {
            default: ContatoEditarView,
            'contato-detalhes': ContatoDetalhesView
          },
          props: {
            default: extrairParamsId,
            'contato-detalhes': extrairParamsId
          }
        },
        { 
          path: '',
          component: ContatosHomeView,
          name: 'contatos'
        },
        {
          path: '*',
          component: Erro404ContatoView
        }
      ]
    },
    { 
      path: '/',
      redirect: { name: 'contatos' }
    },
    {
      path: '*',
      component: Erro404View
    }
  ]
})
