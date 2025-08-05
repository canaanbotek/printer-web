<template>
  <section
    id="printers"
    class="relative w-full min-h-screen bg-black flex justify-center bg-no-repeat bg-cover bg-center p-5"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="relative z-10 px-6 w-full max-w-5xl">

      <!-- Título sin fondo blur -->
      <h1 class="font-abel text-6xl font-bold text-gray-100 mb-4">
        {{ $t("printers.title") }}
      </h1>

      <!-- Texto con fondo blur -->
      <div class="bg-black/60 backdrop-blur-md p-6 rounded-xl">
        <p class="font-abel text-xl text-gray-100">
          {{ $t("printers.description") }}
        </p>
      </div>
      
    </div>

    <!-- Overlay opcional para oscurecer imagen -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/creality1.jpg"; // Cambia a tu imagen preferida

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
