<template>
  <div>
    <h1>Meu App</h1>

    <Card titulo="Bem-vindo">
      <p>Este é um exemplo de card com conteúdo.</p>
    </Card>

    <Formulario @submit="handleFormSubmit" labelNome="Seu Nome" placeholderNome="Ex: João Silva" labelEmail="Seu Email"
      placeholderEmail="Ex: joao@email.com" textoBotao="Enviar Dados" />

    <Button texto="Clique aqui" @click="handleButtonClick" />
  </div>
  <MeuComponente titulo="Exemplo de Componente">
      <p>Este é um componente reutilizável.</p>
    </MeuComponente>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/ui/card.vue'
import Formulario from '../components/forms/formulario.vue'
import Button from '../components/ui/button.vue'
import MeuComponente from '../components/meucomponente.vue'

const handleButtonClick = () => {
  alert('Botão clicado!')
}

const handleFormSubmit = (dados) => {
  console.log('Dados do formulário:', dados)
  alert('Formulário enviado com sucesso!')
}
</script>