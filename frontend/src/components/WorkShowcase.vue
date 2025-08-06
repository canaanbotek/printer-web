<template>
  <section
    id="workShowcase"
    class="py-16 relative"
    style="background: linear-gradient(to bottom, #1a1a1a, #2a2a2a, #3a3a3a, #2a2a2a, #2a2a2a, #1a1a1a);">
    
    <!-- Overlay oscuro para mejorar legibilidad -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 text-center">

      <!-- Título y descripción -->
      <div class="text-left max-w-5xl px-4 mb-10">
        <h1 class="font-abel text-6xl font-bold text-gray-100">{{ t("workShowcase.title") }}</h1>
        <p class="font-abel text-xl text-gray-200 mt-4">
          {{ t("workShowcase.description") }}
        </p>
      </div>

      <!-- Swiper de rubros -->
      <Swiper
        :modules="[Navigation]"
        :loop="true"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }"
        navigation
        class="w-full max-w-5xl flex justify-center items-center"
      >
        <SwiperSlide 
          v-for="rubro in rubros"
          :key="rubro.id"
          class="flex justify-center items-center"
        >
          <div
            class="relative w-full aspect-[3/5] rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer bg-center bg-cover flex items-end justify-center"
            :style="`background-image: url('${rubro.cover}')`"
            @click="openSlide(rubro)"
          >
            <div class="bg-black/60 backdrop-blur-sm text-white text-lg p-2 rounded-b-2xl w-full text-center">
              {{ t(`workShowcase.rubros.${rubro.nameKey}`) }}
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <!-- Contenedor del swiper de items -->
      <div 
        v-if="selectedRubro" 
        class="mt-8 px-4 max-w-5xl mx-auto animate-fade-in"
      >
        <h3 class="font-abel text-4xl font-bold text-gray-100 mb-4">
          {{ t(`workShowcase.rubros.${selectedRubro.nameKey}`) }}
        </h3>

        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="20"
          navigation
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          class="w-full"
        >
          <SwiperSlide
            v-for="(item, index) in selectedRubro.items"
            :key="index"
            class="bg-white rounded-lg shadow-lg"
          >
            <div
              class="relative w-full aspect-[3/5] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer bg-center bg-cover flex items-end justify-center"
              :style="`background-image: url('${item.image}')`"
            >
              <div class="bg-black/60 backdrop-blur-sm text-white text-lg p-2 rounded-b-lg w-full text-center">
                {{ t(`workShowcase.captions.${selectedRubro.id}.${item.captionKey}`) }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'

// Modal y componentes por rubros
import Rubros from "./Rubros.vue"


const { t } = useI18n()

const selectedRubro = ref(null)

const rubros = [
  {
    id: "industrial",
    nameKey: "industrial",
    cover: "/src/assets/showcases/industrial/industrialProducts.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/showcases/industrial/industrial_4.jpeg",
        captionKey: "industrial_4",
      },
      {
        image: "/src/assets/showcases/industrial/industrial_3.jpeg",
        captionKey: "industrial_3",
      },
      {
        image: "/src/assets/showcases/industrial/industrial_1.jpeg",
        captionKey: "industrial_1",
      },
        {
        image: "/src/assets/showcases/industrial/industrial_5.jpeg",
        captionKey: "industrial_5",
      },
      {
        image: "/src/assets/showcases/industrial/industrial_2.jpeg",
        captionKey: "industrial_2",
      },
      {
        image: "/src/assets/showcases/industrial/screw_2.jpeg",
        captionKey: "screw_2",
      },
    ]
  },
  {
    id: "garden",
    nameKey: "garden",
    cover: "/src/assets/showcases/garden/maceta_especial.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/showcases/garden/maceta_1.jpeg",
        captionKey: "maceta_1",
      },
      {
        image: "/src/assets/showcases/garden/maceta_2.jpeg",
        captionKey: "maceta_2",
      },
      {
        image: "/src/assets/showcases/garden/maceta_3.jpeg",
        captionKey: "maceta_3",
      },
      {
        image: "/src/assets/showcases/garden/maceta_4.jpeg",
        captionKey: "maceta_4",
      },
      {
        image: "/src/assets/showcases/garden/maceta_especial.jpeg",
        captionKey: "maceta_especial",
      },
      {
        image: "/src/assets/showcases/garden/maceta_lisa.jpeg",
        captionKey: "maceta_lisa",
      },
      {
        image: "/src/assets/showcases/garden/plato_mediano.jpeg",
        captionKey: "plato_mediano",
      },
      {
        image: "/src/assets/showcases/garden/plato_mediano_2.jpeg",
        captionKey: "plato_mediano_2",
      },
      {
        image: "/src/assets/showcases/garden/macetax9.jpeg",
        captionKey: "macetax9",
      },
      {
        image: "/src/assets/showcases/garden/florero.jpeg",
        captionKey: "florero",
      },
    ]
  },
  {
    id: "deco",
    nameKey: "deco",
    cover: "/src/assets/showcases/deco/coffeSign.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/showcases/deco/coffe2D.jpeg",
        captionKey: "coffe2D",
      },
      {
        image: "/src/assets/showcases/deco/deco_1.jpeg",
        captionKey: "deco_1",
      },
      {
        image: "/src/assets/showcases/deco/deco_2.jpeg",
        captionKey: "deco_2",
      },
    ]
  },
  {
    id: "products",
    nameKey: "products",
    cover: "/src/assets/showcases/products/coffeProducts.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/showcases/products/product_1.jpeg",
        captionKey: "product_1",
      },
      {
        image: "/src/assets/showcases/products/product_2.jpeg",
        captionKey: "product_2",
      },
            {
        image: "/src/assets/showcases/products/product_3.jpeg",
        captionKey: "product_3",
      },
    ]
  },
    {
    id: "office",
    nameKey: "office",
    cover: "/src/assets/showcases/office/officeProducts.jpeg",
    component: Rubros,
    items:[
      {
        image: "/src/assets/showcases/office/officeProducts.jpeg",
        captionKey: "officeProducts",
      },
    ]
  },
];

function openSlide(rubro) {
  // Si ya está seleccionado, lo cerramos
  if (selectedRubro.value?.id === rubro.id) {
    selectedRubro.value = null;
  } else {
    selectedRubro.value = rubro;
  }
}
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

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.swiper-button-disabled {
  opacity: 0.3;
  pointer-events: none;
}
</style>
