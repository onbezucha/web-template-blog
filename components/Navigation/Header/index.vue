<template>
    <header class="bg-white shadow-md dark:bg-gray-900 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-gray-900 dark:text-white">WolfTag</a>
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Homepage</a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Novinky</a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Kontakt</a>
        </nav>
        <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="md:hidden bg-white dark:bg-gray-900 p-4">
        <a href="#" class="block py-2 text-gray-700 dark:text-gray-300">Homepage</a>
        <a href="#" class="block py-2 text-gray-700 dark:text-gray-300">Novinky</a>
        <a href="#" class="block py-2 text-gray-700 dark:text-gray-300">Blog</a>
        <a href="#" class="block py-2 text-gray-700 dark:text-gray-300">Kontakt</a>
      </div>
    </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>