<script setup>
import { ref, reactive, onMounted } from 'vue';
import Sidebar from '@/components/FaceclaimComponents/SidebarFaceclaimComponent.vue';
import AvatarFaceclaim from '@/components/FaceclaimComponents/AvatarFaceclaimComponent.vue';
import FaceclaimModal from '@/components/FaceclaimComponents/FaceclaimModalComponent.vue';

const filters = ref([]);
const isModalOpen = ref(false);
const modalImageUrl = ref('');
const hiddenNSFW = ref(true);
const imageList = ref([]);
const loggedIn = ref(true);
const sidebar = ref(true);

const isConnected = () => {
  return loggedIn.value;
};

const updateFilters = (filter, checked) => {
  if (checked) {
    filters.value.push(filter);
  } else {
    const index = filters.value.indexOf(filter);
    if (index > -1) {
      filters.value.splice(index, 1);
    }
  }
};

const toggleMenu = () => {
  sidebar.value = !sidebar.value;
  document.getElementById('button-sidebar').innerHTML = sidebar.value
    ? `<i class="fa-solid fa-chevron-left"></i>`
    : `<i class="fa-solid fa-chevron-right"></i>`;
  document.querySelector('.navbar.position-fixed').style.left = sidebar.value ? '' : '0';
};

const shouldShow = (criteria) => {
  const nsfwCriteria = 'style-nsfw';
  if(criteria === "") {
    return false;
  }
  const isNSFW = criteria.split(' ').includes(nsfwCriteria);
  if (hiddenNSFW.value && isNSFW) {
    return false;
  }
  return filters.value.length === 0 || filters.value.some(filter => criteria.split(' ').includes(filter));
};

const resetFilters = () => {
  filters.value = [];
  const checkboxes = document.querySelectorAll('.filterzone input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
  hideNSFW();
};

const openModal = (url) => {
  console.log(url);
  modalImageUrl.value = url;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalImageUrl.value = '';
};

const hideNSFW = () => {
  hiddenNSFW.value = !hiddenNSFW.value;
};

const getImageSrc = (imageUrl) => {
  return `/src/assets/Image/${imageUrl}`;
};

onMounted(() => {
  hiddenNSFW.value = true;
});
</script>

<template>
  <button style="display:block !important"v-show="!sidebar" class="open-btn"
          @click="toggleMenu()"><i
    class="fa-solid fa-chevron-right"></i></button>
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
.open-btn {
  position: fixed;
  top:0;
  left:0;
}
/* Ajoutez ici les styles spécifiques à la page si nécessaire */
</style>
