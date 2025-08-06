<template>
  <section 
    id="partners"
    class="flex flex-col justify-center items-center relative pb-20 pt-20"
    style="background: linear-gradient(to bottom, #1a1a1a, #2a2a2a, #3a3a3a, #2a2a2a, #2a2a2a, #1a1a1a);">
    
    <!-- Overlay oscuro para mejorar legibilidad -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Título y Descripción -->
    <div class="relative z-10 text-left max-w-6xl px-4 mb-10">
        <h1 class="font-abel text-6xl font-bold text-gray-100">
          {{ $t("partners.title") }}
        </h1>
        <p class="font-abel text-xl text-gray-200 mt-4">
          {{ $t("partners.description") }}
        </p>
    </div>

    <!-- Carrusel de logos -->
    <Swiper
      :modules="[Autoplay, Navigation]"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
      }"
      navigation
      class="w-full max-w-7xl"
    >
      <SwiperSlide
        v-for="(logo, index) in logos"
        :key="index"
        class="flex justify-center items-center h-48"
      >
        <a :href="logo.url" target="_blank" class="flex items-center justify-center w-full h-full p-1">
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="w-48 grayscale hover:grayscale-0 transition duration-300"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const { t } = useI18n()

const logos = [
  { src: 'src/assets/fdx-logo.png', alt: 'Empresa 1', url: 'https://fdx-ingenieria.com/' },
  { src: 'src/assets/logo-conicet-white.png', alt: 'Empresa 2', url: 'https://empresa2.com' },
  { src: 'src/assets/logo-cardio-investigaciones.png', alt: 'Empresa 3', url: 'https://empresa3.com' },
  { src: 'src/assets/fdx-logo.png', alt: 'Empresa 4', url: 'https://fdx-ingenieria.com/' },
  { src: 'src/assets/logo-conicet-white.png', alt: 'Empresa 5', url: 'https://empresa5.com' },
  { src: 'src/assets/logo-cardio-investigaciones.png', alt: 'Empresa 6', url: 'https://empresa6.com' }
]
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #636568;
  top: 40%;
}
</style>


