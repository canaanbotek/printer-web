<template>
  <section id="whyus" class="p-5 w-full mb-20">
    <div class="container mx-auto px-8 md:px-16">
      <!-- Título de la sección -->
      <div class="text-center mb-10">
        <h2 class="font-abel text-gray-900 text-4xl font-bold mb-4 relative">
          ¿Por qué elegirnos?
          <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
        </h2>
      </div>

      <!-- Contenido de la sección -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Columna de texto -->
        <div class="space-y-8">
          <div v-for="(item, index) in reasons" :key="index">
            <h3 class="font-abel text-2xl font-bold text-gray-900">{{ item.title }}</h3>
            <p class="font-abel text-xl text-gray-700 mt-2">{{ item.description }}</p>
          </div>
        </div>

        <!-- Columna de imagen -->
        <div class="flex justify-center">
          <img :src="image" alt="Por qué elegirnos" class="w-full max-w-lg object-cover rounded-lg shadow-lg p-5" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  {
    title: "Calidad Garantizada",
    description: "Dada la gran diponibilidad de materiales y la tecnología de impresión avanzada que empleamos, nuestro equipo de ingenieros ofrece la mejor colaboracion para optimizar la fabricación de piezas que mejor se ajuste a las necesidades especificas de su aplicación permitiendo lograr resultados de alta precisión."
  },
  {
    title: "Rapidez y Eficiencia",
    description: "Nuestro proceso optimizado y las capacidades de nuestros equipos nos permite entregar piezas en tiempo récord sin comprometer la calidad."
  },
  {
    title: "Experiencia y Profesionalismo",
    description: "Contamos con un equipo de ingenieros expertos en impresión 3D y diseño industrial para brindarte la mejor asesoría."
  }
];

const image = "/src/assets/why-us.png"
</script>
  
<style>

</style>