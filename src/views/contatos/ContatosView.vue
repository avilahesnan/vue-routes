<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <button class="btn btn-secondary mb-4 me-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        voltar () {
            // this.$router.push('/')
            // this.$router.replace('/')
            // this.$router.go(1)
            // this.$router.forward()
            this.$router.back()
        }
    }
}
</script>