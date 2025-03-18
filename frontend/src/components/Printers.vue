<template>
  <section id="printers" class=" flex items-center p-5 mb-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Columna de la imagen (Tarjeta sin texto) -->
      <div class="flex justify-center">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <img :src="backgroundImage" alt="Impresora 3D" class="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      <!-- Columna del texto -->
      <div class="text-left max-w-lg">
        <h1 class="font-abel text-4xl font-bold text-gray-900 mb-4 relative">
          {{ $t("printers.title") }}
          <span class="block w-1/2 h-1 bg-green-500 mt-3 mb-3"></span>
        </h1>
        <p class="font-abel text-xl text-gray-700 bg-slate-200 p-4 rounded-xl">
          {{ $t("printers.description") }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/k1c-complete.png";
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>
