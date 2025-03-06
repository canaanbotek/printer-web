<template>
  <section id="about" class="h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 p-6">
    <div class="flex flex-wrap justify-center gap-8 max-w-5xl w-full">
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-4 w-full sm:w-80 md:w-96 lg:w-[28rem] text-center transform transition-transform duration-300 hover:scale-105"
      >
        <img :src="member.image" :alt="member.name" class="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-lg object-cover" />
        <h3 class="text-lg md:text-xl font-semibold mt-4">{{ member.name }}</h3>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">
          {{ member.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  { name: "Federico Delgado",
    image: "/src/assets/team/member1.jpg",
    description: "Especialista en modelado e impresión 3D. Terrible fantasma, se las cree todas." },
  { name: "Pedro Rosito",
    image: "/src/assets/team/member2.jpg",
    description: "Encargado de logística y calidad. Terrible hijo de puta, se cree mino pero tiene un caniche." },
  { name: "Christian Canaan",
    image: "/src/assets/team/member3.jpg",
    description: "Atención al cliente y soporte técnico. Un crack adelantado a su época, otro terrible hijo de puta." },
]
</script>
