<template>
  <section id="printers" class="min-h-screen flex items-center p-5">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Columna de la imagen (Tarjeta sin texto) -->
      <div class="flex justify-center">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <img :src="backgroundImage" alt="Impresora 3D" class="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      <!-- Columna del texto -->
      <div class="text-left max-w-lg">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Con el mejor equipamiento
          <span class="block w-1/2 h-1 bg-green-500 mx-auto mt-2"></span>
        </h1>
        <p class="text-md text-gray-700 bg-slate-200 p-4 rounded-xl">
          La Creality K1C se presenta como una solución de impresión 3D robusta y eficiente, especialmente diseñada para satisfacer la demanda de piezas industriales
          dada su amplia compatibilidad para trabajar con materiales como el PLA, PETG, ABS, PA, PC, PC-ABS, TPU, ASA, PLA-CF, PA-CF, PET-CF, Nylon y Fibra de carbono.
          Además, sus altas velocidades de trabajo permiten rápidas iteraciones en el desarrollo de nuevas piezas y lograr entregas en tiempo récord.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/k1c-complete.png";
</script>
