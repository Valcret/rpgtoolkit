<template>
  <section id="section-3" class="content-section">
    <div class="container-fluid">
      <div class="trieurintrotop">
        <div>
          <h2>C'est l'heure de s'occuper de tes rps ! </h2>
          <!--Pour tout utilisateur-->
          <p>Toi tu réponds et tu cliques pour les ranger ! Moi je te soutiens moralement !</p>
        </div>
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <div class="ajoutrpfofoperso">
        <div class="ongledajout">
          <div class="container-onglets">
            <div
              :class="{ active: activeList === 1 }"
              @click="setActiveList(1)"
              class="onglets"
            >
              Prioritaires
            </div>
            <div
              :class="{ active: activeList === 2 }"
              @click="setActiveList(2)"
              class="onglets"
            >
              En cours
            </div>
            <div
              :class="{ active: activeList === 3 }"
              @click="setActiveList(3)"
              class="onglets"
            >
              En attente
            </div>
            <div
              :class="{ active: activeList === 4 }"
              @click="setActiveList(4)"
              class="onglets"
            >
              Archivés
            </div>
          </div>
          <RpListComponent v-show="activeList === 1"/>
          <RpListComponent v-show="activeList === 2"/>
          <RpListComponent v-show="activeList === 3"/>
          <RpListComponent v-show="activeList === 4"/>
      </div>
     </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import RpListComponent from '@/components/TrieurComponents/subComponents/RpListComponent.vue';

const activeList = ref(1); // Valeur par défaut

const setActiveList = (list) => {
  activeList.value = list;
};
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à la section */
</style>
