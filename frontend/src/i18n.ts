import { createI18n } from "vue-i18n"

// Definimos los textos en distintos idiomas
const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About Us",
      work: "Our Work",
      printers: "Printers",
      partners: "Partners",
      contact: "Contact",
      language: "Language"
    },
    contact: {
      title: "Contact",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      sendButton: "Send"
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre Nosotros",
      work: "Trabajos Realizados",
      printers: "Impresoras",
      partners: "Empresas Colaboradoras",
      contact: "Contacto",
      language: "Idioma"
    },
    contact: {
      title: "Contacto",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu consulta",
      sendButton: "Enviar"
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
