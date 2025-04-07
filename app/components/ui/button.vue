<template>
    <button @click="handleClick" class="btn">
        {{ texto }}
    </button>>
</template>

<script setup>
defineProps({
    texto: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['click'])
const handleClick = (event) => {
    emit('click', event)
}
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
btn:hover {
    background-color: #0056b3;
}
</style>