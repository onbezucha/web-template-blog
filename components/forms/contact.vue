<!-- components/sections/ContactFormSection.vue -->
<script setup>
import { ref } from 'vue';

// Stav formuláře
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const formError = ref('');

// Validace formuláře
const validateForm = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    formError.value = 'Vyplňte prosím všechna povinná pole';
    return false;
  }
  
  if (!validateEmail(formData.value.email)) {
    formError.value = 'Zadejte prosím platnou e-mailovou adresu';
    return false;
  }
  
  formError.value = '';
  return true;
};

// Validace e-mailu
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Odeslání formuláře
const handleSubmit = () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  // Simulace odeslání API požadavku
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
    
    // Reset formuláře
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    
    // V reálné aplikaci by zde byl API požadavek
  }, 1500);
};
</script>

<template>
  <section class="py-16 bg-white dark:bg-gray-700">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Hlavička sekce -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kontaktujte nás</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Máte dotaz nebo potřebujete pomoc? Neváhejte nás kontaktovat pomocí formuláře níže nebo nás navštivte osobně.
          </p>
        </div>
        
        <!-- Kontaktní formulář a mapa -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Levá část - Formulář -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Napište nám</h3>
            
            <div v-if="!isSubmitted">
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <!-- Jméno -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Jméno <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    id="name"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    id="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <!-- Telefon -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefon (volitelné)
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    id="phone"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <!-- Předmět -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Předmět
                  </label>
                  <input
                    v-model="formData.subject"
                    type="text"
                    id="subject"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <!-- Zpráva -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Zpráva <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="formData.message"
                    id="message"
                    rows="5"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <!-- Chybová hláška -->
                <div v-if="formError" class="text-red-500 text-sm">
                  {{ formError }}
                </div>
                
                <!-- Odeslat -->
                <div>
                  <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-70"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Odesílání...
                    </span>
                    <span v-else>Odeslat zprávu</span>
                  </button>
                </div>
              </form>
            </div>
            
            <!-- Potvrzení odeslání -->
            <div v-else class="bg-green-50 dark:bg-green-900/30 p-8 rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Děkujeme za vaši zprávu!
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-6">
                Vaše zpráva byla úspěšně odeslána. Budeme se snažit odpovědět co nejdříve.
              </p>
              <button 
                @click="isSubmitted = false" 
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                Poslat další zprávu
              </button>
            </div>
          </div>
          
          <!-- Pravá část - Mapa a kontaktní informace -->
          <div>
            <!-- Mapa nebo fotka -->
            <div class="rounded-lg overflow-hidden shadow-lg mb-6 h-80 bg-gray-200 dark:bg-gray-700 relative">
              <!-- Zde můžete použít iframe s Google Maps nebo obrázek -->
              <!-- Příklad s Google Maps -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9058689088944!2d14.42401367694814!3d50.08076617132084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ea69e1a1a1%3A0x10dcbd9eb6323374!2zVsOhY2xhdnNrw6kgbsOhbS4sIDExMCAwMCBQcmFoYSAxLcSMZXNrw6EgcmVwdWJsaWth!5e0!3m2!1scs!2scz!4v1710023626884!5m2!1scs!2scz" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="absolute inset-0"
              ></iframe>
              
              <!-- Alternativně můžete použít obrázek -->
              <!-- 
              <img 
                src="/images/office-photo.jpg" 
                alt="Naše kancelář" 
                class="w-full h-full object-cover"
                onerror="this.src='/api/placeholder/800/400?text=Kancelář';this.onerror=null;"
              />
              -->
            </div>
            
            <!-- Kontaktní informace -->
            <div class="bg-blue-600 text-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-6">Kontaktní informace</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-blue-100">Adresa</h4>
                    <p class="mt-1">Václavské náměstí 123<br>110 00 Praha 1<br>Česká republika</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-blue-100">Telefon</h4>
                    <p class="mt-1">+420 123 456 789</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-blue-100">Email</h4>
                    <p class="mt-1">info@vasedomena.cz</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-blue-100">Provozní doba</h4>
                    <p class="mt-1">Pondělí - Pátek: 9:00 - 17:00<br>Víkendy: Zavřeno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>