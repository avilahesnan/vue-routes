<template>
    <div>
        <div class="alert alert-danger">
            <h3 class="text-center">Erro 404!</h3>
            <p class="text-center">Página não encontrada.</p>
        </div>
        <button
            class="btn btn-secondary mt-4 mb-4"
            @click="$router.back()">
                Voltar
        </button>
    </div>
</template>