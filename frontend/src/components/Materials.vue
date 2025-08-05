<template>
  <section 
    id="materials"
    class="flex flex-col items-center p-5 w-full mb-10"
    style="background: linear-gradient(to bottom, #464444, #1a1a1a, #2a2a2a, #3a3a3a, #444444);">

    <!-- Título y descripción -->
    <div class="text-center max-w-5xl px-4 mb-10">
      <h1 class="font-abel text-8xl font-bold text-gray-100">{{ $t("materials.title") }}</h1>
      <p class="font-abel text-3xl text-gray-400 mt-4">
        {{ $t("materials.description") }}
      </p>
    </div>

    <!-- Materiales en orden alternado con alineación desde el centro -->
    <div
      v-for="(material, index) in displayedMaterials"
      :key="index"
      class="w-full flex flex-col md:flex-row items-center justify-center mb-8"
      :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
    >
      <!-- Nombre del material -->
      <div
        class="w-full md:w-1/2 flex justify-center px-4"
        :class="index % 2 === 0 ? 'pr-8 md:justify-end' : 'pl-8 md:justify-start'"
      >
        <h2
      class="font-abel text-[12vw] md:text-[8vw] font-bold uppercase tracking-wider leading-tight text-transparent bg-clip-text text-left"
      :style="{
        backgroundImage: 'linear-gradient(to right, #A79986, #432123, #803E2F, #A79986)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }"
    >
      {{ material.name }}
    </h2>
  </div>

  <!-- Descripción -->
  <div
    class="w-full md:w-1/2 flex justify-center px-4"
    :class="index % 2 === 0 ? 'pl-8 md:justify-start' : 'pr-8 md:justify-end'"
  >
    <p class="font-abel text-xl text-gray-300 mt-4 max-w-[500px] text-justify">
      {{ t(`materials.${material.key}Description`) }}
    </p>
  </div>
</div>



  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const displayedMaterials = [
  {
    name: "PLA",
    key: "pla",
    image: "/src/assets/materials/pla.png"
  },
  {
    name: "PETG",
    key: "petg",
    image: "/src/assets/materials/petg.jpg"
  },
  {
    name: "ABS",
    key: "abs",
    image: "/src/assets/materials/abs.jpg"
  },
  {
    name: "ASA",
    key: "asa",
    image: "/src/assets/materials/asa.jpeg"
  },
  {
    name: "PA",
    key: "pa",
    image: "/src/assets/materials/pa-nylon.jpeg"
  },
  {
    name: "PC-ABS",
    key: "pcAbs",
    image: "/src/assets/materials/pc-abs.jpg"
  },
  {
    name: "TPU",
    key: "tpu",
    image: "/src/assets/materials/tpu_material.png"
  },
  {
    name: "PLA-CF",
    key: "plaCf",
    image: "/src/assets/materials/pla-cf.jpg"
  },
]
</script>