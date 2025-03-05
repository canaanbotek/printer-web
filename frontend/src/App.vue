<template>
  <div>
    <Home />
    <About />
    <Work />
    <Printers />
    <Partners />
    <Contact />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Printers from "./components/Printers.vue";
import Partners from "./components/Partners.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    Home,
    About,
    Work,
    Printers,
    Partners,
    Contact,
  },
  setup() {
    const currentSection = ref("");

    onMounted(() => {
      window.addEventListener("scroll", () => {
        const sections = ["home", "about", "work", "printers", "partners", "contact"];
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection.value = sections[i];
            document.body.style.backgroundColor = `hsl(${i * 60}, 70%, 50%)`;
          }
        }
      });
    });

    return { currentSection };
  },
};
</script>
