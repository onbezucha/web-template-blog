<!-- components/sections/CurrentArticlesSection.vue -->
<script setup>
// Data pro ukázkové články
const articles = [
  {
    id: 1,
    title: 'Nejnovější trendy v webdesignu pro rok 2025',
    description: 'Objevte, jaké trendy budou dominovat v oblasti webdesignu v nadcházejícím roce.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 2,
    title: 'Jak optimalizovat rychlost načítání vašeho webu',
    description: 'Praktický průvodce optimalizací vašeho webu pro maximální rychlost a lepší uživatelský zážitek.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 3,
    title: 'Umělá inteligence v marketingu - případové studie',
    description: 'Podívejte se, jak mohou nástroje umělé inteligence transformovat vaše marketingové strategie.',
    imageUrl: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 4,
    title: 'Mobilní optimalizace - klíč k úspěchu v roce 2025',
    description: 'Proč je mobilní optimalizace důležitější než kdy jindy a jak ji efektivně implementovat.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 5,
    title: 'SEO strategie, které fungují i v konkurenčních odvětvích',
    description: 'Efektivní techniky optimalizace pro vyhledávače, které vám pomohou vyniknout i v náročném prostředí.',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 6,
    title: 'Jak vytvořit efektivní obsahovou strategii pro váš web',
    description: 'Kompletní průvodce pro vytvoření obsahové strategie, která přináší reálné výsledky.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 7,
    title: 'E-commerce trendy, které byste neměli ignorovat',
    description: 'Jaké technologie a strategie formují budoucnost online prodeje a jak je využít ve svůj prospěch.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 8,
    title: 'Jak efektivně měřit úspěšnost vašich digitálních kampaní',
    description: 'Průvodce metrikami a nástroji, které vám pomohou maximalizovat návratnost investic do marketingu.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  },
  {
    id: 9,
    title: 'Budoucnost webových technologií - Co nás čeká',
    description: 'Pohled na vznikající technologie a trendy, které budou formovat webový vývoj v příštích letech.',
    imageUrl: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: '#'
  }
];

// Funkce pro ošetření chyby při načítání obrázku
const handleImageError = (event) => {
  event.target.src = '/api/placeholder/400/300?text=Článek';
  event.target.onerror = null; // Předejde nekonečné smyčce
};
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <!-- Nadpis sekce -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Aktuální články na našem webu
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Přečtěte si nejnovější poznatky, rady a průvodce ze světa webdesignu, marketingu a technologií.
        </p>
      </div>

      <!-- Grid s články -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Jednotlivé články -->
        <a 
          v-for="article in articles" 
          :key="article.id" 
          :href="article.slug" 
          class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
          <!-- Obrázek -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="article.imageUrl" 
              :alt="article.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="handleImageError"
            />
          </div>
          
          <!-- Obsah -->
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ article.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4">
              {{ article.description }}
            </p>
            <span class="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center text-sm mt-auto">
              Číst více
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </a>
      </div>

      <!-- CTA Button - ukažte všechny články -->
      <div class="mt-12 text-center">
        <a 
          href="#" 
          class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Zobrazit všechny články
        </a>
      </div>
    </div>
  </section>
</template>