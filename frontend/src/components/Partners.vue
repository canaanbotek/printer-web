<template>
  <section id="partners" class="flex flex-col justify-center items-center relative p-5 mb-20">

    <!-- Sección de Título y Descripción -->
    <div class="text-center mb-10">
      <h1 class="font-abel text-gray-900 text-4xl font-bold mb-4 relative">
        {{ $t("partners.title") }}
        <!-- Línea verde debajo del h1 -->
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
      </h1>
      <p class="font-abel text-xl max-w-5xl text-gray-900">
        {{ $t("partners.description") }}
      </p>
    </div>

    <!-- Logos de las empresas -->
    <div class="w-full h-full flex justify-center items-center p-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        <a 
          v-for="(logo, index) in logos"
          :key="index"
          :href="logo.url"
          target="_blank"
          class="flex justify-center transform transition-transform duration-300 hover:scale-105"
        >
          <div class="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center">
            <img :src="logo.src" :alt="logo.alt" class="w-64 h-auto"/>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()

const logos = [
  { src: 'src/assets/logo1.png', alt: 'Empresa 1', url: 'https://empresa1.com' },
  { src: 'src/assets/logo2.png', alt: 'Empresa 2', url: 'https://empresa2.com' },
  { src: 'src/assets/logo2.png', alt: 'Empresa 3', url: 'https://empresa3.com' },
  { src: 'src/assets/logo2.png', alt: 'Empresa 4', url: 'https://empresa4.com' },
  { src: 'src/assets/logo2.png', alt: 'Empresa 5', url: 'https://empresa5.com' },
  { src: 'src/assets/logo2.png', alt: 'Empresa 6', url: 'https://empresa6.com' },
  // Agrega más logos según sea necesario
];
</script>

<style scoped>
/* Estilos adicionales si se lo requiere */
</style>


