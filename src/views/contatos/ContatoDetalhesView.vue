<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome: {{ contato.nome }}</h3>
        <p>Email: {{ contato.email }}</p>
        <button
            class="btn btn-secondary me-2"
            @click="$router.back()">
                Voltar
        </button>
        <router-link
            class="btn btn-primary"
            :to="`/contatos/${id}/editar`">
                Editar
        </router-link>
    </div>
</template>

<script>

import EventBus from './../../event-bus'

export default {
    props: ['id'],
    data () {
        return {
            contato: undefined
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.contato = EventBus.buscarContatos(+to.params.id)
        })
    },
    beforeRouteUpdate (to, from, next) {
        this.contato = EventBus.buscarContatos(+to.params.id)
        next()
    }
}
</script>
