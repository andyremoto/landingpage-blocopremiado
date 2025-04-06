// O plugin mask.js é utilizado para máscaras de formulário
// Incluindo máscaras para telefone, CPF, etc.

import { defineNuxtPlugin } from '#app'
import IMask from 'imask'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('mask', {
    mountMasks() {
      // Máscara para telefone
      const phoneElements = document.querySelectorAll('input[name="phone"]');
      if (phoneElements.length > 0) {
        phoneElements.forEach(el => {
          IMask(el, {
            mask: '(00) 00000-0000'
          });
        });
      }

      // Máscara para CPF
      const cpfElements = document.querySelectorAll('input[name="cpf"]');
      if (cpfElements.length > 0) {
        cpfElements.forEach(el => {
          IMask(el, {
            mask: '000.000.000-00'
          });
        });
      }

      // Máscara para valor monetário
      const moneyElements = document.querySelectorAll('input[name="custom-amount"]');
      if (moneyElements.length > 0) {
        moneyElements.forEach(el => {
          IMask(el, {
            mask: 'R$ num',
            blocks: {
              num: {
                mask: Number,
                thousandsSeparator: '.',
                radix: ',',
                scale: 2,
                padFractionalZeros: true,
                normalizeZeros: true,
                min: 10
              }
            }
          });
        });
      }
    }
  });

  // Inicializa as máscaras quando o DOM estiver pronto
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      setTimeout(() => {
        nuxtApp.$mask.mountMasks();
      }, 100);
    });
  }
});