<!-- components/sections/BlogListSection.vue -->
<script setup>
import { ref, computed, watch } from 'vue';

// Mock data pro články
const allArticles = [
  {
    id: 1,
    title: 'Nejnovější trendy v webdesignu pro rok 2025',
    description: 'Objevte, jaké trendy budou dominovat v oblasti webdesignu v nadcházejícím roce. Od minimalismu po 3D elementy.',
    date: '15. února 2025',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Webdesign',
    tags: ['webdesign', 'trendy', 'UX'],
    slug: 'trendy-webdesign-2025'
  },
  {
    id: 2,
    title: 'Jak optimalizovat rychlost načítání vašeho webu',
    description: 'Praktický průvodce optimalizací vašeho webu pro maximální rychlost a lepší uživatelský zážitek. Tipy pro vývojáře i majitele webů.',
    date: '10. února 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Výkon',
    tags: ['optimalizace', 'výkon', 'SEO'],
    slug: 'optimalizace-rychlosti-webu'
  },
  {
    id: 3,
    title: 'Umělá inteligence v marketingu - případové studie',
    description: 'Podívejte se, jak mohou nástroje umělé inteligence transformovat vaše marketingové strategie. Reálné příklady implementace.',
    date: '5. února 2025',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Marketing',
    tags: ['AI', 'marketing', 'technologie'],
    slug: 'umela-inteligence-marketing-pripadove-studie'
  },
  {
    id: 4,
    title: 'Mobilní optimalizace - klíč k úspěchu v roce 2025',
    description: 'Proč je mobilní optimalizace důležitější než kdy jindy a jak ji efektivně implementovat. Strategie pro mobile-first přístup.',
    date: '1. února 2025',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Mobilní',
    tags: ['mobilní', 'optimalizace', 'UX'],
    slug: 'mobilni-optimalizace-2025'
  },
  {
    id: 5,
    title: 'SEO strategie, které fungují i v konkurenčních odvětvích',
    description: 'Efektivní techniky optimalizace pro vyhledávače, které vám pomohou vyniknout i v náročném prostředí. Dlouhodobé strategie pro 2025.',
    date: '28. ledna 2025',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'SEO',
    tags: ['SEO', 'strategie', 'marketing'],
    slug: 'seo-strategie-konkurencni-odvetvi'
  },
  {
    id: 6,
    title: 'Jak vytvořit efektivní obsahovou strategii pro váš web',
    description: 'Kompletní průvodce pro vytvoření obsahové strategie, která přináší reálné výsledky. Od analýzy po implementaci.',
    date: '23. ledna 2025',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Obsah',
    tags: ['obsah', 'strategie', 'marketing'],
    slug: 'efektivni-obsahova-strategie'
  },
  {
    id: 7,
    title: 'E-commerce trendy, které byste neměli ignorovat',
    description: 'Jaké technologie a strategie formují budoucnost online prodeje a jak je využít ve svůj prospěch. Analýza nadcházejících trendů.',
    date: '17. ledna 2025',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    tags: ['e-commerce', 'trendy', 'business'],
    slug: 'ecommerce-trendy-2025'
  },
  {
    id: 8,
    title: 'Jak efektivně měřit úspěšnost vašich digitálních kampaní',
    description: 'Průvodce metrikami a nástroji, které vám pomohou maximalizovat návratnost investic do marketingu. Implementace pokročilé analytiky.',
    date: '12. ledna 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Analýza',
    tags: ['analýza', 'marketing', 'ROI'],
    slug: 'mereni-uspesnosti-kampani'
  },
  {
    id: 9,
    title: 'Budoucnost webových technologií - Co nás čeká',
    description: 'Pohled na vznikající technologie a trendy, které budou formovat webový vývoj v příštích letech. Predikce a analýza.',
    date: '8. ledna 2025',
    image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Technologie',
    tags: ['technologie', 'trendy', 'vývoj'],
    slug: 'budoucnost-webovych-technologii'
  },
  {
    id: 10,
    title: 'Optimalizace konverzí pomocí psychologických principů',
    description: 'Jak využít znalosti lidské psychologie ke zvýšení konverzního poměru vašeho webu. Praktické tipy a příklady implementace.',
    date: '3. ledna 2025',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Konverze',
    tags: ['konverze', 'psychologie', 'UX'],
    slug: 'optimalizace-konverzi-psychologie'
  },
  {
    id: 11,
    title: 'Jak vytvořit úspěšnou strategii pro sociální sítě',
    description: 'Komplexní průvodce, který vám pomůže vybudovat silnou přítomnost na sociálních sítích a získat kvalitní publikum pro váš brand.',
    date: '27. prosince 2024',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Sociální média',
    tags: ['sociální sítě', 'strategie', 'marketing'],
    slug: 'uspesna-strategie-socialni-site'
  },
  {
    id: 12,
    title: 'Jak pokročilá analytika mění způsob práce s daty',
    description: 'Objevte, jak nejnovější analytické nástroje a metody transformují způsob, jakým firmy rozhodují na základě dat. Případové studie.',
    date: '20. prosince 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Analýza',
    tags: ['analýza', 'data', 'business'],
    slug: 'pokrocila-analytika-data'
  }
];

