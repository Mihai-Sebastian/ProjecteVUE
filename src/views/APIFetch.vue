<script setup>
import {onMounted, ref} from 'vue'

const comments = ref([])
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        comments.value = data
      })
      .catch(error => console.log(error))
})
</script>

<template>
  <div class="pb-4">
    <div class="max-w-3xl mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-6">Comments</h1>
      <ul class="divide-y divide-black">
        <li
            v-for="comment in comments"
            :key="comment.id"
            class="py-4 flex flex-col sm:flex-row sm:items-center">
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-800">{{ comment.name }}</h2>
            <p class="text-gray-600 mt-1">{{ comment.body }}</p>
          </div>
          <p class="text-gray-500 text-sm mt-2 sm:mt-0 sm:ml-4">{{ comment.email }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>