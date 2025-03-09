<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline'].includes(value)
  }
});
</script>

<template>
  <a 
    href="#" 
    class="px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
    :class="{
      'bg-white text-blue-700 hover:bg-gray-100': variant === 'primary',
      'border border-white text-white hover:bg-white/10': variant === 'outline'
    }"
  >
    <slot></slot>
  </a>
</template>