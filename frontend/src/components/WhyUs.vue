<template>
  <section id="whyus" class="p-5 w-full mb-20">
    <div class="container mx-auto px-8 md:px-16">
      <!-- Título de la sección -->
      <div class="text-center mb-10">
        <h1 class="font-abel text-gray-100 text-4xl font-bold mb-4 relative">
          {{ $t("whyus.title") }}
          
        </h1>
      </div>

      <!-- Contenido de la sección -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Columna de texto -->
        <div class="space-y-8">
          <div v-for="(item, index) in reasons" :key="index">
            <h3 class="font-abel text-2xl font-bold text-gray-100">{{ t(`whyus.${reasons[index].keyTitle}`) }}</h3>
            <p class="font-abel text-xl text-gray-400 mt-2">{{ t(`whyus.${reasons[index].keyDescription}`) }}</p>
          </div>
        </div>

        <!-- Columna de imagen -->
        <div class="flex justify-center">
          <img :src="image" alt="Por qué elegirnos" class="w-full max-w-lg object-cover rounded-lg shadow-lg p-5" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const reasons = [
  {
    keyTitle: "titleOne",
    keyDescription: "descriptionOne"
  },
  {
    keyTitle: "titleTwo",
    keyDescription: "descriptionTwo"
  },
  {
    keyTitle: "titleThree",
    keyDescription: "descriptionThree"
  }
];

const image = "/src/assets/why-us.png"
</script>
  
<style>

</style>