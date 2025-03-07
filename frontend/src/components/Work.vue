<template>
  <section id="work" class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 py-20">
    <div class="text-center text-white mb-10">
      <h2 class="text-3xl font-bold">Nuestros trabajos</h2>
    </div>

    <!-- Contenedor de tarjetas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl px-4">
      <div 
        v-for="(work, index) in workItems" 
        :key="index" 
        class="bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        @click="openImage(work.image)"
      >
        <img :src="work.image" :alt="work.title" class="w-full h-64 object-cover rounded-md" />
        <h3 class="text-lg font-semibold mt-4 text-gray-900">{{ work.title }}</h3>
      </div>
    </div>

    <!-- Modal para ver imagen en grande -->
    <div v-if="selectedImage" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4" @click="closeImage">
      <div class="relative">
        <img :src="selectedImage" class="max-w-full max-h-screen rounded-lg shadow-lg" @click.stop />
        <button class="absolute top-2 right-2 text-white text-3xl font-bold" @click="closeImage">&times;</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const workItems = [
  { title: "Housing", image: "/src/assets/housing.jpeg" },
  { title: "Lámpara", image: "/src/assets/lamp.jpeg" },
  { title: "Macetas", image: "/src/assets/macetas.jpeg" },
  { title: "Soporte", image: "/src/assets/housing.jpeg" },
  { title: "Decoración", image: "/src/assets/housing.jpeg" },
  { title: "Prototipo", image: "/src/assets/housing.jpeg" }
];

const selectedImage = ref<string | null>(null);

const openImage = (image: string) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};

// Cerrar con tecla ESC
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeImage();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>


<style>
/* Estilos adicionales si se lo requiere */
</style>