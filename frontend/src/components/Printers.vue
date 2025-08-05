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
        <h1 class="font-inter text-2xl font-bold text-gray-900 mb-4 relative">
          {{ $t("printers.title") }}
        </h1>
        <p class="font-inter text-xl text-gray-700 bg-slate-100 p-4 rounded-xl">
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
