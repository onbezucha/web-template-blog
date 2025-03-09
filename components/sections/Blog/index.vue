<!-- components/sections/BlogPreview.vue -->
<script setup>
// Data pro ukázkové články
const blogPosts = [
  {
    id: 1,
    title: 'Nejnovější trendy v digitálním marketingu',
    description: 'Objevte, jaké strategie a nástroje budou dominovat světu digitálního marketingu v nadcházejícím roce.',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'trendy-digitalni-marketing'
  },
  {
    id: 2,
    title: 'Jak zvýšit konverzní poměr pomocí A/B testování',
    description: 'Praktický průvodce implementací A/B testů, které vám pomohou optimalizovat vaše webové stránky pro vyšší konverze.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'zvyseni-konverzniho-pomeru-ab-testovani'
  },
  {
    id: 3,
    title: 'SEO strategie pro lokální podnikání',
    description: 'Efektivní techniky optimalizace pro vyhledávače, které pomohou vašemu lokálnímu podnikání získat více zákazníků z okolí.',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'seo-strategie-lokalni-podnikani'
  },
  {
    id: 4,
    title: 'Vliv umělé inteligence na budoucnost webdesignu',
    description: 'Jak moderní AI nástroje mění způsob, jakým navrhujeme a vyvíjíme webové stránky, a co to znamená pro designéry.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'umela-inteligence-budoucnost-webdesignu'
  }
];
</script>

<template>
  <section class="py-12 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Sekce nadpis -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Z našeho blogu
        </h2>
      </div>

      <!-- Grid s články -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Jednotlivé články -->
        <div 
          v-for="post in blogPosts" 
          :key="post.id" 
          class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Obrázek -->
          <NuxtLink :to="`/blog/${post.slug}`" class="block overflow-hidden">
            <img 
              :src="post.imageUrl" 
              :alt="post.title" 
              class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              onerror="this.src='/api/placeholder/400/300';this.onerror=null;"
            />
          </NuxtLink>
          
          <!-- Obsah -->
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <NuxtLink :to="`/blog/${post.slug}`" class="block">
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-8 text-right">
        <NuxtLink 
          to="/blog" 
          class="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
        >
          Všechny články
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>