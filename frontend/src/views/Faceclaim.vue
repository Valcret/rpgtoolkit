<script>
import Sidebar from '@/components/FaceclaimComponents/SidebarFaceclaimComponent.vue';
import AvatarFaceclaim from '@/components/FaceclaimComponents/AvatarFaceclaimComponent.vue';
import FaceclaimModal from '@/components/FaceclaimComponents/FaceclaimModalComponent.vue';

export default {
  components: {
    Sidebar,
    AvatarFaceclaim,
    FaceclaimModal
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
      if(criteria === "") {
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
    openModal(url) {
      console.log(url);
      this.modalImageUrl = url;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImageUrl = '';
    },
    hideNSFW() {
      this.hiddenNSFW = !this.hiddenNSFW;
    },
    getImageSrc(imageUrl) {
      return `/src/assets/Image/${imageUrl}`;
    },
  },
  mounted() {
    () => { this.hiddenNSFW = true };
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

    <button v-show="!this.sidebar" class="open-btn" @click="this.toggleMenu()">&#9776;</button>

    <section class="facelaim">
      <!--Zone d'arrivée sur la page-->
      <div class="facelaimintro">
        <img class="trieurtoolki" src="../assets/Image/Facelaime_rpg.png" />
        <div>
          <h1>C'est moi, Toolki !</h1>
          <p>Ce facelaim est réservé aux créations de Carmina, tu ne peux pas ajouter tes créations !
            <br />Mais tu peux en trouver qui te plaisent ! Et ça c'est le top !
          </p>
        </div>
      </div>

      <!--Les avatars-->
      <AvatarFaceclaim
        :imageList="imageList"
        :shouldShow="shouldShow"
        :getImageSrc="getImageSrc"
        @openModalLink="openModal"
      />

      <!-- Boîte modale -->
      <FaceclaimModal
        :isModalOpen="isModalOpen"
        :modalImageUrl="modalImageUrl"
        @closeModal="closeModal"
      />
    </section>
  </main>
</template>

<style scoped>
/* Ajoutez ici les styles spécifiques à la page si nécessaire */
</style>
