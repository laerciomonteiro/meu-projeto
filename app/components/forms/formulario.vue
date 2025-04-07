<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="nome">{{ labelNome }}</label>
            <input id="nome" v-model="nome" type="text" class="form-control" :placeholder="placeholderNome" />
        </div>
        <div class="form-group">
            <label for="email">{{ labelEmail }}</label>
            <input id="email" v-model="email" type="email" class="form-control" :placeholder="placeholderEmail" />
        </div>
        <button type="submit" class="btn-submit">{{ textoBotao }}</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    labelNome: {
        type: String,
        default: 'Nome'
    },
    placeholderNome: {
        type: String,
        default: 'Digite seu nome'
    },
    labelEmail: {
        type: String,
        default: 'E-mail'
    },
    placeholderEmail: {
        type: String,
        default: 'Digite seu e-mail'
    },
    textoBotao: {
        type: String,
        default: 'Enviar'
    }
});

const emit = defineEmits(['submit']);

const nome = ref('');
const email = ref('');

const handleSubmit = () => {
    emit('submit', { nome: nome.value, email: email.value })
    nome.value = '';
    email.value = '';
};
</script>

<style scoped>
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

.form-control {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.btn-submit {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-submit:hover{
    background-color: #45a049;
}
</style>