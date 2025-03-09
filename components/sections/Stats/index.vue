<!-- components/sections/AnalyticsSection.vue -->
<template>
    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Sekce nadpis a intro text -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Webová analytika pro vaše podnikání
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Porozumějte svému publiku a optimalizujte výkon vašeho webu pomocí pokročilých analytických nástrojů.
            </p>
          </div>
  
          <!-- Hlavní obsah -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 mb-12">
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                Proč je webová analytika klíčová?
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                V dnešním digitálním světě jsou data základem úspěšné online strategie. Webová analytika vám poskytuje 
                cenné informace o chování návštěvníků, efektivitě marketingových kampaní a celkovém výkonu vašeho webu.
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                S pokročilými nástroji pro analýzu dat můžete sledovat klíčové metriky jako je návštěvnost, míra okamžitého opuštění, 
                konverzní poměr a mnoho dalšího. Tyto informace vám umožní činit informovaná rozhodnutí založená na datech.
              </p>
              
              <!-- Výhody jako seznam -->
              <div class="mt-6">
                <h4 class="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  Hlavní výhody webové analytiky:
                </h4>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li class="flex items-start bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                    <svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="font-medium text-gray-800 dark:text-white">Porozumění uživatelům</span>
                      <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Detailní analýza chování návštěvníků na vašem webu.</p>
                    </div>
                  </li>
                  <li class="flex items-start bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                    <svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="font-medium text-gray-800 dark:text-white">Optimalizace konverzí</span>
                      <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Identifikace a odstranění překážek v konverzním procesu.</p>
                    </div>
                  </li>
                  <li class="flex items-start bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                    <svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="font-medium text-gray-800 dark:text-white">Měření ROI kampaní</span>
                      <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Přesné vyhodnocení návratnosti investic do marketingu.</p>
                    </div>
                  </li>
                  <li class="flex items-start bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                    <svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="font-medium text-gray-800 dark:text-white">Technický monitoring</span>
                      <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Identifikace a řešení technických problémů webu.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Sekce s metrikami -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transition-colors border-t-4 border-blue-500">
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center">Sledování návštěvnosti</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center mt-2">
                  Detailní přehled o počtu návštěvníků, jejich původu a chování na vašem webu.
                </p>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">Průměrná úspěšnost:</span>
                    <span class="text-green-600 dark:text-green-400 font-medium">+42%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transition-colors border-t-4 border-green-500">
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center">Konverzní analýza</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center mt-2">
                  Měření efektivity vašich stránek při přeměně návštěvníků na zákazníky.
                </p>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">Průměrné zvýšení:</span>
                    <span class="text-green-600 dark:text-green-400 font-medium">+27%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transition-colors border-t-4 border-purple-500">
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center">Bezpečnostní monitoring</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center mt-2">
                  Sledování podezřelých aktivit a ochrana vašeho webu před možnými hrozbami.
                </p>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">Úspěšnost detekce:</span>
                    <span class="text-green-600 dark:text-green-400 font-medium">99.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="mt-12 text-center">
            <NuxtLink to="/kontakt" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Zjistit více o analytických službách
            </NuxtLink>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              Konzultace a analýza vašeho webu zdarma
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>