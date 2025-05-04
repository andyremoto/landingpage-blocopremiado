import { useHead } from "#app";

export const useAppHead = () => {
  useHead({
    title:
      "Bloco Premiado - Congele Dinheiro, Ganhe Tickets para prêmios incríveis!",
    meta: [
      {
        name: "description",
        content:
          "Transforme reais em tokens EQ9, congele-os e ganhe tickets para o sorteio de prêmios incríveis. Sem perder dinheiro como nas rifas tradicionais!",
      },
      {
        name: "keywords",
        content:
          "bloco premiado, tokens EQ9, sorteio, cripto, blockchain, tokens, congelar dinheiro",
      },
      {
        property: "og:title",
        content: "Bloco Premiado - Congele Dinheiro, Ganhe um prêmios",
      },
      {
        property: "og:description",
        content:
          "Transforme reais em tokens EQ9, congele-os e ganhe prêmios. Suas tokens continuam sendo suas e podem valorizar!",
      },
      {
        property: "og:image",
        content: "/images/bloco-premiado-share.jpg",
      },
      {
        property: "og:url",
        content: "https://blocopremiado.com",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Bloco Premiado - Congele Dinheiro, Ganhe prêmios",
      },
      {
        name: "twitter:description",
        content:
          "Transforme reais em tokens EQ9, congele-os e ganhe tickets para o sorteio de prêmios incríveis.",
      },
      {
        name: "twitter:image",
        content: "/images/bloco-premiado-share.jpg",
      },
      // Meta tags para conversão
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#4338ca",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "canonical",
        href: "https://blocopremiado.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    script: [
      // Estruturado de dados para SEO
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Bloco Premiado",
          url: "https://blocopremiado.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://blocopremiado.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bloco Premiado",
          url: "https://blocopremiado.com",
          logo: "https://blocopremiado.com/logo.png",
          sameAs: [
            "https://facebook.com/blocopremiado",
            "https://twitter.com/blocopremiado",
            "https://instagram.com/blocopremiado",
          ],
        }),
      },
    ],
  });
};
