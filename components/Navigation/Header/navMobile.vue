<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <a 
    href="#" 
    @click.prevent="handleClick"
    class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
  >
    {{ text }}
  </a>
</template>