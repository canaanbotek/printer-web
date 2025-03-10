<template>
    <footer class="bg-gray-900 text-white py-6">
      <div class="container mx-auto px-6">
        <!-- Redes Sociales -->
        <div class="flex justify-center space-x-6 mb-4">
          <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank" class="hover:text-gray-400">
            <component :is="social.icon" class="w-6 h-6" />
          </a>
        </div>
  
        <!-- Links importantes -->
        <div class="flex flex-wrap justify-center space-x-6 text-sm mb-4">
          <a href="/politicas-de-privacidad" class="hover:underline">Política de Privacidad</a>
          <a href="/terminos-y-condiciones" class="hover:underline">Términos y Condiciones</a>
          <a href="/contacto" class="hover:underline">Contacto</a>
        </div>
  
        <!-- Derechos de Autor -->
        <div class="text-center text-xs opacity-75">
          &copy; {{ new Date().getFullYear() }} 3DIndustry. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { h } from "vue";
  import { Facebook, Instagram, Twitter, Linkedin } from "lucide-vue-next";
  
  const socialLinks = [
    { icon: h(Facebook), url: "https://facebook.com" },
    { icon: h(Instagram), url: "https://instagram.com" },
    { icon: h(Twitter), url: "https://twitter.com" },
    { icon: h(Linkedin), url: "https://linkedin.com" },
  ];
  </script>
  
  <style scoped>
  /* Estilos adicionales si los necesitas */
  </style>
  