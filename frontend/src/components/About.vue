<template>
  <section id="about" class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 py-20 relative">
    <!-- Contenedor de las tarjetas -->
    <div class="flex flex-wrap justify-center gap-8 max-w-5xl relative">
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-4 w-80 min-w-[250px] max-w-[320px] text-center transform transition-transform duration-300 hover:scale-105"
      >
        <img :src="member.image" :alt="member.name" class="w-128 h-128 mx-auto rounded object-cover" />
        <h3 class="text-xl font-semibold mt-4">{{ member.name }}</h3>
        <p class="text-gray-600">{{ member.description }}</p>
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
