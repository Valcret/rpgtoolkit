<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="imageUrl" class="modal-img" />
      <button @click="downloadImage">Télécharger</button>
      <button @click="copyImageUrl">Copier le lien</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    downloadImage() {
      this.$emit('downloadImage');
    },
    copyImageUrl() {
      this.$emit('copyImageUrl');
    },
  },
};
</script>

<style scoped>
/* styles similaires à ceux que vous avez fournis */
</style>
