<template>
    <div 
      v-show="isVisible" 
      class="fixed bottom-0 left-0 w-full py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white transform transition-transform duration-300"
      :class="{ 'translate-y-0': isVisible, 'translate-y-full': !isVisible }"
      style="z-index: 100; box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);"
    >
      <div class="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div class="flex items-center mb-4 sm:mb-0">
          <div class="mr-4 bg-purple-800 text-white rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="font-bold">Quanto mais cedo você entrar, mais chances de ganhar!</p>
            <p class="text-sm text-white/80">Cada 1.000 tokens EQ9 = 1 ticket (ou mais, dependendo do prazo)</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <a 
            href="https://blocopremiado.com" 
            target="_blank" 
            class="px-6 py-2 bg-gradient-to-r from-purple-800 to-purple-700 text-white font-bold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            ACESSAR O APP
          </a>
          
          <button 
            @click="dismiss" 
            class="ml-4 text-white hover:text-blue-200"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isVisible = ref(false);
  
  const dismiss = () => {
    isVisible.value = false;
    
    // Salva no localStorage para não mostrar novamente nesta sessão
    if (process.client) {
      localStorage.setItem('floatingCtaDismissed', 'true');
    }
  };
  
  onMounted(() => {
    // Mostrar o CTA imediatamente, a menos que tenha sido explicitamente fechado pelo usuário
    if (process.client) {
      const dismissed = localStorage.getItem('floatingCtaDismissed');
      if (!dismissed) {
        isVisible.value = true;
      }
    }
  });
  </script>