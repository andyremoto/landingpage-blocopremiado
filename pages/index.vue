<template>
  
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <!-- Floating CTA -->
      <FloatingCta />
      
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-r from-orange-600 to-pink-600 text-white">
      <div class="absolute inset-0 z-0 opacity-20">
        <div class="absolute inset-0 bg-[url('/images/pattern-bg.svg')] bg-repeat opacity-10"></div>
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
      </div>
      
      <div class="container relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl fade-in-up">
              <span class="block text-white">Congele Dinheiro,</span>
              <span class="block text-orange-200">Ganhe um <span class="text-yellow-300">iPhone 16</span></span>
            </h1>
            <p class="max-w-3xl mt-6 text-xl text-orange-100 fade-in-up" style="transition-delay: 200ms;">
              Transforme reais em tokens EQ9, congele-os por um período e ganhe tickets para o sorteio do iPhone 16!
            </p>
            <div class="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="https://blocopremiado.com" target="_blank" class="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-800 to-purple-700 rounded-full shadow-xl hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-pink-600 transform transition-all duration-300 hover:scale-105 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                PARTICIPE AGORA
              </a>
              <a href="#como-funciona" class="px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-600 transition-all duration-300">
                Como Funciona
              </a>
            </div>
          </div>
          
          <div class="flex-1 relative mt-12 lg:mt-0 flex justify-center">
            <div class="relative">
              <!-- Círculo do sorteio separado da hierarquia para garantir primeiro plano -->
              <div style="position: absolute; bottom: 0%; right: -10%; width: 6rem; height: 6rem; z-index: 30;" class="bg-purple-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform rotate-12 pulse-animation border-4 border-white/40">
                <span class="block text-center leading-tight text-base sm:text-lg">Sorteio<br/>12/04</span>
              </div>
              
              <!-- iPhone in display case - simplified structure for better mobile display -->
              <div class="relative w-[220px] h-[350px] sm:w-[280px] sm:h-[450px] md:w-[320px] md:h-[500px] mx-auto bg-gradient-to-b from-orange-400/20 to-pink-600/20 rounded-2xl p-4 shadow-lg slide-in-right">
                <div class="w-full h-full rounded-xl border-4 border-white/20 bg-white/10 backdrop-blur-sm shadow-xl overflow-hidden flex items-center justify-center">
                  <!-- Direct image with fixed dimensions -->
                  <img 
                    src="/images/iphone16.jpg" 
                    class="w-[200px] h-[300px] sm:w-[240px] sm:h-[380px] md:w-[280px] md:h-[440px] object-cover object-center rounded-lg float-animation" 
                    alt="iPhone 16"
                  />
                  <!-- Number overlay -->
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span class="font-bold text-6xl sm:text-8xl text-white/30"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <p class="text-lg font-medium text-orange-200 mb-4">Ainda tem dúvidas?</p>
          <h3 class="text-2xl font-bold text-white mb-6">Experimente o App e entenda tudo na prática!</h3>
          <a 
            href="https://blocopremiado.com" 
            target="_blank"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-800 to-purple-700 rounded-full shadow-lg hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transform transition-all duration-300 hover:scale-105"
          >
            ACESSAR O APP AGORA
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Explanation Section -->
    <section id="como-assim" class="py-16 bg-white">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span class="block">CONGELAR DINHEIRO!?</span>
            <span class="block text-orange-600">Como assim???</span>
          </h2>
          <p class="mt-6 text-xl text-gray-500">
            É isso mesmo. Dentro do <strong class="text-orange-600">Bloco Premiado</strong>, você transforma reais em <strong class="text-orange-600">tokens EQ9</strong>, congela esses tokens por um período e ganha <strong class="text-orange-600">tickets para o sorteio do iPhone 16</strong>!
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-8 shadow-sm border border-orange-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Seu Dinheiro Continua Seu</h3>
            <p class="mt-2 text-gray-500">As tokens continuam sendo suas e <strong class="text-orange-600">podem valorizar com o tempo</strong>. Quanto mais pessoas compram, mais elas crescem.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-8 shadow-sm border border-orange-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Custo Super Acessível</h3>
            <p class="mt-2 text-gray-500"><strong class="text-orange-600">Cada token EQ9 custa menos de 1 centavo!</strong> Com menos de R$ 1 você já recebe milhares de tokens EQ9 e pode receber até 2 tickets.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-8 shadow-sm border border-orange-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Quem Congela Primeiro Ganha Mais</h3>
            <p class="mt-2 text-gray-500">Quem entra antes ganha mais, paga menos nas tokens e tem a maior chance de valorização.</p>
          </div>
        </div>
      </div>
    </section>

       <!-- Countdown Timer Section -->
       <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Contagem regressiva para o sorteio</span>
              <span class="block text-orange-600">FIQUE ATENTO!</span>
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              O sorteio acontecerá dia <strong class="text-orange-600">12 de abril de 2025</strong>. Quanto mais cedo você participar, mais chances terá de ganhar!
            </p>
          </div>
          
          <CountdownTimer />
        </div>
      </section>

    <!-- How it Works Section -->
    <section id="como-funciona" class="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como Funciona?
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Um processo simples e seguro para participar do sorteio
          </p>
        </div>

        <div class="mt-16 relative">
          <!-- Timeline connector -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
          
          <!-- Steps -->
          <div class="space-y-16">
            <!-- Step 1 -->
            <div class="relative">
              <div class="md:flex md:items-center md:justify-between">
                <div class="md:w-1/2 pr-8 md:text-right">
                  <h3 class="text-xl font-bold text-orange-600">Passo 1</h3>
                  <h4 class="mt-2 text-lg font-medium text-gray-900">Troque reais por tokens EQ9</h4>
                  <p class="mt-3 text-gray-500">Faça um cadastro rápido e utilize diversos meios de pagamento. Com apenas R$ 1, você já recebe milhares de tokens EQ9.</p>
                </div>
                
                <div class="hidden md:flex md:items-center md:justify-center mt-6 md:mt-0">
                  <div class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-1/2 pl-0 md:pl-8">
                  <div class="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <img :src="tokenExchangeImage" alt="Exchange tokens" class="h-40 w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="relative">
              <div class="md:flex md:items-center md:justify-between">
                <div class="md:w-1/2 pr-0 md:pr-8 md:order-last">
                  <h3 class="text-xl font-bold text-orange-600">Passo 2</h3>
                  <h4 class="mt-2 text-lg font-medium text-gray-900">Congele 1.000 EQ9 e ganhe 1 ticket</h4>
                  <p class="mt-3 text-gray-500">Escolha o tempo de congelamento dos seus tokens. Quanto mais tempo, mais tickets você recebe!</p>
                </div>
                
                <div class="hidden md:flex md:items-center md:justify-center mt-6 md:mt-0">
                  <div class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-1/2 pl-0 md:pl-0 md:pr-8 md:text-right">
                  <div class="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <img :src="freezeTokenImage" alt="Freeze tokens" class="h-40 w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="relative">
              <div class="md:flex md:items-center md:justify-between">
                <div class="md:w-1/2 pr-8 md:text-right">
                  <h3 class="text-xl font-bold text-orange-600">Passo 3</h3>
                  <h4 class="mt-2 text-lg font-medium text-gray-900">Dobre seus tickets</h4>
                  <p class="mt-3 text-gray-500">Congele por 12 meses e receba 2 tickets por 1.000 EQ9. Maximizando suas chances de ganhar!</p>
                </div>
                
                <div class="hidden md:flex md:items-center md:justify-center mt-6 md:mt-0">
                  <div class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-1/2 pl-0 md:pl-8">
                  <div class="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <img :src="doubleTicketsImage" alt="Double tickets" class="h-40 w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div class="relative">
              <div class="md:flex md:items-center md:justify-between">
                <div class="md:w-1/2 pr-0 md:pr-8 md:order-last">
                  <h3 class="text-xl font-bold text-orange-600">Passo 4</h3>
                  <h4 class="mt-2 text-lg font-medium text-gray-900">Participe do sorteio</h4>
                  <p class="mt-3 text-gray-500">Aguarde o grande sorteio do iPhone 16 que acontecerá em 12 de abril de 2025. As tokens continuam suas após o sorteio!</p>
                </div>
                
                <div class="hidden md:flex md:items-center md:justify-center mt-6 md:mt-0">
                  <div class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                    4
                  </div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-1/2 pl-0 md:pl-0 md:pr-8 md:text-right">
                  <div class="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <img :src="raffleDrawingImage" alt="Raffle drawing" class="h-40 w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Countdown Section -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-pink-600 text-white">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold sm:text-4xl">
            Data do Sorteio: 12 de Abril de 2025
          </h2>
          <p class="mt-4 text-xl text-orange-100">
            Não perca tempo! Quanto mais cedo você entrar, mais barato os tokens, mais chances de ganhar.
          </p>
          
          <CountdownTimer />
          
          <div class="mt-12">
            <a href="https://blocopremiado.com" target="_blank" class="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-800 to-purple-700 rounded-full shadow-xl hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-pink-600 transform transition-all duration-300 hover:scale-105 inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ACESSAR O APP BLOCO PREMIADO AGORA!
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why it's different Section -->
    <section class="py-16 bg-white">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Por que o Bloco Premiado é diferente?
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Uma nova forma de participar de sorteios, sem perder dinheiro
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Sem Perda Financeira</h3>
            <p class="mt-3 text-gray-500">Você <strong>não perde dinheiro</strong> como nas rifas comuns</p>
          </div>

          <div class="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Potencial de Valorização</h3>
            <p class="mt-3 text-gray-500">Suas tokens EQ9 <strong>podem valorizar</strong> enquanto estão congeladas</p>
          </div>

          <div class="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Mais Chances</h3>
            <p class="mt-3 text-gray-500"><strong>Dobro de tickets</strong> ao congelar por mais tempo</p>
          </div>

          <div class="bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Simplicidade Total</h3>
            <p class="mt-3 text-gray-500">Tudo simples, seguro e direto no celular</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-orange-50">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Depoimentos reais
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Veja o que as pessoas estão falando sobre o Bloco Premiado
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white rounded-xl p-8 shadow-md border border-orange-100 relative h-full flex flex-col">
            <div class="absolute -top-5 -left-5">
              <svg class="h-10 w-10 text-orange-500" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div class="pl-6 flex flex-col flex-grow">
              <p class="text-gray-500 italic flex-grow">"É muito fácil de entender até pra mim que não entendia nada desse negócio de tokens! Muito bom poder participar sem perder dinheiro."</p>
              <div class="mt-auto flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-semibold">
                    JM
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">João Marcos</p>
                  <p class="text-xs text-gray-500">Uberlândia, MG</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-md border border-orange-100 relative h-full flex flex-col">
            <div class="absolute -top-5 -left-5">
              <svg class="h-10 w-10 text-orange-500" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div class="pl-6 flex flex-col flex-grow">
              <p class="text-gray-500 italic flex-grow">"O sistema de congelamento é genial! Já participei de vários sorteios e nunca vi um conceito tão inovador. O melhor é que mesmo não ganhando o iPhone, minhas tokens continuam comigo."</p>
              <div class="mt-auto flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-semibold">
                    RL
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">Rafael Lima</p>
                  <p class="text-xs text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-md border border-orange-100 relative h-full flex flex-col">
            <div class="absolute -top-5 -left-5">
              <svg class="h-10 w-10 text-orange-500" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <div class="pl-6 flex flex-col flex-grow">
              <p class="text-gray-500 italic flex-grow">"Comecei com pouco e em alguns dias já colhi os frutos. Esperando o sorteio e minhas tokens valorizaram 25%! Recomendo demais."</p>
              <div class="mt-auto flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-semibold">
                    MS
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">Marina Silva</p>
                  <p class="text-xs text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="registrar" class="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-12 shadow-lg border border-orange-100">
          <CtaButton />
        </div>
      </div>
    </section>

      <!-- DApp Section -->
      <section class="py-16 bg-white">
        <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center mb-12">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              O Que É o App Bloco Premiado?
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Descubra porque milhares de pessoas já estão usando nossa plataforma
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/app-mockup.svg" alt="DApp Bloco Premiado" class="w-full max-w-md mx-auto rounded-xl shadow-lg" />
            </div>
            
            <div class="space-y-6">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">100% Seguro</h3>
                  <p class="mt-2 text-gray-500">
                    Construído com tecnologia blockchain, garantindo transparência e segurança em todas as operações.
                  </p>
                </div>
            </div>
            
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Patrimônio Preservado</h3>
                  <p class="mt-2 text-gray-500">
                    Diferente de rifas tradicionais, seus tokens continuam sendo seus e podem valorizar com o tempo.
                  </p>
                </div>
              </div>
              
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Potencial de Valorização</h3>
                  <p class="mt-2 text-gray-500">
                    Quanto mais pessoas entram na plataforma, mais os tokens tendem a valorizar. Invista cedo e colha os benefícios.
                  </p>
                </div>
              </div>
              
              <div class="mt-8">
                <a href="https://blocopremiado.com" target="_blank" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Acessar o App
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <!-- FAQ Section -->
    <section id="faq" class="py-16 bg-white">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Tire suas dúvidas sobre o Bloco Premiado
          </p>
        </div>

        <div class="mt-12 max-w-4xl mx-auto space-y-4">
          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 shadow-sm border border-orange-100">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-medium text-gray-900">O que é o Bloco Premiado?</h3>
              <svg class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="mt-4 text-gray-500">
              <p>Bloco Premiado é uma plataforma de sorteios onde você congela tokens EQ9 por um período para participar. Diferente das rifas comuns, seu dinheiro não vai embora ao participar, pois os tokens continuam sendo seus mesmo após o sorteio.</p>
            </div>
          </div>

          <!-- <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 shadow-sm border border-orange-100">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-medium text-gray-900">O processo é legal?</h3>
              <svg class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="mt-4 text-gray-500">
              <p>Sim, 100% legal. Seguimos todas as regulamentações da SUSEP para sorteios e somos registrados como empresa oficial. Todas as transações são documentadas com notas fiscais e comprovantes.</p>
            </div>
          </div> -->

          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 shadow-sm border border-orange-100">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-medium text-gray-900">Quanto tempo leva para receber o prêmio?</h3>
              <svg class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="mt-4 text-gray-500">
              <p>A entrega dos prêmios é feita em até 30 dias após o sorteio. Caso seja um item físico como o iPhone, entregaremos para você. Para prêmios digitais, o envio é feito em até 24 horas.</p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 shadow-sm border border-orange-100">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-medium text-gray-900">Quando posso resgatar meus tokens?</h3>
              <svg class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="mt-4 text-gray-500">
              <p>Você pode descongelar suas tokens quando o período de congelamento acabar, se você escolheu padrão são 6 meses, se dobrou os tickes são 12 meses.</p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 shadow-sm border border-orange-100">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-lg font-medium text-gray-900">Como é feito o sorteio?</h3>
              <svg class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="mt-4 text-gray-500">
              <p>O sorteio é feito com um gerador de números aleatórios registrado na blockchain, um dado na blockchain é imutável e público, todo o processo é auditado. Seguimos os padrões de sorteios oficiais para garantir total imparcialidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Segurança em Primeiro Lugar
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Sua tranquilidade é nossa prioridade
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Dados Protegidos</h3>
            <p class="mt-3 text-gray-500">Suas informações são criptografadas e seguem os padrões internacionais de segurança de dados.</p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Contrato Inteligente Auditado</h3>
            <p class="mt-3 text-gray-500">Nosso contrato inteligente usa padrões de segurança reconhecidas internacionalmente.</p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-md border border-orange-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-flex items-center justify-center w-16 h-16 mx-auto bg-orange-600 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900">Suporte</h3>
            <p class="mt-3 text-gray-500">Equipe dedicada disponível todos os dias para ajudar com quaisquer dúvidas ou problemas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-10 pb-8">
      <div class="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <h3 class="text-2xl font-bold text-orange-600">Bloco Premiado</h3>
            </div>
            <p class="text-gray-400 max-w-md">
              O futuro dos sorteios chegou. Participe e ganhe sem perder dinheiro.
            </p>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">Navegação</h3>
            <div class="grid grid-cols-2 gap-4">
              <ul class="space-y-2">
                <li><a href="#como-assim" class="text-gray-400 hover:text-white">Como assim?</a></li>
                <li><a href="#como-funciona" class="text-gray-400 hover:text-white">Como funciona</a></li>
              </ul>
              <ul class="space-y-2">
                <li><a href="#registrar" class="text-gray-400 hover:text-white">Participar</a></li>
                <li><a href="#faq" class="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-6">
          <p class="text-gray-400 text-sm text-center">
            &copy; 2024 Bloco Premiado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref, } from 'vue';
