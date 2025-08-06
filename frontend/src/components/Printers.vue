<template>
  <section
    id="printers"
    class="relative w-full bg-black flex justify-center bg-no-repeat bg-cover bg-center p-5"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay opcional para oscurecer imagen -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Contenedor principal dividido verticalmente -->
    <div class="relative z-10 w-full max-w-5xl mx-auto flex flex-col h-full">

      <!-- Título (mitad superior) -->
      <div class="flex-1 flex items-center justify-center pb-20 pt-10">
        <h1 class="font-abel text-6xl font-bold text-gray-100">
          {{ $t("printers.title") }}
        </h1>
      </div>

      <!-- Descripción (mitad inferior) -->
      <div class="flex-1 flex items-center justify-end pt-20 mt-10">
        <div class="w-full bg-black/60 backdrop-blur-md p-6 rounded-xl">
          <p class="font-abel text-xl text-gray-100">
            {{ $t("printers.description") }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/printers/creality1.jpg";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>


