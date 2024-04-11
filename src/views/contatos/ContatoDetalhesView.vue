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
    props: ['id']
}
</script>
