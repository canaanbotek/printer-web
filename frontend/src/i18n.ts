import { createI18n } from "vue-i18n"

// Definimos los textos en distintos idiomas
const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About Us",
      work: "Our Work",
      materials: "Materials",
      whyus: "Why Us",
      printers: "Printers",
      partners: "Partners",
      contact: "Contact",
      language: "Language"
    },
    contact: {
      title: "Contact",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      sendButton: "Send",
      sendLoadingButton: "Sending...",
      emailDescription: "Enter a valid email address",
      messageDescription: "Tell us briefly about your needs",
      fileDescription: "Optional: Show us your model if you wish, to help us better!"
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre Nosotros",
      materials: "Materiales",
      work: "Trabajos",
      printers: "Impresoras",
      whyus: "Porqué nosotros",
      partners: "Colaboradores",
      contact: "Contacto",
      language: "Idioma"
    },
    contact: {
      title: "Contacto",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu consulta",
      sendButton: "Enviar",
      sendLoadingButton: "Enviando...",
      emailDescription: "Ingresa un email válido",
      messageDescription: "Cuentanos en pocas palabras tus necesidades",
      fileDescription: "Opcional: Muestranos tu modelo si lo deseas para ayudarte mejor!"
    }
  }
}

// Creamos la instancia
const i18n = createI18n({
  locale: "es", // Idioma por default
  fallbackLocale: "en", // Si falta una traducción en español, usa inglés
  messages
})

export default i18n
