<template>
  <section id="partners" class="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 relative">
    <!-- Título y descripción -->
    <div class="flex flex-col justify-center items-center top-4 left-4 text-gray-800 p-16">
      <h2 class="text-3xl font-semibold">Empresas Colaboradoras</h2>
      <p class="mt-2 text-lg text-gray-800 max-w-2xl text-center">
        Colaboramos con varias empresas para ofrecerte los mejores productos y servicios de impresión 3D. Aquí puedes ver algunas de nuestras empresas asociadas.
      </p>
    </div>

    <!-- Logos de las empresas -->
    <div class="w-full h-full flex justify-center items-center p-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        <a 
          v-for="(logo, index) in logos"
          :key="index"
          :href="logo.url"
          target="_blank"
          class="flex justify-center transform transition-transform duration-300 hover:scale-105"
        >
          <div class="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center">
            <img :src="logo.src" :alt="logo.alt" class="w-32 h-auto"/>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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


