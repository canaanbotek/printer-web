import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // Permite conexiones externas
    port: 5173, // O el puerto en el que estés ejecutando Vite
    allowedHosts: ['.ngrok-free.app'], // Permite todos los subdominios de ngrok
  }
})
