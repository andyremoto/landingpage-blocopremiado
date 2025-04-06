<template>
    <div class="grid grid-cols-4 gap-5 max-w-lg mx-auto text-pink-700">
      <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-3 shadow-lg border border-orange-100">
        <div class="text-3xl font-bold select-none">{{ days }}</div>
        <div class="text-xs uppercase tracking-wide">Dias</div>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-3 shadow-lg border border-orange-100">
        <div class="text-3xl font-bold select-none">{{ hours }}</div>
        <div class="text-xs uppercase tracking-wide">Horas</div>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-3 shadow-lg border border-orange-100">
        <div class="text-3xl font-bold select-none">{{ minutes }}</div>
        <div class="text-xs uppercase tracking-wide">Min.</div>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-3 shadow-lg border border-orange-100">
        <div class="text-3xl font-bold select-none transition-all duration-200 ease-in-out">{{ seconds }}</div>
        <div class="text-xs uppercase tracking-wide">Seg.</div>
      </div>
    </div> 
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  // Data para o sorteio: 12 de abril de 2025
  const targetDate = new Date('April 12, 2025').getTime();
  
  // Refs para os valores do contador
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  
  // Variável para o intervalo
  let interval = null;
  
  // Atualiza o contador
  const updateCountdown = () => {
    // Obtém a data e hora atual
    const now = new Date().getTime();
    
    // Calcula a diferença entre agora e a data alvo
    const distance = targetDate - now;
    
    // Cálculos de tempo para dias, horas, minutos e segundos
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Se o contador terminou
    if (distance < 0) {
      clearInterval(interval);
      days.value = 0;
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
    }
  };
  
  // Hook de ciclo de vida - quando o componente é montado
  onMounted(() => {
    // Atualiza imediatamente
    updateCountdown();
    
    // Configura o intervalo para atualizar a cada segundo
    interval = setInterval(updateCountdown, 1000);
  });
  
  // Hook de ciclo de vida - antes do componente ser desmontado
  onBeforeUnmount(() => {
    // Limpa o intervalo quando o componente é destruído
    if (interval) {
      clearInterval(interval);
    }
  });
  </script>
  
  <!-- Removed scoped styles in favor of using Tailwind classes directly in the template -->