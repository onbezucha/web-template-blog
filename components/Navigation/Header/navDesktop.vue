<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
    {{ text }}
  </a>
</template>