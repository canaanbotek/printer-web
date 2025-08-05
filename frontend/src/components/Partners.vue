<template>
  <section id="partners" class="flex flex-col justify-center items-center relative p-5 mb-20">
    <!-- Título y Descripción -->
    <div class="text-center mb-10">
      <h1 class="font-abel text-gray-100 text-4xl font-bold mb-4 relative">
        {{ $t("partners.title") }}
        
      </h1>
      <p class="font-abel text-xl max-w-5xl text-gray-100">
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
  { src: 'src/assets/conicet.jpg', alt: 'Empresa 2', url: 'https://empresa2.com' },
  { src: 'src/assets/logo-cardio-investigaciones.jpg', alt: 'Empresa 3', url: 'https://empresa3.com' },
  { src: 'src/assets/fdx-logo.png', alt: 'Empresa 4', url: 'https://empresa4.com' },
  { src: 'src/assets/conicet.jpg', alt: 'Empresa 5', url: 'https://empresa5.com' },
  { src: 'src/assets/logo-cardio-investigaciones.jpg', alt: 'Empresa 6', url: 'https://empresa6.com' }
]
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #636568;
  top: 40%;
}
</style>


