<template>
    <section id="materials" class="flex flex-col items-center p-5 w-full mb-10">
      <!-- Título y descripción -->
      <div class="text-center max-w-5xl px-4 mb-10">
        <h2 class="font-abel text-4xl font-bold text-gray-900">Materiales de impresión</h2>
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
        <p class="font-abel text-xl text-gray-700 mt-4">
          Descubre la variedad de materiales con las que trabajamos y que podemos adaptar a tus necesidades ya sea para la fabricación de
          prototipos industriales o piezas de alta precisión lista para la puesta en producción.
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
            class="font-abel px-4 text-xl py-2 border-b-4 transition-all duration-300 snap-start"
            :class="selectedIndex === index 
              ? 'border-green-500 text-green-600 font-semibold' 
              : 'border-transparent text-gray-600 hover:text-gray-900'"
          >
            {{ material.name }}
          </button>
        </div>
      
        <!-- Contenido de la pestaña seleccionada -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Texto -->
          <div class="text-left px-4">
            <h3 class="font-abel text-2xl font-semibold text-gray-900">{{ materials[selectedIndex].title }}</h3>
            <p class="font-abel text-xl bg-sky-200 text-gray-700 mt-4 p-4 rounded-xl">{{ materials[selectedIndex].description }}</p>
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
    { name: "PLA",
      title: "PLA (Ácido Poliláctico)",
      description: "El PLA destaca por su facilidad de impresión y biodegradabilidad, siendo ideal para prototipado rápido y modelos conceptuales, además de herramientas de montaje de bajo costo. Su versatilidad lo hace popular en la creación de piezas visuales y funcionales donde la alta resistencia no es crítica.",
      image: "/src/assets/materials/pla.png"
    },
    { name: "PETG",
      title: "PETG (Tereftalato de Polietileno Glicolizado)",
      description: "El PETG ofrece un equilibrio entre resistencia y flexibilidad, con buena resistencia química, lo que lo hace adecuado para piezas funcionales, carcasas y componentes que requieren cierta flexibilidad y resistencia a la humedad, incluyendo envases y elementos que necesitan cierto grado de transparencia.",
      image: "/src/assets/materials/petg.jpg"
    },
    { name: "ABS",
      title: "ABS (Acrilonitrilo Butadieno Estireno)",
      description: "El ABS sobresale por su alta resistencia al impacto y al calor, siendo duradero y resistente a productos químicos, lo que lo convierte en un material ideal para carcasas de equipos, componentes automotrices y piezas que soportan altas temperaturas o esfuerzos mecánicos.",
      image: "/src/assets/materials/abs.jpg"
    },
    { name: "PA",
      title: "PA (Poliamida o Nylon)",
      description: "La poliamida (nylon) se caracteriza por su alta resistencia mecánica, flexibilidad y resistencia a la abrasión, siendo perfecta para engranajes, rodamientos y piezas que requieren alta durabilidad y resistencia al desgaste en entornos industriales exigentes.",
      image: "/src/assets/materials/pa-nylon.jpeg"
    },
    { name: "PC",
      title: "PC (Policarbonato)",
      description: "El policarbonato ofrece una combinación de alta resistencia al impacto y al calor, junto con excelente transparencia, lo que lo hace valioso para piezas estructurales, componentes ópticos y carcasas de alta resistencia en aplicaciones donde la durabilidad y la claridad son esenciales.",
      image: "/src/assets/materials/pc.jpg"
    },
    { name: "PC-ABS",
      title: "PC-ABS (Policarbonato-Acrilonitrilo Butadieno Estireno)",
      description: "Destaca por su alta resistencia al impacto, superando al ABS y acercándose al PC, lo que lo hace ideal para piezas que deben soportar golpes y vibraciones. Además, su resistencia al calor es superior a la del ABS, permitiendo su uso en entornos con temperaturas elevadas. La buena estabilidad dimensional del PC-ABS asegura que las piezas mantengan su forma y tamaño en condiciones variables de temperatura y humedad. Su facilidad de procesamiento, en comparación con el PC puro, facilita la fabricación de piezas complejas.",
      image: "/src/assets/materials/pc-abs.jpg"
    },
    { name: "TPU",
      title: "TPU (Poliuretano Termoplástico)",
      description: "El TPU es un material flexible y elastómero, con alta resistencia al desgaste, ideal para juntas, sellos, piezas de amortiguación y componentes que requieren flexibilidad y absorción de impactos, ofreciendo soluciones duraderas para aplicaciones que demandan elasticidad.",
      image: "/src/assets/materials/tpu.jpg"
    },
    { name: "ASA",
      title: "ASA (Acrilonitrilo Estireno Acrilato)",
      description: "El ASA destaca por su alta resistencia a los rayos UV y a la intemperie, similar al ABS en resistencia al impacto y al calor, siendo perfecto para carcasas de dispositivos electrónicos para exteriores y componentes automotrices exteriores, garantizando durabilidad en ambientes exigentes.",
      image: "/src/assets/materials/asa.jpeg"
    },
    { name: "PLA-CF",
      title: "PLA-CF (PLA con Fibra de Carbono)",
      description: "El PLA-CF mejora la rigidez y la estabilidad dimensional del PLA estándar, siendo útil para herramientas, plantillas y accesorios de montaje que requieren mayor rigidez y resistencia, permitiendo la creación de piezas más robustas para aplicaciones de precisión.",
      image: "/src/assets/materials/pla-cf.jpg"
    },
    { name: "PA-CF",
      title: "PA-CF (Poliamida con Fibra de Carbono)",
      description: "El PA-CF ofrece alta resistencia mecánica y térmica, junto con rigidez y resistencia a la abrasión, siendo adecuado para piezas estructurales, componentes de maquinaria y herramientas de alta exigencia, proporcionando soluciones duraderas para aplicaciones industriales demandantes.",
      image: "/src/assets/materials/pa-cf.jpg"
    },
    { name: "PET-CF",
      title: "PET-CF (PETG con Fibra de Carbono)",
      description: "El PET-CF combina la resistencia y flexibilidad del PETG con la rigidez de la fibra de carbono, mejorando la resistencia al impacto, y siendo ideal para piezas funcionales, carcasas y componentes que requieren un equilibrio entre resistencia y flexibilidad, ampliando las posibilidades de aplicación en diversos sectores.",
      image: "/src/assets/materials/pet-cf.png"
    },
    { name: "Nylon",
      title: "Nylon",
      description: "El Nylon es un material versátil y duradero con excelente resistencia mecánica, térmica y química.",
      image: "/src/assets/materials/nylon.jpg"
    },
    { name: "Fibra de carbono",
      title: "Fibra de Carbono",
      description: "Los filamentos reforzados con fibra de carbono ofrecen máxima rigidez y resistencia estructural para aplicaciones avanzadas.",
      image: "/src/assets/materials/fibra-de-carbono.jpeg"
    }
  ];
  </script>
  
  <style scoped>
  /* Hacer que las pestañas tengan desplazamiento en pantallas pequeñas */
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  