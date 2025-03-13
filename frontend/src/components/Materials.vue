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
      <div class="w-full px-1">
        <div class="flex items-center overflow-x-auto md:justify-center space-x-1 border-b border-gray-300 pb-2 
                    scrollbar-hide scroll-smooth snap-x snap-mandatory pl-16">
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
    { title: "PLA (Ácido Poliláctico)", description: "El PLA destaca por su facilidad de impresión y biodegradabilidad, siendo ideal para prototipado rápido y modelos conceptuales, además de herramientas de montaje de bajo costo. Su versatilidad lo hace popular en la creación de piezas visuales y funcionales donde la alta resistencia no es crítica.", image: "/src/assets/materials/pla.png" },
    { title: "PETG (Tereftalato de Polietileno Glicolizado)", description: "El PETG ofrece un equilibrio entre resistencia y flexibilidad, con buena resistencia química, lo que lo hace adecuado para piezas funcionales, carcasas y componentes que requieren cierta flexibilidad y resistencia a la humedad, incluyendo envases y elementos que necesitan cierto grado de transparencia.", image: "/src/assets/materials/petg.jpg" },
    { title: "ABS (Acrilonitrilo Butadieno Estireno)", description: "El ABS sobresale por su alta resistencia al impacto y al calor, siendo duradero y resistente a productos químicos, lo que lo convierte en un material ideal para carcasas de equipos, componentes automotrices y piezas que soportan altas temperaturas o esfuerzos mecánicos.", image: "/src/assets/materials/abs.jpg" },
    { title: "PA (Poliamida o Nylon)", description: "La poliamida (nylon) se caracteriza por su alta resistencia mecánica, flexibilidad y resistencia a la abrasión, siendo perfecta para engranajes, rodamientos y piezas que requieren alta durabilidad y resistencia al desgaste en entornos industriales exigentes.", image: "/src/assets/materials/pa-nylon.jpeg" },
    { title: "PC (Policarbonato", description: "El policarbonato (PC) es extremadamente fuerte, resistente a impactos y altas temperaturas.", image: "/src/assets/materials/pc.jpg" },
    { title: "PC-ABS (Policarbonato-Acrilonitrilo Butadieno Estireno)", description: "El PC-ABS combina la resistencia al impacto del PC con la facilidad de impresión del ABS.", image: "/src/assets/materials/pc-abs.jpg" },
    { title: "TPU (Poliuretano Termoplástico)", description: "El TPU es un material flexible y elástico, ideal para objetos que requieren resistencia a impactos y deformaciones.", image: "/src/assets/materials/tpu.jpg" },
    { title: "ASA (Acrilonitrilo Estireno Acrilato)", description: "El ASA es una alternativa al ABS con mejor resistencia a los rayos UV y a la intemperie.", image: "/src/assets/materials/asa.jpeg" },
    { title: "PLA-CF (PLA con Fibra de Carbono)", description: "El PLA con fibra de carbono (PLA-CF) ofrece mayor rigidez y resistencia mecánica que el PLA estándar.", image: "/src/assets/materials/pla-cf.jpg" },
    { title: "PA-CF (Poliamida con Fibra de Carbono)", description: "El Nylon con fibra de carbono (PA-CF) es extremadamente fuerte y resistente, ideal para aplicaciones industriales.", image: "/src/assets/materials/pa-cf.jpg" },
    { title: "PET-CF (PETG con Fibra de Carbono)", description: "El PETG con fibra de carbono (PET-CF) combina resistencia mecánica, química y térmica con estabilidad dimensional.", image: "/src/assets/materials/pet-cf.png" },
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
  