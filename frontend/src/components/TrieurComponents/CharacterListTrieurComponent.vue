<script setup>
import CharacterForumListComponent from '@/components/TrieurComponents/subComponents/CharacterForumListComponent.vue';
import { defineProps } from 'vue';

defineOptions({ name: 'CharacterListTrieurComponent' });

const props = defineProps({
  ForaCharacters: Array,
});

// Exemple de données ForaCharacters
const ForaCharacters = [
  {
    id: 1,
    name: "fofotest",
    characters: [
      { id: 25, name: "Test 1", url: "ta race" },
      { id: 26, name: "Test 2", url: "ta race" },
      { id: 27, name: "Test 3", url: "ta race" }
    ]
  },
  {
    id: 2,
    name: "fofotest2",
    characters: [
      { id: 28, name: "Test 4", url: "ta race" },
      { id: 29, name: "Test 5", url: "ta race" }
    ]
  }
];
</script>

<template>
  <section id="section-4" class="content-section">
    <div class="container-fluid">
      <div class="trieurintrotop">
        <div>
          <h2>Whaaa c'est toi qui joue tout ça ?</h2>
          <p>Ici tu peux gérer tes personnages ! Ou te rappeler combien t'en as...</p>
        </div>
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <div class="trieurpersonnagezone">
        <CharacterForumListComponent
          v-for="(forum, index) in ForaCharacters"
          :key="forum.id"
          :forum="forum"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ajouter les styles ici */
</style>
