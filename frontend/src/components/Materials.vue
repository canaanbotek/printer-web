<template>
    <section id="materials" class="flex flex-col items-center p-5 w-full py-20">
      <!-- Título y descripción -->
      <div class="text-center max-w-2xl px-4 mb-10">
        <h2 class="text-4xl font-bold text-gray-900">Materiales de impresión</h2>
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
        <p class="text-gray-700 mt-4">
          Descubre nuestra variedad de materiales para adaptarnos a cualquier tipo de impresión 3D, desde prototipos hasta piezas industriales.
        </p>
      </div>
  
      <!-- Pestañas -->
<div class="w-full px-4">
  <div class="flex overflow-x-auto md:justify-center space-x-4 border-b border-gray-300 pb-2 
              scrollbar-hide scroll-smooth snap-x snap-mandatory">
    <button
      v-for="(material, index) in materials"
      :key="index"
      @click="selectedIndex = index"
      class="px-4 py-2 border-b-4 transition-all duration-300 snap-start"
      :class="selectedIndex === index 
        ? 'border-green-500 text-green-600 font-semibold' 
        : 'border-transparent text-gray-600 hover:text-gray-900'"
    >
      {{ material.title }}
    </button>
  </div>

  <!-- Contenido de la pestaña seleccionada -->
  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <!-- Texto -->
    <div class="text-left px-4">
      <h3 class="text-2xl font-semibold text-gray-900">{{ materials[selectedIndex].title }}</h3>
      <p class="bg-sky-200 text-gray-700 mt-4 p-4 rounded-xl">{{ materials[selectedIndex].description }}</p>
    </div>

    <!-- Imagen -->
    <div class="w-full flex justify-center p-2">
      <img :src="materials[selectedIndex].image" :alt="materials[selectedIndex].title" class="w-124 h-auto object-cover rounded-lg shadow-lg" />
    </div>
  </div>
</div>

    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const selectedIndex = ref(0);
  
  const materials = [
    { title: "PLA", description: "El PLA es un material biodegradable y fácil de imprimir, ideal para prototipos y objetos decorativos.", image: "/src/assets/materials/pla.png" },
    { title: "PETG", description: "El PETG combina resistencia con flexibilidad, ofreciendo una excelente resistencia química y térmica.", image: "/src/assets/materials/petg.jpg" },
    { title: "ABS", description: "El ABS es resistente y duradero, perfecto para piezas mecánicas y componentes sometidos a estrés y temperatura.", image: "/src/assets/materials/abs.jpg" },
    { title: "PA (Nylon)", description: "El Nylon (PA) es un material fuerte, resistente al desgaste y flexible, ideal para piezas funcionales y mecánicas.", image: "/src/assets/materials/pa-nylon.jpeg" },
    { title: "PC", description: "El policarbonato (PC) es extremadamente fuerte, resistente a impactos y altas temperaturas.", image: "/src/assets/materials/pc.jpg" },
    { title: "PC-ABS", description: "El PC-ABS combina la resistencia al impacto del PC con la facilidad de impresión del ABS.", image: "/src/assets/materials/pc-abs.jpg" },
    { title: "TPU", description: "El TPU es un material flexible y elástico, ideal para objetos que requieren resistencia a impactos y deformaciones.", image: "/src/assets/materials/tpu.jpg" },
    { title: "ASA", description: "El ASA es una alternativa al ABS con mejor resistencia a los rayos UV y a la intemperie.", image: "/src/assets/materials/asa.jpeg" },
    { title: "PLA-CF", description: "El PLA con fibra de carbono (PLA-CF) ofrece mayor rigidez y resistencia mecánica que el PLA estándar.", image: "/src/assets/materials/pla-cf.jpg" },
    { title: "PA-CF", description: "El Nylon con fibra de carbono (PA-CF) es extremadamente fuerte y resistente, ideal para aplicaciones industriales.", image: "/src/assets/materials/pa-cf.jpg" },
    { title: "PET-CF", description: "El PETG con fibra de carbono (PET-CF) combina resistencia mecánica, química y térmica con estabilidad dimensional.", image: "/src/assets/materials/pet-cf.png" },
    { title: "Nylon", description: "El Nylon es un material versátil y duradero con excelente resistencia mecánica, térmica y química.", image: "/src/assets/materials/nylon.jpg" },
    { title: "Fibra de Carbono", description: "Los filamentos reforzados con fibra de carbono ofrecen máxima rigidez y resistencia estructural para aplicaciones avanzadas.", image: "/src/assets/materials/fibra-de-carbono.jpeg" }
  ];
  </script>
  
  <style scoped>
  /* Hacer que las pestañas tengan desplazamiento en pantallas pequeñas */
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  