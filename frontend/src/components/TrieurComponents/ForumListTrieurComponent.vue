<script setup>
import ForumComponent from '@/components/TrieurComponents/subComponents/ForumComponent.vue';
import { defineProps } from 'vue';

defineOptions({ name: 'ForumListTrieurComponent' });

const props = defineProps({
  forums: Array
});

// Exemple de données pour les forums
const forums = [
  {
    id: 1,
    name: "Forum Test 1",
    url: "#",
    image: "path_to_image_1.jpg"
  },
  {
    id: 2,
    name: "Forum Test 2",
    url: "#",
    image: "path_to_image_2.jpg"
  },
  {
    id: 3,
    name: "Forum Test 3",
    url: "#",
    image: "path_to_image_3.jpg"
  }
];
</script>

<template>
  <section id="section-5" class="content-section">
    <div class="container-fluid">
      <div class="trieurintrotop">
        <div>
          <h2>C'est donc là que tu joues !</h2>
          <p>Rien ne vaut un petit Toolki pour veiller sur ses chez soi !</p>
        </div>
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <div class="trieurpersonnagezone">
        <!-- Liste des forums -->
        <ForumComponent
          v-for="(forum, index) in forums"
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
