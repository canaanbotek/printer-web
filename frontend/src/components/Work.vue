<template>
  <section id="work" class="flex flex-col items-center py-20 text-center">
    
    <!-- Sección de Título y Descripción -->
    <div class="text-center mb-10">
      <h1 class="font-abel text-gray-900 text-4xl font-bold mb-4 relative">
        {{ $t("work.title") }}
        <!-- Línea verde debajo del h1 -->
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
      </h1>
      <p class="font-abel max-w-5xl text-xl text-gray-900">
        {{ $t("work.description") }}
      </p>
    </div>

    <!-- Carrusel de trabajos -->
    <Swiper
      :space-between="20"
      :loop="true"
      :modules="[Autoplay, Navigation]"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      navigation
      class="w-full max-w-7xl"
    >
      <SwiperSlide
        v-for="(work, index) in workItems"
        :key="index"
        class="relative group rounded-lg shadow-lg overflow-hidden cursor-pointer"
        @click="openImage(work.image)"
      >
        <img
          :src="work.image"
          :alt="t(`work.${work.key}Title`)"
          class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div class="absolute bottom-0 w-full bg-black/60 text-white text-center text-sm font-abel p-2">
          {{ t(`work.${work.key}Description`) }}
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Modal para vista ampliada de imagenes -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeImage"
    >
      <div class="relative max-w-full px-4 mx-auto">
        <img
          :src="selectedImage"
          alt="Ampliado"
          class="max-h-[500px] w-auto mx-auto rounded shadow-xl object-contain"
        />
      </div>
      <button
        class="absolute top-4 right-4 bg-white hover:bg-gray-200 text-gray-800 rounded-full p-2 shadow-lg transition"
        aria-label="Cerrar imagen"
        @click="closeImage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const workItems = [
  { key: "pcbAbs", image: "/src/assets/pics/pc_abs_work.jpeg" },
  { key: "pla", image: "/src/assets/pics/hinge_4.jpeg" },
  { key: "plaEspecial", image: "/src/assets/pics/macetas_1.jpeg" },
  { key: "abs", image: "/src/assets/pics/housing.jpeg" },
  { key: "tpu", image: "/src/assets/pics/housing.jpeg" },
  { key: "nylon", image: "/src/assets/pics/housing.jpeg" },
  { key: "petCf", image: "/src/assets/pics/housing.jpeg" },
  { key: "asa", image: "/src/assets/pics/housing.jpeg" },
  { key: "petg", image: "/src/assets/pics/housing.jpeg" }
];

const selectedImage = ref<string | null>(null);
const openImage = (image: string) => selectedImage.value = image;
const closeImage = () => selectedImage.value = null;
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #636568;
  top: 40%;
}

.swiper-button-prev {
  left: -1rem;
}

.swiper-button-next {
  right: -1rem;
}
</style>