import CountdownTimer from '~/components/CountdownTimer.vue';
import CtaButton from '~/components/CtaButton.vue';
import FloatingCta from '~/components/FloatingCta.vue';
import { useAppHead } from '~/composables/useAppHead';

// Importar imagens
const iphoneImage = '/images/iphone16.jpg';
const tokenExchangeImage = '/images/token-exchange.svg';
const freezeTokenImage = '/images/freeze-token.svg';
const doubleTicketsImage = '/images/double-tickets.svg';
const raffleDrawingImage = '/images/raffle-drawing.svg';

// Inicializa o head com meta tags otimizadas
useAppHead();

// Referência para acompanhar se a página já foi carregada
const isLoaded = ref(false);

// Lógica para animações ao carregar a página
onMounted(() => {
  // Marcar que a página foi carregada
  setTimeout(() => {
    isLoaded.value = true;
    
    // Ativar animações de entrada
    if (process.client) {
      const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');
      
      // Adiciona a classe 'active' com pequeno delay para cada elemento
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('active');
        }, 100 + (index * 100)); // Incrementa o delay para cada elemento
      });
    }
  }, 100);
  
  // Inicializar AOS (Animate on Scroll)
  if (process.client) {
    const AOS = window.AOS;
    if (AOS) {
      AOS.refresh();
    }
  }
});
</script>

<style>
/* Custom animations */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse-animation {
  animation: pulse 2s ease-in-out infinite;
}
</style>