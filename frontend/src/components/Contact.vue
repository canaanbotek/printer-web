<template>
  <section id="contact" class="flex flex-col relative items-center mb-20">
    <!-- Título y descripción -->
    <div class="text-center max-w-5xl px-4 mb-10">
      <h1 class="font-inter text-4xl font-bold text-gray-900">{{ $t("contact.title") }}</h1>
      
      <p class="font-inter text-xl text-gray-700 mt-4">
        {{ $t("contact.description") }}
      </p>
    </div>

    <!-- Formulario -->
    <div class="text-center bg-white text-white w-4/5 mx-auto">
      <form @submit.prevent="submitForm" class="flex flex-col mx-auto space-y-4">

        <!-- Campo de Email -->
        <div class="w-full">
          <input 
            v-model="email" 
            type="email" 
            :placeholder="$t('contact.emailPlaceholder')" 
            required 
            class="font-inter p-2 bg-white text-black border border-gray-300 rounded w-full"
          />
          <p class="text-left italic text-sm text-gray-500 mt-1">{{ $t("contact.emailDescription") }}</p>
        </div>
      
        <!-- Campo de Mensaje -->
        <div class="w-full">
          <textarea 
            v-model="message" 
            :placeholder="$t('contact.messagePlaceholder')" 
            required
            maxlength="1000"
            class="font-inter p-2 bg-white text-black border border-gray-300 rounded w-full h-32"
          ></textarea>
          <p class="text-left italic text-sm text-gray-500 mt-1">{{ $t("contact.messageDescription") }} ({{ message.length }}/{{ MAX_TEXT_LENGTH }})</p>
        </div>
      
        <!-- Campo de Archivo con límite de tamaño -->
        <div class="w-full">
          <input
            ref="fileInput"
            type="file"
            @change="handleFileUpload" 
            class="font-inter p-2 bg-white text-black border border-gray-300 rounded w-full"
          />
          <p v-if="fileSizeError" class="text-sm text-red-500 mt-1 text-left">
            {{ $t("contact.fileSizeError") }}
          </p>
          <p class="text-sm text-gray-500 mt-1 text-left">{{ $t("contact.fileDescription") }} (Máx. {{ MAX_FILE_SIZE_MB }}MB)</p>
        </div>
      
        <!-- Botón de submit con carga -->
        <button type="submit" class="font-inter bg-blue-800 text-white p-2 rounded w-full">
          <!-- Condicional para mostrar el texto y el ícono de carga -->
          <div v-if="isLoading" class="flex items-center justify-center text-white font-semibold">
            <span class="flex items-center">
              {{ $t("contact.sendLoadingButton") }}
              <LoadingIcon class="animate-spin h-6 w-6 ml-2" />
            </span>
          </div>
          <span v-else>
            {{ $t("contact.sendButton") }}
          </span>
        </button>

      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import LoadingIcon from '../assets/icons/LoadingIcon.vue'

const MAX_FILE_SIZE_MB = 50 // Tamaño máximo del archivo
const MAX_TEXT_LENGTH = 1000 // Tope de caracteres en el text-area

const { t } = useI18n()
const email = ref("")
const message = ref("")
const file = ref<File | null>(null)
const fileSizeError = ref(false)
const fileInput = ref(null)
const isLoading = ref(false)


// Manejo de carga de archivos
const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files[0]) {
    const selectedFile = input.files[0];
    console.log("Este es el archivo:", selectedFile);

    // Verifica el tamaño del archivo
    if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      fileSizeError.value = true;  // Muestra error si el tamaño excede el límite
      file.value = null;
    } else {
      file.value = selectedFile;
      fileSizeError.value = false;  // Restablecer el error si el archivo es válido
    }
  }
};

const submitForm = async () => {
  isLoading.value = true
  try {
    const formData = new FormData();
    formData.append("email", email.value);
    formData.append("message", message.value);
    if (file.value) {
      formData.append("file", file.value);
    }

    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert(t("contact.sendButton") + " ✅");
      isLoading.value = false
      email.value = "";
      message.value = "";
      fileInput.value.value = ""
    } else {
      isLoading.value = false
      alert("Error al enviar el mensaje ❌");
    }
  } catch (error) {
    isLoading.value = false
    console.error("Error:", error);
    alert("No se pudo enviar el mensaje.");
  }
};
</script>
