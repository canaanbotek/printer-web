<template>
  <section
    id="about"
    class="flex flex-col items-center justify-center p-5 py-20">

    <!-- Sección de título y descripción -->
    <div class="text-center mb-10">
      <h1 class="text-gray-900 text-4xl font-bold mb-4 relative">
        Nuestro Equipo
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
      </h1>
      <p class="text-lg text-gray-900">
        Somos un equipo de ingenieros electrónicos con experiencia en la industria,
        apasionados por la impresión 3D y comprometidos con la excelencia.
        Contamos con un amplio criterio y determinación para abordar cualquier
        necesidad, garantizando soluciones innovadoras y de alta calidad para cada
        proyecto.
      </p>
    </div>

    <!-- Contenedor de las tarjetas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl px-4">
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <img :src="member.image" :alt="member.name" class="w-48 h-48 mx-auto rounded-full object-cover shadow-md" />
        <h3 class="text-xl font-semibold mt-4 text-gray-900">{{ member.name }}</h3>
        <p class="text-gray-600 mt-2">{{ member.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  { 
    name: "Federico Delgado",
    image: "/src/assets/team/member1.jpg",
    description: "Especialista en modelado e impresión 3D. Innovador y perfeccionista en cada proyecto."
  },
  { 
    name: "Pedro Rosito",
    image: "/src/assets/team/member2.jpg",
    description: "Encargado de logística y calidad. Se asegura de que todo llegue en perfectas condiciones."
  },
  { 
    name: "Christian Canaan",
    image: "/src/assets/team/member3.jpg",
    description: "Atención al cliente y soporte técnico. Siempre listo para resolver tus dudas."
  }
];
</script>

<style>
.line {
  content: "";
  display: block;
  width: 20%; /* Configura el largo de la línea */
  height: 4px; /* Grosor de la línea */
  background-color: #28a745; /* Color verde */
  position: absolute;
  bottom: -15px; /* Ajusta la distancia entre el texto y la línea */
  left: 50%; /* Establece la posición inicial en el centro */
  transform: translateX(-50%); /* Desplaza la línea hacia la izquierda para centrarla */
}
</style>