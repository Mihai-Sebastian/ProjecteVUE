<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')
    users.value = response.data.users
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="pb-4 ">
    <div class="max-w-3xl mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-6">Users</h1>
      <ul class="divide-y divide-black">
        <li
            v-for="user in users"
            :key="user.id"
            class="py-4 flex flex-col sm:flex-row sm:items-center">
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-800">{{ user.firstName }} {{ user.lastName }}</h2>
            <p class="text-gray-600 mt-1">Email: {{ user.email }}</p>
            <p class="text-gray-600">Age: {{ user.age }} | Gender: {{ user.gender }}</p>
            <p class="text-gray-600">Phone: {{ user.phone }}</p>
            <p class="text-gray-600">City: {{ user.address.city }}</p>
          </div>
          <img :src="user.image" alt="User Image" class="w-20 h-20 rounded-full ml-4" v-if="user.image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
