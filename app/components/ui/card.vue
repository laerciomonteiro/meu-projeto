<template>
    <div class="card">
        <div class="card-header">
            <h3>{{ titulo }}</h3>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
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
.card {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    max-width: 400px;
}

.card-header {
    background-color: #f8f9fa;
    padding: 10px 15px;
}

.card-body {
    padding: 15px;
}
</style>