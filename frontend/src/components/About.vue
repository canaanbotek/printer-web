<template>
  <section
    id="about"
    class="relative flex flex-col items-center justify-center py-16 bg-no-repeat bg-cover bg-center"
    style="background: linear-gradient(to bottom, #1a1a1a, #2a2a2a, #3a3a3a, #2a2a2a, #2a2a2a, #1a1a1a);">
    
    <!-- Overlay oscuro para mejorar legibilidad -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 text-center">
      <!-- Título y descripción -->
      <div class="text-left max-w-5xl px-4 mb-10">
        <h1 class="font-abel text-6xl font-bold text-gray-100">{{ $t("about.title") }}</h1>
        <p class="font-abel text-xl text-gray-200 mt-4">
          {{ $t("about.description") }}
        </p>
      </div>

      <!-- Tarjetas del equipo -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl px-4">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="bg-black/70 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img :src="member.image" class="w-48 h-48 mx-auto rounded-full object-cover shadow-md" />
          <h3 class="font-abel text-2xl font-semibold mt-4 text-gray-100">{{ t(`about.${member.keyTitle}`) }}</h3>
          <p class="font-abel text-xl text-gray-400 mt-2">{{ t(`about.${member.keyDescription}`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const teamMembers = [
  {
    keyTitle: "aboutNameOne",
    image: "/src/assets/team/member1.jpg",
    keyDescription: "aboutDescriptionOne"
  },
  {
    keyTitle: "aboutNameTwo",
    image: "/src/assets/team/member2.jpg",
    keyDescription: "aboutDescriptionTwo"
  },
  {
    keyTitle: "aboutNameThree",
    image: "/src/assets/team/member3.jpg",
    keyDescription: "aboutDescriptionThree"
  }
];
</script>

<style>

</style>