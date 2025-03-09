<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
});
</script>

<template>
  <NuxtLink 
    :to="to" 
    class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200"
    :class="{ 'text-blue-600 dark:text-blue-400': $route.path === to }"
  >
    {{ text }}
  </NuxtLink>
</template>