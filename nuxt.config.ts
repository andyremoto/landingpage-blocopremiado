// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Set compatibility date as recommended by Nuxt
  compatibilityDate: '2025-04-05',
  devtools: { enabled: true },
  // Use Vite as the bundler
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router']
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000
    }
  },
  // Enable SSR for better SEO
  ssr: true,
  // Add modules
  modules: [
    ['@nuxtjs/tailwindcss', {
      cssPath: '~/assets/css/tailwind.css',
      configPath: 'tailwind.config.js'
    }]
  ],
  // Configure app metadata
  app: {
    head: {
      title: 'Bloco Premiado - Congele Dinheiro, Ganhe um iPhone 16',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Transforme reais em tokens EQ9, congele-os por um período e ganhe tickets para o sorteio do iPhone 16. Suas tokens continuam sendo suas e podem valorizar com o tempo!'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          property: 'og:title',
          content: 'Bloco Premiado - Congele Dinheiro, Ganhe um iPhone 16'
        },
        {
          property: 'og:description',
          content: 'Transforme reais em tokens EQ9, congele-os e ganhe tickets para o sorteio do iPhone 16. Sem perder dinheiro como nas rifas tradicionais!'
        },
        {
          property: 'og:image',
          content: '/images/iphone16.jpg' // Using the iPhone image since the share image isn't available yet
        },
        {
          property: 'og:url',
          content: 'https://blocopremiado.com'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/images/apple-touch-icon-precomposed.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/images/apple-touch-icon-120x120-precomposed.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/icon-512x512.png' },
        { rel: 'mask-icon', href: '/images/maskable-icon.png', color: '#FF6B00' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  // Configure page routing
  nitro: {
    routeRules: {
      '/': { prerender: true }
    }
  },
  
  // Using app configuration for routing options
  // Note: Nuxt 3 handles scroll behavior automatically

  // Configure build
  build: {
    transpile: ['@headlessui/vue']
  },
  // Configure plugins
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/mask.js', mode: 'client' }
  ],
  // End of configuration
})