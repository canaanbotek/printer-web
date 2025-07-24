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

    <div class="w-full mt-10">
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :navigation="true"
        :pagination="{ clickable: true }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="max-w-6xl w-full"
      >
        <SwiperSlide
          v-for="(work, index) in workItems"
          :key="index"
          class="rounded-lg shadow-lg p-2 cursor-pointer"
          @click="openImage(work.image)"
        >
          <h3 class="font-abel text-2xl font-semibold mt-4 text-gray-900">
            {{ t(`work.${work.key}Title`) }}
          </h3>
          <img
            :src="work.image"
            :alt="t(`work.${work.key}Title`)"
            class="w-full h-64 object-cover mt-4 rounded-md"
          />
          <p class="font-abel text-xl text-gray-700 p-2">
            {{ t(`work.${work.key}Description`) }}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Modal para vista ampliada -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeImage"
    >
      <div class="relative max-w-4xl w-full px-4">
        <img :src="selectedImage" alt="Ampliado" class="w-full rounded shadow-xl" />
        <button
          class="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
          @click="closeImage"
        >
          ✕
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

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
.swiper-button-next,
.swiper-button-prev {
  color: #10b981; /* verde tailwind */
}

.swiper-pagination-bullet {
  background: #10b981;
}
</style>
