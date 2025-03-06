<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Work />
    <Printers />
    <Partners />
    <Contact />
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

// Definir un ref tipado para la sección actual
const currentSection = ref<string>("");

// Función para manejar el scroll y cambiar el fondo
const handleScroll = () => {
  const sections: string[] = ["home", "about", "work", "printers", "partners", "contact"];

  for (let i = 0; i < sections.length; i++) {
    const section = document.getElementById(sections[i]);
    if (!section) continue;

    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      currentSection.value = sections[i];
      document.body.style.backgroundColor = `hsl(${i * 60}, 70%, 50%)`;
    }
  }
};

// Agregar el evento de scroll cuando el componente se monta
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

