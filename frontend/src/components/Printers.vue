<template>
  <section
    id="printers"
    class="h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat px-8 pt-12"
  >
    <!-- Fondo con degradado -->
    <div class="absolute inset-0 bg-gradient-to-b" :style="gradientStyle"></div>

    <!-- Contenedor de texto alineado arriba a la izquierda -->
    <div class="absolute top-12 left-8 max-w-lg text-left text-white z-10">
      <h1 class="text-4xl font-bold mb-4">Con el mejor equipamiento</h1>
      <p class="text-lg leading-relaxed text-justify">
        La Creality K1C se presenta como una solución de impresión 3D robusta y eficiente, especialmente diseñada para satisfacer la demanda de piezas industriales
        dada su amplia compatibilidad para trabajar con materiales como el PLA, PETG, ABS, PA, PC, PC-ABS, TPU, ASA, PLA-CF, PA-CF, PET-CF, Nylon y Fibra de carbono.
        Ademas sus altas velocidades de trabajo permite rápidas iteraciones en el desarrollo de nuevas piezas y lograr entregas en tiempo record.
        </p>
    </div>

    <!-- Imagen sobre el degradado -->
    <img
      :src="backgroundImage"
      alt="Impresora 3D"
      class="relative max-w-full max-h-full"
    />
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/k1c-complete.png";

// Definir degradado en formato RGB
const gradientStyle = {
  background: "linear-gradient(to bottom, rgb(3, 37, 65), rgb(200, 200, 200))",
};
</script>
