<script>
import Sidebar from '@/components/SidebarComponent.vue'
import AvatarFaceclaim from '@/components/AvatarFaceclaimComponent.vue';
// Importez le nouveau composant
export default {
  components: {
    Sidebar,
    AvatarFaceclaim
  },
  data() {
    return {
      filters: [],
      isModalOpen: false,
      modalImageUrl: '',
      hiddenNSFW: true,
      imageList : [],
      loggedIn : true,
      sidebar : true,
    };
  },
  methods: {
    isConnected(){
      return this.loggedIn;
    },
    updateFilters(filter, checked) {
      if (checked) {
        this.filters.push(filter);
      } else {
        const index = this.filters.indexOf(filter);
        if (index > -1) {
          this.filters.splice(index, 1);
        }
      }
    },
    toggleMenu() {
      this.sidebar = !this.sidebar;
      },
    shouldShow(criteria) {
      const nsfwCriteria = 'style-nsfw';
      if(criteria === "")
      {
        return false;
      }
      const isNSFW = criteria.split(' ').includes(nsfwCriteria);
      if (this.hiddenNSFW && isNSFW) {
        return false;
      }
      return this.filters.length === 0 || this.filters.some(filter => criteria.split(' ').includes(filter));
    },
    resetFilters() {
      this.filters = [];
      const checkboxes = document.querySelectorAll('.filterzone input[type="checkbox"]');
      checkboxes.forEach(checkbox => checkbox.checked = false);
      this.hideNSFW();
    },
    openModal(event) {
      const imageUrl = event.target.closest('.image').querySelector('img').src;
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImageUrl = '';
    },
    downloadImage() {
      const link = document.createElement('a');
      link.href = this.modalImageUrl;
      link.download = this.modalImageUrl.substring(this.modalImageUrl.lastIndexOf('/') + 1);
      link.click();
    },
    copyImageUrl() {
      navigator.clipboard.writeText(this.modalImageUrl).then(() => {
        alert('Lien copié dans le presse-papier');
      }, (err) => {
        console.error('Erreur lors de la copie du lien : ', err);
      });
    },
    hideNSFW() {
      this.hiddenNSFW = !this.hiddenNSFW; // Toggle hideNSFW
    },
    getImageSrc(imageUrl) {
      return `/src/assets/Image/${imageUrl}`;
    },
  },
  mounted() {
      ()=>{this.hiddenNSFW = true}
  }
};

</script>

<template>
  <main class="fichecraft">
    <!--Zone de gauche-->
    <Sidebar
      :sidebar="sidebar"
      :loggedIn="loggedIn"
      @toggle-menu="toggleMenu"
      @reset-filters="resetFilters"
      @update-filters="updateFilters"
      @hide-nsfw="hideNSFW"
    />

    <button v-show="!this.sidebar" class="open-btn" @click="this.toggleMenu()">&#9776;
    </button>
    <section class="facelaim">
      <!--Zone d'arrivée sur la page-->
      <div class="facelaimintro"><img class="trieurtoolki" src="../assets/Image/Facelaime_rpg.png" />
        <div>
          <h1>C'est moi, Toolki ! </h1>

          <p>Ce facelaim est réservé aux créations de Carmina, tu ne peux pas ajouter tes créations !
            <br/>Mais tu peux en trouver qui te plaisent ! Et ça c'est le top !
          </p>

        </div>
      </div>
      <!--Les avatars-->
      <AvatarFaceclaim
        :imageList="imageList"
        :shouldShow="shouldShow"
        :getImageSrc="getImageSrc"
        :openModal="openModalLink"
      />
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
    </section>
  </main>
</template>

<style scoped>

section.facelaim {
  height:auto;
}
.avatarfacelaim {
  justify-content : flex-start
}
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
  border:2px solid var(--color2);
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
.open-btn {
  display: block;
}
</style>
