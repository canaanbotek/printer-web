<template>
  <section id="home" class="h-screen flex items-center justify-center bg-white bg-opacity-50 mt-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between px-8 gap-8">
      <!-- Sección de texto -->
      <div class="text-left max-w-lg mb-8 md:mb-0">
        <h1 class="text-gray-900 text-4xl font-bold mb-4 relative">
          Servicios de impresión para componentes personalizados
          <!-- Línea verde debajo del h1 -->
          <span class="line"></span>
        </h1>
        <p class="text-gray-900 text-2xl bg-white bg-opacity-50 p-4 rounded-lg">
          Obtenga sus piezas personalizadas en tiempo récord con nosotros
        </p>
      </div>

      <!-- Sección de imagen -->
      <div class="relative w-full md:w-[700px] h-[400px] md:h-[600px] overflow-hidden">
        <img :src="backgroundImage" alt="Impresión 3D" class="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/housing.jpeg";
</script>

<style>
.line {
  content: "";
  display: block;
  width: 50%; /* Configura el largo de la línea */
  height: 4px; /* Grosor de la línea */
  background-color: #28a745; /* Color verde */
  position: absolute;
  bottom: -15px; /* Ajusta la distancia entre el texto y la línea */
  left: 0; /* Puedes cambiar la posición para mover la línea */
}
</style>
