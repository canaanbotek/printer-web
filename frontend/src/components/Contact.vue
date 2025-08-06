<template>
  <section 
    id="contact"
    class="flex flex-col justify-center items-center relative pb-20 pt-20"
    style="background: linear-gradient(to bottom, #1a1a1a, #2a2a2a, #3a3a3a, #2a2a2a, #2a2a2a, #1a1a1a);">

    <!-- Overlay oscuro para mejorar legibilidad -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    
    <!-- Contenido principal -->
    <div class="relative z-10 max-w-6xl px-4 text-left">

      <!-- Título y descripción -->
      <div class="text-left mb-10">
        <h1 class="font-abel text-6xl font-bold text-gray-100">
          {{ $t("contact.title") }}
        </h1>
        <p class="font-abel text-xl text-gray-200 mt-4">
          {{ $t("contact.description") }}
        </p>
      </div>

      <!-- Formulario -->
      <div class="text-center bg-black/60 text-gray-100 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <form @submit.prevent="submitForm" class="flex flex-col mx-auto space-y-4">

          <!-- Campo de Email -->
          <div class="w-full">
            <input 
              v-model="email" 
              type="email" 
              :placeholder="$t('contact.emailPlaceholder')" 
              required 
              class="font-abel p-2 bg-black/40 text-gray-100 border border-gray-600 rounded w-full placeholder-gray-400"
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
              class="font-abel p-2 bg-black/40 text-gray-100 border border-gray-600 rounded w-full placeholder-gray-400"
            ></textarea>
            <p class="text-left italic text-sm text-gray-500 mt-1">{{ $t("contact.messageDescription") }} ({{ message.length }}/{{ MAX_TEXT_LENGTH }})</p>
          </div>
        
          <!-- Campo de Archivo con límite de tamaño -->
          <div class="w-full">
            <input
              ref="fileInput"
              type="file"
              @change="handleFileUpload" 
              class="font-abel p-2 bg-black/40 text-gray-100 border border-gray-600 rounded w-full placeholder-gray-400"
            />
            <p v-if="fileSizeError" class="text-sm text-red-500 mt-1 text-left">
              {{ $t("contact.fileSizeError") }}
            </p>
            <p class="text-sm text-gray-500 mt-1 text-left">{{ $t("contact.fileDescription") }} (Máx. {{ MAX_FILE_SIZE_MB }}MB)</p>
          </div>
        
          <!-- Botón de submit con carga -->
          <button type="submit" class="font-abel bg-blue-800 text-white p-2 rounded w-full">

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