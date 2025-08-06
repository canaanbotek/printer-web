<template>
  <div class="p-6">
    <!-- Título del rubro -->
    <h3 class="text-2xl font-bold mb-6 text-gray-800">{{ rubro.name }}</h3>

    <!-- Swiper principal para las imágenes -->
    <Swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="1"
      :space-between="10"
      navigation
      loop
      :autoplay="{ delay: 50000, disableOnInteraction: true }"
      class="max-w-3xl mx-auto mb-8"
    >
      <SwiperSlide
        v-for="(item, index) in rubro.items"
        :key="index"
        class="flex flex-col items-center justify-center"
      >
        <img
          :src="item.image"
          :alt="item.caption"
          class="max-h-[500px] max-w-[500px] object-contain mb-4 rounded-lg shadow-lg"
          loading="lazy"
        />
        <p class="text-sm text-gray-600 text-center max-w-md px-4">
          {{ item.caption }}
        </p>
      </SwiperSlide>
    </Swiper>

    <!-- Miniaturas (opcional) -->
    <div v-if="rubro.items.length > 1" class="max-w-2xl mx-auto">
      <Swiper
        :slides-per-view="rubro.items.length > 3 ? 4 : rubro.items.length"
        :space-between="10"
        class="thumbnail-swiper"
      >
        <SwiperSlide
          v-for="(item, index) in rubro.items"
          :key="'thumb-'+index"
          class="cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          @click="goToSlide(index)"
        >
          <img
            :src="item.image"
            class="h-20 w-full object-cover rounded border border-gray-200"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

defineProps({
  rubro: {
    type: Object,
    required: true
  }
})

const mainSwiper = ref(null)

const goToSlide = (index) => {
  if (mainSwiper.value) {
    mainSwiper.value.slideTo(index)
  }
}

const onSwiper = (swiper) => {
  mainSwiper.value = swiper
}
</script>

<style scoped>
/* Estilos para el swiper de miniaturas */
.thumbnail-swiper {
  padding: 10px 0;
}

.thumbnail-swiper .swiper-slide-thumb-active {
  opacity: 1;
  border-color: #3b82f6;
}
</style>