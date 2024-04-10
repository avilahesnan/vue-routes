<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o contato com id: {{ id }}</h3>
        <router-link
            class="btn btn-primary"
            :to="`/contatos/${id}/editar`">
                Editar
        </router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id
        }
    },
    // watch: {
    //     '$route' (to) {
    //         this.id = to.params.id
    //     }
    // },
    beforeRouteUpdate (to, from, next) {
        this.id = to.params.id
        next ()
    }
}
</script>
