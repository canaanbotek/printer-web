<template>
  <section id="home" class="flex flex-col items-center justify-center bg-white bg-opacity-50 mt-20 mb-10 px-4">
    <div class="w-full max-w-4xl flex flex-col items-center justify-center text-center space-y-8">

      <!-- Sección de texto -->
      <div class="w-full">
        <h1 class="font-inter text-gray-900 text-5xl font-bold mb-1 relative">
          {{ $t("home.title") }}
        </h1>
        <p class="font-inter text-gray-400 font-bold text-4xl p-1">
          {{ $t("home.description") }}
        </p>
      </div>

      <!-- Sección de imagen -->
      <div class="relative w-full max-w-xl h-[300px] md:h-[300px] lg:h-[650px] p-2 overflow-hidden">
        <transition name="fade" mode="out-in">
          <img
            :key="currentImage"
            :src="images[currentImage]"
            alt="Impresión 3D"
            class="w-full h-full object-contain rounded-lg transition-opacity duration-3000 ease-in-out"
          />
        </transition>
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
  "/src/assets/materials/PC-ABS.png",
  "/src/assets/materials/TPU.jpg",
  "/src/assets/materials/PA-CF.jpg",
  "/src/assets/materials/PET-CF.jpg"
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
  transition: opacity 1.0s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
