

<template>
  <div class="flex flex-col min-h-screen">
    <NavigationHeader/>

    <main class="flex-grow">
      <SectionsHeroHomepage/>
      <SectionsContentHomepage/>

      <section class="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <Arcticle/>
        <Arcticle/>
        <Arcticle/>
      </section>
    </main>

    <NavigationFooter/>
  </div>
</template>