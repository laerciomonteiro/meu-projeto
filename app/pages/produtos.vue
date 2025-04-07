<template>
  <div>
    <h1>Catálogo de Produtos</h1>

    <div>
      <input v-model="filtro" type="text" placeholder="Pesquisar produtos..." @input="filtrarProdutos" />
    </div>

    <!-- Lista de produtos -->
    <ul>
      <li v-for="produto in produtosFiltrados" :key="produto.id">
        <NuxtLink :to="`/products/${produto.id}`">
          {{ produto.nome }} - R$ {{ produto.preco }}
        </NuxtLink>
        <button @click="adicionarAoCarrinho(produto)">Adicionar ao Carrinho</button>
      </li>
    </ul>

    <!-- Ordenação -->
    <div>
      <button @click="ordenarPorPrecoAsc"> Ordenar por Preço (Crescente)</button>
      <button @click="ordenarPorPrecoDesc"> Ordenar por Preço (Decrescente)</button>
    </div>

    <!-- Carrinho -->
    <div>
      <h3> Carrinho ({carrinho.length} itens)</h3>
      <ul>
        <li v-for="item in carrinho" :key="item.id">
          {{ item.nome }} - R$ {{ item.preco }}
        </li>
      </ul>
      <p>Total: R$ {{ calcularTotal }}</p>
    </div>
    <NuxtLink to="/">Voltar para Home</NuxtLink>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const produtos = ref([
  { id: 1, nome: 'Produto 1', preco: 19.99, descricao: 'Descrição do Produto 1' },
  { id: 2, nome: 'Produto 2', preco: 29.99, descricao: 'Descrição do Produto 2' },
  { id: 3, nome: 'Produto 3', preco: 39.99, descricao: 'Descrição do Produto 3' },
])

// Filtro de pesquisa
const filtro = ref('')
const produtosFiltrados = computed(() => {
  if (!filtro.value) return produtos.value
  return produtos.value.filter(produto =>
    produto.nome.toLowerCase().includes(filtro.value.toLowerCase()))
})

// Ordenação

const ordenacao = ref(null)
function ordenarPorPrecoAsc() {
  ordenacao.value = 'asc'
  produtos.value.sort((a, b) => a.preco - b.preco)
}
function ordenarPorPrecoDesc() {
  ordenacao.value = 'desc'
  produtos.value.sort((a, b) => b.preco - a.preco)
}

// Carrinho de compras

const carrinho = ref([])
function adicionarAoCarrinho(produto) {
  carrinho.value.push({ ...produto })
}

// Cálculo do total
const calcularTotal = computed(() => {
  return carrinho.value.reduce((total, item) => total + item.preco, 0)
})
</script>