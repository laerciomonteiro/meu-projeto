<template>
    <div>
      <h1>Detalhes do Produto</h1>
      
      <div v-if="produto">
        <h2>{{ produto.nome }}</h2>
        <p>Preço: R$ {{ produto.preco }}</p>
        <p>{{ produto.descricao }}</p>
        <NuxtLink to="/produtos">Voltar para Catálogo</NuxtLink>
      </div>
      
      <div v-else>
        <p>Produto não encontrado.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const { id } = route.params
  
  // Simulando uma busca de dados (no projeto real, você usaria uma API)
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 19.99, descricao: 'Descrição do produto 1' },
    { id: 2, nome: 'Produto 2', preco: 29.99, descricao: 'Descrição do produto 2' },
    { id: 3, nome: 'Produto 3', preco: 39.99, descricao: 'Descrição do produto 3' }
  ]
  
  const produto = produtos.find(p => p.id === parseInt(id))
  
  // Se o produto não existe, redirecionar para uma página 404
  if (!produto) {
    throw createError({ statusCode: 404, statusMessage: 'Produto não encontrado' })
  }
  </script>