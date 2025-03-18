<template>
    <section id="materials" class="flex flex-col items-center p-5 w-full mb-10">
      <!-- Título y descripción -->
      <div class="text-center max-w-5xl px-4 mb-10">
        <h2 class="font-abel text-4xl font-bold text-gray-900">{{ $t("materials.title") }}</h2>
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
        <p class="font-abel text-xl text-gray-700 mt-4">
          {{ $t("materials.description") }}
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
            <h3 class="font-abel text-2xl font-semibold text-gray-900">
              {{ t(`materials.${materials[selectedIndex].key}Title`) }}
            </h3>
            <p class="font-abel text-xl bg-sky-200 text-gray-700 mt-4 p-4 rounded-xl">
              {{ t(`materials.${materials[selectedIndex].key}Description`) }}
            </p>
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
  import { ref } from "vue"
  import { useI18n } from "vue-i18n"

  const { t } = useI18n()
  
  const selectedIndex = ref(0)
  
  const materials = [
    {
      name: "PLA",
      key: "pla",
      image: "/src/assets/materials/pla.png"
    },
    {
      name: "PETG",
      key: "petg",
      image: "/src/assets/materials/petg.jpg"
    },
    {
      name: "ABS",
      key: "abs",
      image: "/src/assets/materials/abs.jpg"
    },
    {
      name: "PA",
      key: "pa",
      image: "/src/assets/materials/pa-nylon.jpeg"
    },
    {
      name: "PC",
      key: "pc",
      image: "/src/assets/materials/pc.jpg"
    },
    {
      name: "PC-ABS",
      key: "pcAbs",
      image: "/src/assets/materials/pc-abs.jpg"
    },
    {
      name: "TPU",
      key: "tpu",
      image: "/src/assets/materials/tpu.jpg"
    },
    {
      name: "ASA",
      key: "asa",
      image: "/src/assets/materials/asa.jpeg"
    },
    {
      name: "PLA-CF",
      key: "plaCf",
      image: "/src/assets/materials/pla-cf.jpg"
    },
    {
      name: "PA-CF",
      key: "paCf",
      image: "/src/assets/materials/pa-cf.jpg"
    },
    {
      name: "PET-CF",
      key: "petCf",
      image: "/src/assets/materials/pet-cf.png"
    }
  ];

  </script>
  
  <style scoped>
  /* Hacer que las pestañas tengan desplazamiento en pantallas pequeñas */
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  