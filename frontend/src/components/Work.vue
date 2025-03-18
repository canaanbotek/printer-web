<template>
  <section
    id="work"
    class=" flex flex-col justify-center items-center p-5 mb-20"
  >
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

    <!-- Contenedor de Tarjetas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl px-4">
      <div
        v-for="(work, index) in workItems"
        :key="index"
        class="rounded-lg shadow-lg p-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        @click="openImage(work.image)"
      >
        <!-- Título de la tarjeta -->
        <h3 class="font-abel text-2xl font-semibold mt-4 text-gray-900">{{ t(`work.${work.key}Title`) }}</h3>

        <!-- Imagen de la tarjeta -->
        <img :src="work.image" :alt="t(`work.${work.key}Title`)" class="w-full h-64 object-cover mt-4" />

        <!-- Descripción de la tarjeta -->
        <p class="font-abel text-xl text-gray-700 p-2">{{ t(`work.${work.key}Description`) }}</p>
      </div>
    </div>


    <!-- Modal para ver imagen en grande -->
    <div v-if="selectedImage" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4" @click="closeImage">
      <div class="relative">
        <img :src="selectedImage" class="max-w-full max-h-screen rounded-lg shadow-lg" @click.stop />
        <button class="absolute top-2 right-2 text-white text-3xl font-bold" @click="closeImage">&times;</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const workItems = [
  { key: "pcbAbs", image: "/src/assets/housing.jpeg" },
  { key: "pla", image: "/src/assets/lamp.jpeg" },
  { key: "plaEspecial", image: "/src/assets/macetas.jpeg" },
  { key: "abs", image: "/src/assets/housing.jpeg" },
  { key: "tpu", image: "/src/assets/housing.jpeg" },
  { key: "nylon", image: "/src/assets/housing.jpeg" },
  { key: "petCf", image: "/src/assets/housing.jpeg" },
  { key: "asa", image: "/src/assets/housing.jpeg" },
  { key: "petg", image: "/src/assets/housing.jpeg" }
];

const selectedImage = ref<string | null>(null);

const openImage = (image: string) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};

// Cerrar con tecla ESC
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeImage();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>

/* Estilo para las tarjetas */
.card img {
  object-fit: cover;
  height: 200px;
}

/* Modal para ver imagen */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
