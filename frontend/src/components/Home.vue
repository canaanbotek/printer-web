<template>
  <section id="home" class="flex items-center justify-center bg-white bg-opacity-50 mt-20 mb-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between px-8 gap-8">
      <!-- Sección de texto -->
      <div class="text-left max-w-lg mb-8 md:mb-0">
        <h1 class="font-abel text-gray-900 text-4xl font-bold mb-4 relative">
          {{ $t("home.title") }}
          <!-- Línea verde debajo del h1 -->
          <span class="block w-1/2 h-1 bg-green-500 mx-auto mt-2"></span>
        </h1>
        <p class="font-abel text-gray-900 text-2xl bg-slate-300 bg-opacity-50 p-4 rounded-lg">
          {{ $t("home.description") }}
        </p>
      </div>

      <!-- Sección de imagen -->
      <div class="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex justify-center p-2 overflow-hidden">
        <div class="relative w-full h-full">
          <transition-group name="fade" tag="div">
            <img 
              v-for="(image, index) in images" 
              :key="index"
              v-show="index === currentImage"
              :src="image" 
              alt="Impresión 3D" 
              class="absolute w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

// Lista de imágenes
const images = ref([
  "/src/assets/materials/pc-abs.jpg",
  "/src/assets/materials/tpu.jpg",
  "/src/assets/materials/asa.jpeg",
  "/src/assets/materials/pa-cf.jpg",
  "/src/assets/materials/fibra-de-carbono.jpeg"
])

const currentImage = ref(0)
let interval = null

// Cambio automático de imágenes cada 3 segundos
onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.value.length;
  }, 3000)
})

// Limpieza del intervalo cuando el componente se desmonta
onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Transición más fluida entre imágenes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
