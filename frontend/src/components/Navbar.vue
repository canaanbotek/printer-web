<template>
  <nav class="bg-gray-200 text-gray-600 fixed w-full top-0 left-0 z-50 shadow-md">
    <div class="max-w-screen-xl mx-auto p-1 flex justify-between items-center">
    
      <!-- Logo / home -->
      <a href="#home">
        <span><img src="../assets/icono1.png" alt="Trabajo 1" class="w-40"/></span>
      </a>
      
      <!-- Menú -->
      <ul class="hidden xl:flex space-x-6">
        <li><a href="#home" class="hover:text-gray-400">{{ $t("navbar.home") }}</a></li>
        <li><a href="#materials" class="hover:text-gray-400">{{ $t("navbar.materials") }}</a></li>
        <li><a href="#printers" class="hover:text-gray-400">{{ $t("navbar.printers") }}</a></li>
        <li><a href="#whyus" class="hover:text-gray-400">{{ $t("navbar.whyus") }}</a></li>
        <li><a href="#work" class="hover:text-gray-400">{{ $t("navbar.work") }}</a></li>
        <li><a href="#about" class="hover:text-gray-400">{{ $t("navbar.about") }}</a></li>
        <li><a href="#partners" class="hover:text-gray-400">{{ $t("navbar.partners") }}</a></li>
        <li><a href="#contact" class="hover:text-gray-400">{{ $t("navbar.contact") }}</a></li>
      </ul>

      <!-- Selector de idioma -->
      <select v-model="$i18n.locale" class="bg-gray-200 text-gray-900 p-1 rounded">
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
  