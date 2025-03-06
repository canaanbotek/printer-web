<template>
  <section
    id="home"
    class="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <h1 class="text-gray-900 text-4xl bg-white bg-opacity-50 p-2 rounded-lg">
      Brindando el mejor servicio de impresión
    </h1>
  </section>
</template>

<script setup lang="ts">
import backgroundImage from "../assets/fondo2.jpeg"
</script>