// Extrahování všech kategorií
const categories = [...new Set(allArticles.map(article => article.category))];

// Počet článků v každé kategorii
const categoryCounts = computed(() => {
  const counts = {};
  categories.forEach(category => {
    counts[category] = allArticles.filter(article => article.category === category).length;
  });
  return counts;
});

// Stav aplikace
const currentPage = ref(1);
const selectedCategory = ref('');
const articlesPerPage = 9; // Změněno na 9 článků na stránku

// Mobilní zobrazení kategorií
const isMobileMenuOpen = ref(false);

// Filtrované články podle vybrané kategorie
const filteredArticles = computed(() => {
  if (!selectedCategory.value) {
    return allArticles;
  }
  return allArticles.filter(article => article.category === selectedCategory.value);
});

// Články na aktuální stránce
const currentArticles = computed(() => {
  const startIndex = (currentPage.value - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  return filteredArticles.value.slice(startIndex, endIndex);
});

// Celkový počet stránek
const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / articlesPerPage);
});

// Pole čísel stránek pro stránkování
const pageNumbers = computed(() => {
  const pages = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i);
  }
  return pages;
});

// Funkce pro navigaci na konkrétní stránku
const goToPage = (page) => {
  currentPage.value = page;
  // Scrollování nahoru pro lepší UX
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Funkce pro filtrování podle kategorie
const filterByCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1; // Reset na první stránku při změně filtru
  
  // Zavřít mobilní menu po výběru kategorie
  isMobileMenuOpen.value = false;
};

// Reset stránky při změně filtru
watch(selectedCategory, () => {
  currentPage.value = 1;
});

// Funkce pro ošetření chyby při načítání obrázku
const handleImageError = (event) => {
  event.target.src = '/api/placeholder/400/300?text=Článek';
  event.target.onerror = null; // Předejde nekonečné smyčce
};

