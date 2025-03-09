// plugins/smooth-scroll.client.js
export default defineNuxtPlugin(() => {
    // Funkce pro plynulé scrollování
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        event.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 80px offset pro header
          behavior: 'smooth'
        });
      }
    };
    
    // Přidání event listeneru po načtení stránky
    if (process.client) {
      window.addEventListener('click', handleAnchorClick);
    }
  });