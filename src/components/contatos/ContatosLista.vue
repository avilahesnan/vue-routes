<template>
    <div>
        <h3 class="font-weigth-light">Contatos</h3>

        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaItem 
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>

        <p v-else>Nenhum contato cadastrado</p>

        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>

import ContatosListaItem from './ContatosListaItem.vue'

export default {
    components: {
        ContatosListaItem
    },
    data () {
        return {
            contatos: [
                { id: 1, nome: 'Isaac Newton', email: 'isaac@gmail.com'},
                { id: 2, nome: 'Albert Einstein', email: 'einstein@gmail.com'},
                { id: 3, nome: 'Stephen Hawking', email: 'stephen@gmail.com'}
            ]
        }
    },
    methods: {
        voltar () {
            this.$router.back()
        }
    }
}
</script>