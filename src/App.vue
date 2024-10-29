<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
</style>
