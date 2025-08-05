<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-4 text-center">

      <!-- Título y descripción -->
      <div class="text-center max-w-5xl px-4 mb-10">
        <h1 class="font-abel text-4xl font-bold text-gray-100">{{ t("workShowcase.title") }}</h1>
        
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
        class="w-full max-w-7xl flex justify-center items-center"
      >
        <SwiperSlide 
          v-for="rubro in rubros"
          :key="rubro.id"
          class="flex justify-center items-center h-48"
        >
          <div
            class="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all cursor-pointer"
            @click="openModal(rubro)"
          >
            <h3 class="text-lg fofont-bold text-gray-100 p-1">{{ rubro.name }}</h3>
            <img
              :src="rubro.cover"
              :alt="rubro.name"
              class="h-48 w-full object-cover rounded-xl mb-4"
            />
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

const { t } = useI18n();

const selectedRubro = ref(null);

const rubros = [
  {
    id: "industrial",
    name: "Industrial",
    cover: "/src/assets/showcases/industrial/engranaje_1.jpeg",
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
    cover: "/src/assets/showcases/deco/coffe2D.jpeg",
    component: Deco,
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
