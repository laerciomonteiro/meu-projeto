<template>
    <div class="meu-componente">
        <h3> {{ titulo }}</h3>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    titulo: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.meu-componente {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px 0;
    color: red
}
</style>
