<template>
    <section id="partners" class="h-screen flex flex-col justify-center items-center relative p-16">

    <!-- Sección de Título y Descripción -->
    <div class="text-center mb-10">
      <h1 class="text-gray-900 text-4xl font-bold mb-4 relative">
        {{ $t("contact.title") }}
        <!-- Línea verde debajo del h1 -->
        <span class="line"></span>
      </h1>
      <p class="text-lg text-gray-900">
        Si les interesa saber algo mas, puede contactarnos completando el formulario
      </p>
    </div>

    <!-- Formularios -->
    <div class="text-center text-white w-full max-w-lg">
      <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
        <input 
          v-model="email" 
          type="email" 
          :placeholder="$t('contact.emailPlaceholder')" 
          required 
          class="p-2 text-black border border-gray-300 rounded w-full"
        />
        <textarea 
          v-model="message" 
          :placeholder="$t('contact.messagePlaceholder')" 
          required 
          class="p-2 text-black border border-gray-300 rounded w-full h-32"
        ></textarea>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">
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