<template>
  <section
    id="home"
    class="relative w-full h-[600px] flex items-center justify-start p-10 rounded overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="resetTilt"
    @touchmove.prevent="handleTouchMove"
    @touchend="resetTilt"
  >
    <!-- Imagen de fondo -->
    <div
      class="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover pointer-events-none"
      :style="`background-image: url('/src/assets/printers/printers3.jpg'); transform: rotateX(${tiltX}deg) rotateY(${tiltY}deg); transition: transform 0.1s;`"
    />

    <!-- Contenido del texto -->
    <div class="relative z-10 max-w-4xl text-left">
      <h1 class="font-abel text-white text-8xl font-bold mb-4">
        {{ $t("home.title") }}
      </h1>
      <p class="font-abel text-gray-200 font-bold text-4xl">
        {{ $t("home.description") }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const tiltX = ref(0)
const tiltY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  const { clientX, clientY, currentTarget } = e
  const { width, height, left, top } = (currentTarget as HTMLElement).getBoundingClientRect()

  const x = clientX - left
  const y = clientY - top

  const rotateX = ((y / height) - 0.5) * -20
  const rotateY = ((x / width) - 0.5) * 20

  tiltX.value = rotateX
  tiltY.value = rotateY
}

const handleTouchMove = (e: TouchEvent) => {
  const touch = e.touches[0]
  const target = e.currentTarget as HTMLElement
  const { width, height, left, top } = target.getBoundingClientRect()

  const x = touch.clientX - left
  const y = touch.clientY - top

  const rotateX = ((y / height) - 0.5) * -10
  const rotateY = ((x / width) - 0.5) * 10

  tiltX.value = rotateX
  tiltY.value = rotateY
}

const resetTilt = () => {
  tiltX.value = 0
  tiltY.value = 0
}
</script>
