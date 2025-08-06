<template>
  <section
    id="whyus"
    class="relative p-10 w-full bg-cover bg-center"
    style="background-image: url('/src/assets/printers1.jpg');"
  >
    <!-- Título -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-left mb-10">
      <h1 class="font-abel text-gray-100 text-6xl font-bold">
        {{ $t("whyus.title") }}
      </h1>
    </div>

    <!-- Texto con fondo negro y blur -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
      <div class="bg-black/80 backdrop-blur-sm rounded-lg p-6 space-y-8">
        <div v-for="(item, index) in reasons" :key="index">
          <h3 class="font-abel text-2xl font-bold text-gray-100">
            {{ t(`whyus.${reasons[index].keyTitle}`) }}
          </h3>
          <p class="font-abel text-xl text-gray-300 mt-2">
            {{ t(`whyus.${reasons[index].keyDescription}`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const reasons = [
  { keyTitle: "titleOne", keyDescription: "descriptionOne" },
  { keyTitle: "titleTwo", keyDescription: "descriptionTwo" },
  { keyTitle: "titleThree", keyDescription: "descriptionThree" }
]
</script>
