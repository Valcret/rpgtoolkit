<template>
  <div  v-show="sidebar"  id="sidebar-wrapper">
    <!-- Icone accueil -->
    <a class="d-block text-center text-decoration-none logo mb-4" data-bs-placement="right"
       data-bs-toggle="tooltip" href="/" title="Retour à l'accueil">
      <img src="../../assets/Image/Trieur_rpg.png" />
    </a>
    <!-- Zone des onglets homes, +, rp, forum, personnages et aides -->
    <ul class="nav flex-column mb-auto text-center">
      <!-- Accueil -->
      <li :class="{ active: activeSection === 1 }" class="nav-item"
          @click="setActiveSection(1)">
        <a aria-current="page" class="nav-link text-dark py-2" data-bs-placement="right" data-bs-toggle="tooltip"
           href="#" title="Accueil">
          <i class="bi bi-house-heart"></i>
        </a>
      </li>
      <!-- PLUS -->
      <li v-show="loggedIn" :class="{ active: activeSection === 2 }" class="nav-item"
          @click="setActiveSection(2)">
        <a class="nav-link text-dark py-2 rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
           href="#" title="Ajouter">
          <i class="bi bi-plus"></i>
        </a>
      </li>
      <!-- RPS -->
      <li v-show="loggedIn" :class="{ active: activeSection === 3 }" class="nav-item"
          @click="setActiveSection(3)">
        <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
           href="#" title="RPS">
          <i class="bi bi-chat-left-text"></i>
        </a>
      </li>
      <!-- Personnages -->
      <li v-show="loggedIn" :class="{ active: activeSection === 4 }" class="nav-item"
          @click="setActiveSection(4)">
        <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
           href="#" title="Personnages">
          <i class="bi bi-person-fill"></i>
        </a>
      </li>
      <!-- Forums -->
      <li v-show="loggedIn" :class="{ active: activeSection === 5 }" class="nav-item"
          @click="setActiveSection(5)">
        <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
           href="#" title="Forums">
          <i class="bi bi-laptop"></i>
        </a>
      </li>
      <!-- Aide -->
      <li v-show="loggedIn" :class="{ active: activeSection === 6 }" class="nav-item"
          @click="setActiveSection(6)">
        <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
           href="#" title="FAQ">
          <i class="bi bi-question-square-fill"></i>
        </a>
      </li>
    </ul>
    <!-- Menu de connexion -->
    <div class="connectmenu">
      <!-- Connexion -->
      <a v-show="!loggedIn" class="navboutontrieur" href="/connect" title="Connexion">
        <i class="bi bi-toggle-off"></i>
      </a>
      <!-- Enregistrement -->
      <a v-show="!loggedIn" class="navboutontrieur" href="/register" title="S'enregistrer">
        <i class="bi bi-pencil-square"></i>
      </a>
      <!-- Déconnexion -->
      <a v-show="loggedIn" class="navboutontrieur" href="/disconnect" title="Déconnexion">
        <i class="bi bi-toggle-on"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  loggedIn: {
    type: Boolean,
    required: true
  },
  activeSection: {
    type: Number,
    required: true
  },
  sidebar: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:activeSection', 'toggle-menu']);

const setActiveSection = (section) => {
  emit('update:activeSection', Number(section));
};

const toggleMenu = () => {
  emit('toggle-menu');
};
</script>

<style scoped>
i {
  font-size: 27px;
}
/* Ajoutez ici les styles spécifiques à la sidebar */
</style>
