<template>
  <div class="bg-white w-full ">
    <Navbar />
    <Home class="scroll-mt-20"/>
    <Materials class="scroll-mt-10"/>
    <Printers class="scroll-mt-10"/>
    <WhyUs class="scroll-mt-10"/>
    <Work class="scroll-mt-10"/>
    <About class="scroll-mt-10"/>
    <Partners class="scroll-mt-10"/>
    <Contact class="scroll-mt-10"/>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Printers from "./components/Printers.vue";
import Partners from "./components/Partners.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Materials from "./components/Materials.vue";
import WhyUs from "./components/WhyUs.vue";

// Definir un ref tipado para la sección actual
const currentSection = ref<string>("home");

</script>

<style>
body, html {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>