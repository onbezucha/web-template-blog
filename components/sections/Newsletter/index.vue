<!-- components/sections/NewsletterSimple.vue -->
<script setup>
import { ref } from 'vue';

const email = ref('');
const isSubmitted = ref(false);
const errorMessage = ref('');

// Jednoduchá validace emailu
const submitNewsletter = () => {
  if (!email.value || !email.value.includes('@')) {
    errorMessage.value = 'Zadejte prosím platnou e-mailovou adresu';
    return;
  }
  
  // Simulace odeslání
  errorMessage.value = '';
  setTimeout(() => {
    isSubmitted.value = true;
  }, 500);
};
</script>

<template>
  <section class="py-12 bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Levá část - text -->
        <div class="mb-6 md:mb-0 md:mr-8 md:w-1/2">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
            Odebírejte náš newsletter
          </h2>
          <p class="text-blue-100">
            Získejte nejnovější informace a tipy přímo do vaší e-mailové schránky. Žádný spam, pouze hodnotný obsah.
          </p>
        </div>
        
        <!-- Pravá část - formulář -->
        <div class="w-full md:w-1/2 max-w-md">
          <div v-if="!isSubmitted" class="flex flex-col space-y-3">
            <div>
              <input
                v-model="email"
                type="email"
                placeholder="Vaše e-mailová adresa"
                class="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none bg-blue-500 text-white placeholder-blue-200"
                :class="{'border-red-300': errorMessage}"
              />
              <p v-if="errorMessage" class="mt-1 text-sm text-red-200">
                {{ errorMessage }}
              </p>
            </div>
            
            <button
              @click="submitNewsletter"
              class="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Přihlásit se k odběru
            </button>
            
            <p class="text-xs text-blue-200">
              Přihlášením souhlasíte s našimi podmínkami používání.
            </p>
          </div>
          
          <div v-else class="bg-blue-500 rounded-lg p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-bold text-white mb-2">
              Děkujeme za přihlášení!
            </h3>
            <p class="text-blue-100">
              Budete dostávat aktuální informace a zajímavý obsah.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>