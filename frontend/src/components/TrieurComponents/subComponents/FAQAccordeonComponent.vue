<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  headerText: {
    type: String,
    required: true
  },
  contentText: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="accordion-section">
    <div class="accordion-header" @click="toggleAccordion">
      {{ headerText }}
    </div>
    <div v-show="isOpen" class="accordion-content">
      <p>{{ contentText }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Ajoutez vos styles ici */
</style>
