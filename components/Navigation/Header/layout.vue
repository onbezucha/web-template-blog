// components/TheHeader.vue
<script setup>
import { ref } from "vue";

const isOpen = ref(false);

// Funkce pro zavření menu po kliknutí na odkaz
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4 py-3">
      <!-- Desktop Navigation -->
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NavigationHeaderLogo />
        
        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-6">
          <NavigationHeaderNavDesktop 
            v-for="item in ['Homepage', 'Novinky', 'Blog', 'Kontakt']" 
            :key="item" 
            :text="item" 
          />
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden flex items-center text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="w-6 h-6 transition-transform duration-200"
            :class="{'rotate-90': isOpen}"
          >
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-show="isOpen" 
      class="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden"
      :class="isOpen ? 'max-h-60' : 'max-h-0'"
    >
      <nav class="container mx-auto px-4 py-3 flex flex-col space-y-3">
        <NavigationHeaderNavMobile
          v-for="item in ['Homepage', 'Novinky', 'Blog', 'Kontakt']" 
          :key="item" 
          :text="item" 
          @click="closeMenu"
        />
      </nav>
    </div>
  </header>
</template>