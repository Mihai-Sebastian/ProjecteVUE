<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const backgroundClass = computed(() => {
  switch (route.path) {
    case '/calculadora':
      return 'bg-cyan-900';
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
