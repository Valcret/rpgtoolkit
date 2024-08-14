<template>
  <section
    id="section-1"
    class="content-section">
    <div class="container-fluid">
      <div class="homesectiontrieur">
        <div class="trieurintrotop">
          <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
          <div>
            <h1>Tu te souviens ? Je suis Toolki ! </h1>
            <!--Pour tout utilisateur-->
            <p>
              Ici tu trouveras tout ce qui va te permettre <br />
              de <em>gérer tes rps, tes forums et tes personnages !</em>
            </p>
          </div>
        </div>
        <!--Pour les non-enregistrés-->
        <div class="invitetrieurzone1" v-show="!loggedIn">
          <div class="inviteenregistre">
            Quoi, tu n'as pas encore de compte ?
            <a href="/connect"><i class="bi bi-person-up"></i></a>
            <i>Enregistre-toi</i>
          </div>
          <div class="inviteconnect">
            Ah ! Tu n'es juste pas connecté ?
            <a href="/connect"><i class="bi bi-door-open"></i></a>
            <i>Connecte-toi</i>
          </div>
        </div>
        <!--Pour les enregistrés-->
        <div class="connectetrieur1" v-show="loggedIn">
          <div class="gererrp">
            Tu veux ajouter un RP/perso/fofo ?
            <a href="#" @click="setActiveSection(2)">
              <i class="bi bi-bookmark-plus"></i>
            </a>
          </div>
          <div class="gererrp">
            Tu veux gérer tes rps ?
            <a href="#" @click="setActiveSection(3)">
              <i class="bi bi-list-check"></i>
            </a>
          </div>
          <div class="gererrp">
            Tu veux gérer tes persos ?
            <a href="#" @click="setActiveSection(4)">
              <i class="bi bi-person-lines-fill"></i>
            </a>
          </div>
          <div class="gererrp">
            Tu veux gérer tes forums ?
            <a href="#" @click="setActiveSection(5)">
              <i class="bi bi-pc-display-horizontal"></i>
            </a>
          </div>
          <div class="gererrp">
            T'es en galère ?
            <a href="#" @click="setActiveSection(6)">
              <i class="bi bi-question-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  loggedIn: Boolean,
  activeSection: String
});

const emit = defineEmits(['update:activeSection']);

const setActiveSection = (section) => {
  emit('update:activeSection', section);
};
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à la section */
</style>
