<template>
  <div class="modal" v-if="isModalOpen" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal"><i class="fa-solid fa-xmark"></i></span>
      <img :src="modalImageUrl" alt="Image en taille réelle" class="modal-image">
      <div class="flex">
        <button @click="downloadImage"><i class="fa-solid fa-download"></i></button>
        <button @click="copyImageUrl"><i class="fa-solid fa-link"></i></button>
      </div>
      <p class="legend">
        Merci de penser à créditer Carmina !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true
    },
    modalImageUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    downloadImage() {
      const link = document.createElement('a');
      link.href = this.modalImageUrl;
      link.download = this.modalImageUrl.substring(this.modalImageUrl.lastIndexOf('/') + 1);
      link.click();
    },
    copyImageUrl() {
      const publicUrl = `/images/${this.modalImageUrl.split('/').pop()}`;
      navigator.clipboard.writeText(publicUrl).then(() => {
        alert('Lien copié dans le presse-papier');
      }, (err) => {
        console.error('Erreur lors de la copie du lien : ', err);
      });
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  position: relative;
  text-align: center;
  width: auto;
  height: auto;
  overflow: auto;
  background: none;
  border-radius: 0;
}

.modal-content button {
  width: 50%;
  background-color: var(--color2);
  border: none;
  color: var(--color6);
}

.modal-content p.legend {
  background-color: none;
  color: var(--color6);
  font-size: 10px;
  text-align: center;
}

.modal-image {
  display: block;
  height: 100%;
  width: auto;
  object-fit: contain;
  border: 2px solid var(--color2);
}

.close,
.close:hover {
  position: fixed;
  top: 5px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: var(--color6);
  opacity: 100%;
}
</style>
