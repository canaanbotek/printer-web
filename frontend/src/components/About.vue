<template>
  <section
    id="about"
    class="flex flex-col items-center justify-center p-5 mb-20">

    <!-- Sección de título y descripción -->
    <div class="text-center mb-10">
      <h1 class="font-abel text-gray-100 text-4xl font-bold mb-4 relative">
        {{ $t("about.title") }}
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
      </h1>
      <p class="font-abel text-xl text-gray-100">
        {{ $t("about.description") }}
      </p>
    </div>

    <!-- Contenedor de las tarjetas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl px-4">
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="bg-black/50 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <img :src="member.image" class="w-48 h-48 mx-auto rounded-full object-cover shadow-md" />
        <h3 class="font-abel text-2xl font-semibold mt-4 text-gray-100">{{ t(`about.${teamMembers[index].keyTitle}`) }}</h3>
        <p class="font-abel text-xl text-gray-600 mt-2">{{ t(`about.${teamMembers[index].keyDescription}`) }}</p>
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