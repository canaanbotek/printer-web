<template>
  <section
    class="py-16"
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
        :modules="[Autoplay, Navigation]"
        :loop="true"
        :space-between="20"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
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

      <!-- Modal -->
      <RubroModal
        v-if="selectedRubro"
        :id="selectedRubro"
        @close="selectedRubro = null"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

// Modal y componentes por rubros
import RubroModal from "./RubroModal.vue";
import Industrial from "./rubro/Industrial.vue";
import Garden from "./rubro/Garden.vue";
import Deco from "./rubro/Deco.vue";
import Products from "./rubro/Products.vue";
import Office from "./rubro/Office.vue";

const { t } = useI18n();

const selectedRubro = ref(null);

const rubros = [
  {
    id: "industrial",
    name: "Industrial",
    cover: "/src/assets/showcases/industrial/industrialProducts.jpeg",
    component: Industrial,
  },
  {
    id: "garden",
    name: "Garden",
    cover: "/src/assets/showcases/garden/maceta_especial.jpeg",
    component: Garden,
  },
  {
    id: "deco",
    name: "Decorativos",
    cover: "/src/assets/showcases/deco/coffeSign.jpeg",
    component: Deco,
  },
  {
    id: "products",
    name: "Productos",
    cover: "/src/assets/showcases/products/coffeProducts.jpeg",
    component: Products,
  },
    {
    id: "office",
    name: "Office",
    cover: "/src/assets/showcases/office/officeProducts.jpeg",
    component: Office,
  },
];

function openModal(rubro) {
  selectedRubro.value = rubro.id;
  console.log("Rubro elegido:", rubro.id)
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
</style>
