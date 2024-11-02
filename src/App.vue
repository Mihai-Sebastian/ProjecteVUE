<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const backgroundClass = computed(() => {
  switch (route.path) {
    case '/calculadora':
      return 'bg-gradient-to-r from-blue-900 to-teal-800';
    case '/api-fetch':
      return 'bg-gradient-to-r from-teal-800 to-blue-900';
    case '/api-axios':
      return 'bg-gradient-to-r from-blue-900 to-teal-800';

    default:
      return 'bg-white';
  }
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main :class="`${backgroundClass} flex-grow`">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
</style>
