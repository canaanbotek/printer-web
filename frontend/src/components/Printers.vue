<template>
  <section id="printers" class=" flex items-center p-5 mb-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Columna de la imagen (Tarjeta sin texto) -->
      <div class="flex justify-center">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <img :src="backgroundImage" alt="Impresora 3D" class="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      <!-- Columna del texto -->
      <div class="text-left max-w-lg">
        <h1 class="font-abel text-4xl font-bold text-gray-900 mb-4">Con el mejor equipamiento
          <span class="block w-1/2 h-1 bg-green-500 mt-3 mb-3"></span>
        </h1>
        <p class="font-abel text-xl text-gray-700 bg-slate-200 p-4 rounded-xl">
          La Creality K1C se presenta como una solución de impresión 3D robusta y eficiente, especialmente diseñada para satisfacer la demanda de piezas industriales se fundamenta en su capacidad para ofrecer una producción ágil y robusta.
          La alta velocidad de impresión, alcanzando los 600 mm/s, permite la creación de prototipos y piezas finales en tiempos reducidos, acelerando los ciclos de desarrollo
          y producción. La versatilidad en la selección de materiales, desde PLA y PETG hasta compuestos de fibra de carbono y Nylon, posibilita la fabricación de piezas con propiedades
          mecánicas, térmicas y químicas adaptadas a cada aplicación. La fiabilidad de la K1C, con su nivelación automática, extrusor antiatascos y boquilla de cambio rápido,
          optimiza los procesos de producción al minimizar los tiempos de inactividad. Además, la cámara con inteligencia artificial mejora el control de calidad,
          garantizando la precisión y consistencia de las piezas. La capacidad de fabricar piezas bajo demanda reduce la necesidad de inventarios,
          contribuyendo a la optimización de costos. En conjunto, las Creality K1C se presentan como una solución eficiente y versátil para la manufactura de piezas industriales,
          al combinar velocidad, resistencia y precisión.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/k1c-complete.png";
</script>
