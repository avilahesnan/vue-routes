import Vue from 'vue'
import VueRouter from 'vue-router'
import EventBus from './event-bus.js'

const HomeView = () => import('./views/HomeView.vue')
const LoginView = () => import('./views/login/LoginView.vue')
const Erro404View = () => import('./views/Erro404View.vue')
const Erro404ContatoView = () => import('./views/contatos/Erro404ContatoView.vue')
const ContatosView = () => import(/* webpackChunkName: "contatos" */'./views/contatos/ContatosView')
const ContatosHomeView = () => import(/* webpackChunkName: "contatos" */'./views/contatos/ContatosHomeView')
const ContatoDetalhesView = () => import(/* webpackChunkName: "contatos" */'./views/contatos/ContatoDetalhesView')
const ContatoEditarView = () => import(/* webpackChunkName: "contatos" */'./views/contatos/ContatoEditarView')

Vue.use(VueRouter)

const extrairParamsId = (route) => ({ id: +route.params.id })

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/home',
      component: HomeView,
      alias: '/index'
    },
    {
      path: '/login',
      component: LoginView
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
          meta: { requerAuth: true },
          beforeEnter (to, from, next) {
            console.log('beforeEnter')
            next()
            // next(true)
            // next(false)
            // next('/contatos')
            // next({ name: 'contatos' })
          },
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log('Requer Auth?', to.meta.requerAuth)
  const estaAutenticado = EventBus.autenticado
  if(to.matched.some(rota => rota.meta.requerAuth)) {
    if(!estaAutenticado) {
      next({
        path: '/login',
        query: { redirecionar: to.fullPath }
      })
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach(() => {
  console.log('afterEach')
})

export default router
