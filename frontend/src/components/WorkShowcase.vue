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
        
        <p class="font-abel text-xl text-gray-400 mt-4">
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
            @click="openModal(rubro)"
          >
            <div class="bg-black/60 backdrop-blur-sm text-white text-lg p-2 rounded-b-2xl w-full text-center">
              {{ rubro.name }}
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <!-- Contenedor del swiper de items (nuevo) -->
      <div 
        v-if="selectedRubro" 
        class="mt-8 px-4 max-w-5xl mx-auto animate-fade-in"
      >
        <h3 class="text-2xl font-bold text-gray-100 mb-4">
          {{ selectedRubro.name }}
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
            class="bg-white rounded-lg p-4 shadow-lg"
          >
            <img
              :src="item.image"
              :alt="item.caption"
              class="w-full h-64 object-contain mb-2"
              loading="lazy"
            />
            <p class="text-gray-700 text-center">
              {{ item.caption }}
            </p>
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
    name: "Industrial",
    cover: "/src/assets/showcases/industrial/industrialProducts.jpeg",
    component: Rubros,
    items: [
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
    ]
  },
  {
    id: "garden",
    name: "Garden",
    cover: "/src/assets/showcases/garden/maceta_especial.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/materials/pla.png",
        caption: "Housing resistente hecho en PC-ABS para maquinaria pesada.",
      },
      {
        image: "/img/rubros/industrial2.jpg",
        caption: "Soporte de ABS para motor lineal.",
      },
      {
        image: "/img/rubros/industrial3.jpg",
        caption: "Pieza estructural impresa en PETG con tolerancias ajustadas.",
      },
    ]
  },
  {
    id: "deco",
    name: "Decorativos",
    cover: "/src/assets/showcases/deco/coffeSign.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/materials/pla.png",
        caption: "Housing resistente hecho en PC-ABS para maquinaria pesada.",
      },
      {
        image: "/img/rubros/industrial2.jpg",
        caption: "Soporte de ABS para motor lineal.",
      },
      {
        image: "/img/rubros/industrial3.jpg",
        caption: "Pieza estructural impresa en PETG con tolerancias ajustadas.",
      },
    ]
  },
  {
    id: "products",
    name: "Productos",
    cover: "/src/assets/showcases/products/coffeProducts.jpeg",
    component: Rubros,
    items: [
      {
        image: "/src/assets/showcases/products/coffeProducts.jpeg",
        caption: "Insumos de cafeteria.",
      },
    ]
  },
    {
    id: "office",
    name: "Office",
    cover: "/src/assets/showcases/office/officeProducts.jpeg",
    component: Rubros,
    items:[
      {
        image: "/src/assets/showcases/office/officeProducts.jpeg",
        caption: "Detalles de oficina.",
      },
    ]
  },
];

function openModal(rubro) {
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
