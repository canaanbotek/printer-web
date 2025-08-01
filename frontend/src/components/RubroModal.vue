<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
    <div class="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
      >
        ✕
      </button>
      <component :is="rubroComponent" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Industrial from "./rubro/Industrial.vue";
import Garden from "./rubro/Garden.vue";
import Deco from "./rubro/Deco.vue";

const props = defineProps({
  id: String,
});

const rubroComponent = computed(() => {
  console.log("El componente que llega es:", props.id)
  switch (props.id) {
    case "industrial":
      return Industrial;
    case "garden":
      return Garden;
    case "deco":
      return Deco;
    default:
      return null;
  }
});
</script>