// Přepínání mobilního menu kategorií
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <section class="py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <!-- Nadpis sekce (pouze na mobilech) -->
      <div class="text-center mb-8 lg:hidden">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Náš blog
        </h2>
      </div>

      <!-- Mobilní filtr -->
      <div class="lg:hidden mb-6">
        <button 
          @click="toggleMobileMenu"
          class="w-full flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-left"
        >
          <span class="font-medium text-gray-800 dark:text-white">
            {{ selectedCategory || 'Všechny kategorie' }}
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 text-gray-500 dark:text-gray-400" 
            :class="{ 'transform rotate-180': isMobileMenuOpen }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <!-- Mobilní menu kategorií -->
        <div 
          v-if="isMobileMenuOpen" 
          class="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden absolute z-20 left-4 right-4"
        >
          <div class="p-1">
            <button 
              @click="filterByCategory('')"
              class="w-full py-3 px-4 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              :class="!selectedCategory ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'"
            >
              Všechny kategorie
            </button>
            <button 
              v-for="category in categories" 
              :key="category"
              @click="filterByCategory(category)"
              class="w-full py-3 px-4 text-left rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex justify-between items-center"
              :class="selectedCategory === category ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'"
            >
              <span>{{ category }}</span>
              <span class="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs">
                {{ categoryCounts[category] }}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col lg:flex-row">
        <!-- Levá strana - Navigace podle kategorií (skryto na mobilech) -->
        <div class="hidden lg:block lg:w-1/4 lg:pr-8">
          <div class="sticky top-20">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Kategorie
            </h2>
            
            <nav class="space-y-1">
              <a 
                href="#" 
                @click.prevent="filterByCategory('')"
                class="block py-2 px-3 rounded-lg transition-colors flex items-center justify-between"
                :class="!selectedCategory ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'"
              >
                <span>Všechny kategorie</span>
                <span class="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs">
                  {{ allArticles.length }}
                </span>
              </a>
              
              <a 
                v-for="category in categories" 
                :key="category"
                href="#" 
                @click.prevent="filterByCategory(category)"
                class="block py-2 px-3 rounded-lg transition-colors flex items-center justify-between"
                :class="selectedCategory === category ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'"
              >
                <span>{{ category }}</span>
                <span class="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs">
                  {{ categoryCounts[category] }}
                </span>
              </a>
            </nav>
            
            <!-- Další odkazy / tagy -->
            <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Populární tagy
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in ['webdesign', 'marketing', 'SEO', 'UX', 'technologie']" :key="tag" class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pravá strana - Seznam článků -->
        <div class="lg:w-3/4">
          <!-- Nadpis (skrytý na mobilech) -->
          <div class="hidden lg:block mb-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              {{ selectedCategory ? selectedCategory : 'Všechny články' }}
            </h2>
          </div>
          
          <!-- Seznam článků -->
          <div v-if="currentArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Jednotlivé články -->
            <article 
              v-for="article in currentArticles" 
              :key="article.id" 
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <NuxtLink :to="`/blog/${article.slug}`" class="block overflow-hidden">
                <div class="relative h-48 overflow-hidden">
                  <img 
                    :src="article.image" 
                    :alt="article.title" 
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    @error="handleImageError"
                  />
                  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                      {{ article.category }}
                    </span>
                  </div>
                </div>
              </NuxtLink>
              
              <div class="p-5 flex-grow flex flex-col">
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {{ article.date }}
                </div>
                <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <NuxtLink :to="`/blog/${article.slug}`" class="block line-clamp-2">
                    {{ article.title }}
                  </NuxtLink>
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4 line-clamp-3">
                  {{ article.description }}
                </p>
                <NuxtLink 
                  :to="`/blog/${article.slug}`" 
                  class="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline mt-auto text-sm"
                >
                  Číst více
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
            </article>
          </div>
          
          <!-- Prázdný stav -->
          <div v-else class="bg-white dark:bg-gray-800 rounded-lg p-10 text-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Žádné články nenalezeny
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Zkuste prosím vybrat jinou kategorii nebo se podívejte později.
            </p>
            <button 
              @click="filterByCategory('')"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Zobrazit všechny články
            </button>
          </div>
          
          <!-- Stránkování -->
          <div v-if="totalPages > 1" class="mt-10 flex justify-center">
            <div class="flex space-x-1">
              <!-- Tlačítko pro předchozí stránku -->
              <button 
                @click="goToPage(currentPage - 1)" 
                :disabled="currentPage === 1"
                class="px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <!-- Čísla stránek -->
              <button 
                v-for="page in pageNumbers" 
                :key="page"
                @click="goToPage(page)"
                class="px-4 py-2 rounded-md font-medium"
                :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'"
              >
                {{ page }}
              </button>
              
              <!-- Tlačítko pro další stránku -->
              <button 
                @click="goToPage(currentPage + 1)" 
                :disabled="currentPage === totalPages"
                class="px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>