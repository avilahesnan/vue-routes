import Vue from 'vue'

export default new Vue({
    data: {
        autenticado: false,
        contatos: [
            { id: 1, nome: 'Isaac Newton', email: 'isaac@gmail.com'},
            { id: 2, nome: 'Albert Einstein', email: 'einstein@gmail.com'},
            { id: 3, nome: 'Stephen Hawking', email: 'stephen@gmail.com'}
        ]
    },
    created () {
        this.$on('autenticar', (autenticado) => {
            this.autenticado = autenticado
        })
    },
    methods: {
        buscarContatos (id) {
            return Object.assign({}, this.contatos.find(c => c.id === id))
        },
        editarContato (contato) {
            const index = this.contatos.findIndex(c => c.id === contato.id)
            this.contatos.splice(index, 1, contato)
        }
    }
})
