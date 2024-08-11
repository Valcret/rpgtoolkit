<script>
export default {
  name: 'FAQAccordeonComponent',
  props: {
    headerText: {
      type: String,
      required: true
    },
    contentText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  }
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
