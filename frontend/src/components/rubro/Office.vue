<template>
  <div class="p-6">
    <h3 class="text-2xl font-bold mb-6">Industrial</h3>

    <Swiper
      :slides-per-view="1"
      navigation
      loop
      class="max-w-3xl mx-auto"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col items-center"
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
    image: "/src/assets/showcases/office/officeProducts.jpeg",
    caption: "Detalles de oficina.",
  },
];
</script>