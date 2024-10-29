<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Calculadora">Calculadora</RouterLink>
        <RouterLink to="/api-fetch">Api Fetch</RouterLink>
        <RouterLink to="/api-axios">Api Axios</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
