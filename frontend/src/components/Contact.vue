<template>
    <section id="partners" class="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 relative">
    <!-- Título y descripción -->
    <div class="flex flex-col justify-center items-center top-4 left-4 text-gray-800 p-16">
      <h2 class="text-3xl">{{ $t("contact.title") }}</h2>
      <p class="mt-2 text-lg text-gray-800 max-w-2xl text-center">
        Si les interesa saber algo mas, puede contactarnos completando el formulario 
      </p>
    </div>
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
