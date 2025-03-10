<template>
  <section
    id="work"
    class="min-h-screen flex flex-col justify-center items-center py-20"
  >
    <!-- Sección de Título y Descripción -->
    <div class="text-center mb-10">
      <h1 class="text-gray-900 text-4xl font-bold mb-4 relative">
        Soluciones impresas en 3D
        <!-- Línea verde debajo del h1 -->
        <span class="line"></span>
      </h1>
      <p class="text-lg text-gray-900">
        Nuestro servicio de impresión 3D le ayudará a fabricar cualquier tipo de pieza en un plazo de entrega rápido. 
        Dada la excelente calidad de nuestras impresoras, 
        podemos cumplir con la entrega de piezas de la más alta calidad en cuestión de días. Ademas de contar con una 
        amplia diversidad de materiales para trabajar.
      </p>
    </div>

    <!-- Contenedor de Tarjetas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl px-4">
      <div
        v-for="(work, index) in workItems"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        @click="openImage(work.image)"
      >
        <!-- Título de la tarjeta -->
        <h3 class="text-lg font-semibold mt-4 text-gray-900">{{ work.title }}</h3>

        <!-- Imagen de la tarjeta -->
        <img :src="work.image" :alt="work.title" class="w-full h-64 object-cover rounded-md mt-4" />

        <!-- Descripción de la tarjeta -->
        <p class="text-sm text-gray-700 mt-2">{{ work.description }}</p>
      </div>
    </div>

    <!-- Modal para ver imagen en grande -->
    <div v-if="selectedImage" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4" @click="closeImage">
      <div class="relative">
        <img :src="selectedImage" class="max-w-full max-h-screen rounded-lg shadow-lg" @click.stop />
        <button class="absolute top-2 right-2 text-white text-3xl font-bold" @click="closeImage">&times;</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const workItems = [
  {
    title: "PC-ABS",
    image: "/src/assets/housing.jpeg",
    description: "Este es un ejemplo de housing personalizado, ideal para componentes electrónicos."
  },
  {
    title: "PLA",
    image: "/src/assets/lamp.jpeg",
    description: "Lámpara de diseño único, perfecta para ambientes modernos."
  },
  {
    title: "PLA-ESPECIALS",
    image: "/src/assets/macetas.jpeg",
    description: "Macetas personalizadas para decoración de interiores y exteriores."
  },
  {
    title: "ABS",
    image: "/src/assets/housing.jpeg",
    description: "Soportes para una variedad de dispositivos, desde cámaras hasta antenas."
  },
  {
    title: "TPU",
    image: "/src/assets/housing.jpeg",
    description: "Elementos decorativos únicos creados con materiales de alta calidad."
  },
  {
    title: "Nylon",
    image: "/src/assets/housing.jpeg",
    description: "Prototipos funcionales diseñados para pruebas y demostraciones."
  },
  {
    title: "PET-CF",
    image: "/src/assets/housing.jpeg",
    description: "Módulos modulares que se adaptan a diferentes tipos de proyectos."
  },
  {
    title: "ASA",
    image: "/src/assets/housing.jpeg",
    description: "Caja de herramientas personalizada para uso profesional o doméstico."
  },
  {
    title: "PETG",
    image: "/src/assets/housing.jpeg",
    description: "Estuche a medida para proteger componentes electrónicos sensibles."
  }
];

const selectedImage = ref<string | null>(null);

const openImage = (image: string) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};

// Cerrar con tecla ESC
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeImage();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
/* Estilos para el título y la descripción */
h2 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Estilo para las tarjetas */
.card img {
  object-fit: cover;
  height: 200px;
}

.card p {
  font-size: 0.9rem;
  color: #666;
}

/* Modal para ver imagen */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.line {
  content: "";
  display: block;
  width: 10%; /* Configura el largo de la línea */
  height: 4px; /* Grosor de la línea */
  background-color: #28a745; /* Color verde */
  position: absolute;
  bottom: -15px; /* Ajusta la distancia entre el texto y la línea */
  left: 50%; /* Establece la posición inicial en el centro */
  transform: translateX(-50%); /* Desplaza la línea hacia la izquierda para centrarla */
}

</style>
