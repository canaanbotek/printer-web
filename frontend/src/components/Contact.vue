<template>
    <section id="partners" class="flex flex-col relative items-center mb-20">

      <!-- Título y descripción -->
      <div class="text-center max-w-5xl px-4 mb-10">
        <h2 class="font-abel text-4xl font-bold text-gray-900">{{ $t("contact.title") }}</h2>
        <span class="block w-1/4 h-1 bg-green-500 mx-auto mt-2"></span>
        <p class="font-abel text-xl text-gray-700 mt-4">
          ¿Listo para llevar tus proyectos industriales al siguiente nivel? En 3DIndustry, estamos ansiosos por
        escuchar tus ideas y desafíos. Completa el formulario a continuación y un miembro de nuestro equipo se pondrá
        en contacto a la brevedad. Ya sea porque necesites prototipos rápidos, piezas finales personalizadas o asesoramiento especial
        en impresión 3D, estamos aquí para ayudarte a hacer realidad tus proyectos con precisión y eficiencia.
        ¡Contáctanos hoy y descubre cómo podemos transformar tus conceptos en soluciones tangibles!
        </p>
      </div>

    <!-- Formularios -->
    <div class="text-center bg-white text-white w-4/5 mx-auto">
      <form @submit.prevent="submitForm" class="flex flex-col mx-auto space-y-4">
        <input 
          v-model="email" 
          type="email" 
          :placeholder="$t('contact.emailPlaceholder')" 
          required 
          class="font-abel p-2 bg-white text-black border border-gray-300 rounded w-full"
        />
        <textarea 
          v-model="message" 
          :placeholder="$t('contact.messagePlaceholder')" 
          required 
          class="font-abel p-2 bg-white text-black border border-gray-300 rounded w-full h-32"
        ></textarea>
        <button type="submit" class="font-abel bg-blue-800 text-white p-2 rounded w-full">
          {{ $t("contact.sendButton") }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const email = ref("");
const message = ref("");

const submitForm = async () => {
  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      body: JSON.stringify({ email: email.value, message: message.value }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(t("contact.sendButton") + " ✅");
      email.value = "";
      message.value = "";
    } else {
      alert("Error al enviar el mensaje ❌");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("No se pudo enviar el mensaje.");
  }
};
</script>

<style>

</style>