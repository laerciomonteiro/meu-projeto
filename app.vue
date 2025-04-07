<template>
  <div>
    <!-- Seu layout global (opcional) -->
    <header>
      <!-- Cabeçalho comum a todas as páginas -->
    </header>

    <main>
      <!-- Renderiza a página atual -->
      <NuxtPage />
    </main>

    <footer>
      <!-- Rodapé comum a todas as páginas -->
    </footer>
  </div>
</template>

<script setup>
// Você pode adicionar lógica global aqui se necessário
</script>

<style>
/* Estilos globais podem ser adicionados aqui */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>