<template>
  <div class="p-6">
    <h3 class="text-2xl font-bold mb-6">Industrial</h3>

    <Swiper
      :modules="[Autoplay, Navigation]"
      :loop="true"
      :space-between="10"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
      }"
      navigation
      class="w-full max-w-7xl flex justify-center items-center"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="flex justify-center items-center h-48"
      >
        <img
          :src="item.image"
          :alt="item.caption"
          class="max-h-[500px] w-auto object-contain mb-4 rounded shadow"
        />
        <p class="text-sm text-gray-400 text-center max-w-md">
          {{ item.caption }}
        </p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const items = [
  {
    image: "/src/assets/showcases/industrial/pc_abs_work.jpeg",
    caption: "Housing resistente hecho en PC-ABS para maquinaria pesada.",
  },
  {
    image: "/src/assets/showcases/industrial/ABS_piece.jpeg",
    caption: "Esparcidor de silicona de cuatro terminaciones.",
  },
  {
    image: "/src/assets/showcases/industrial/engranaje_1.jpeg",
    caption: "Engranaje personalizado.",
  },
    {
    image: "/src/assets/showcases/industrial/guardacable.jpeg",
    caption: "Guarda cable para electrónica.",
  },
  {
    image: "/src/assets/showcases/industrial/hinge_2.jpeg",
    caption: "Visagra personalizada.",
  },
  {
    image: "/src/assets/showcases/industrial/hinge_3.jpeg",
    caption: "Visagra personalizada.",
  },
    {
    image: "/src/assets/showcases/industrial/hinge_4.jpeg",
    caption: "Visagra personalizada.",
  },
  {
    image: "/src/assets/showcases/industrial/screw_2.jpeg",
    caption: "Depósito para puntas de destornillador y atornillador portable.",
  },
];
</script>