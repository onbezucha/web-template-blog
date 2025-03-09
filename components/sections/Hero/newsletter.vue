<!-- components/sections/NewsHeroSection.vue -->
<template>
  <section class="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
    <!-- Dekorativní prvky -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-12 -right-12 w-64 h-64 bg-blue-400 opacity-10 rounded-full"></div>
      <div class="absolute top-1/3 -left-24 w-80 h-80 bg-blue-600 opacity-5 rounded-full"></div>
      <div class="absolute -bottom-24 right-1/4 w-72 h-72 bg-indigo-500 opacity-10 rounded-full"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Textová část -->
          <div class="lg:col-span-7 text-center lg:text-left">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Buďte v obraze s nejnovějšími 
              <span class="text-blue-600 dark:text-blue-400">aktualitami</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Objevte nejnovější trendy, oznámení a důležité informace z našeho světa. Nepropásněte žádnou důležitou novinu.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/novinky" 
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Prozkoumat novinky
              </NuxtLink>
              <!-- Upravený odkaz na SectionsNewsletter -->
              <a 
                href="#sections-newsletter" 
                class="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-gray-600 font-medium rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Odebírat newsletter
              </a>
            </div>
            
            <!-- Statistiky -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span class="block text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">250+</span>
                <span class="text-sm text-gray-600 dark:text-gray-400">Článků</span>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span class="block text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">15k+</span>
                <span class="text-sm text-gray-600 dark:text-gray-400">Čtenářů</span>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span class="block text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">2x</span>
                <span class="text-sm text-gray-600 dark:text-gray-400">Týdně nový obsah</span>
              </div>
            </div>
          </div>
          
          <!-- Ilustrační část -->
          <div class="lg:col-span-5 relative min-h-[300px]">
            <div class="absolute inset-0 flex items-center justify-center">
              <!-- Hlavní prvek - "nejnovější aktuality" -->
              <div class="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div class="w-80 h-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <!-- Náhled novinky -->
                  <div class="h-32 bg-blue-500 relative">
                    <div class="absolute top-2 left-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">NOVÉ</div>
                    <div class="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90"></div>
                  </div>
                  <div class="p-4">
                    <div class="w-2/3 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div class="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div class="w-5/6 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div class="mt-4 flex justify-between items-center">
                      <div class="w-16 h-4 bg-blue-100 dark:bg-blue-900 rounded"></div>
                      <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Sekundární prvek - překrývající se karta -->
              <div class="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/4 -rotate-12 z-0 hidden md:block">
                <div class="w-64 h-48 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden opacity-60">
                  <div class="h-20 bg-blue-400"></div>
                  <div class="p-3">
                    <div class="w-2/3 h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div class="w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
              
              <!-- Terciární prvek - překrývající se karta -->
              <div class="absolute bottom-10 left-0 transform -translate-x-1/3 rotate-3 z-0 hidden md:block">
                <div class="w-48 h-32 bg-blue-50 dark:bg-blue-900/30 rounded-xl shadow-sm overflow-hidden opacity-80">
                  <div class="h-12 bg-indigo-400"></div>
                  <div class="p-2">
                    <div class="w-2/3 h-2 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                    <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
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