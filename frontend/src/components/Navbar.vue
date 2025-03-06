<template>
  <nav class="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
    <div class="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
    
      <!-- Logo / home -->
      <a href="#home" class="text-2xl font-bold">Impresión 3D</a>
      
      <!-- Menú -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#home" class="hover:text-gray-400">{{ $t("navbar.home") }}</a></li>
        <li><a href="#about" class="hover:text-gray-400">{{ $t("navbar.about") }}</a></li>
        <li><a href="#work" class="hover:text-gray-400">{{ $t("navbar.work") }}</a></li>
        <li><a href="#printers" class="hover:text-gray-400">{{ $t("navbar.printers") }}</a></li>
        <li><a href="#partners" class="hover:text-gray-400">{{ $t("navbar.partners") }}</a></li>
        <li><a href="#contact" class="hover:text-gray-400">{{ $t("navbar.contact") }}</a></li>
      </ul>

      <!-- Selector de idioma -->
      <select v-model="$i18n.locale" class="bg-gray-800 text-white p-1 rounded">
        <option value="es">🇪🇸 Español</option>
        <option value="en">🇬🇧 English</option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
</script>

  
<style scoped>
/* Estilos adicionales si se lo requiere */
</style>
  