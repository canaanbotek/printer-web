<template>
  <section id="contact" class="h-screen flex justify-center items-center bg-gradient-to-r from-red-500 to-orange-500">
    <div class="text-center text-white">
      <h2 class="text-3xl">Contacto</h2>
      <form @submit.prevent="submitForm">
        <input v-model="email" type="email" placeholder="Tu email" required class="mb-2 p-2"/>
        <textarea v-model="message" placeholder="Tu consulta" required class="mb-2 p-2"></textarea>
        <button type="submit" class="bg-blue-500 text-white p-2">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        body: JSON.stringify({ email: this.email, message: this.message }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        alert("Mensaje enviado");
        this.email = "";
        this.message = "";
      }
    },
  },
};
</script>
