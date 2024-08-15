<script setup>
import { defineProps } from 'vue';

defineOptions({ name: 'ForumComponent' });

const props = defineProps({
  forum: Object
});
</script>

<template>
  <div class="listeforum">
    <div class="entetefofo">
      <a :href="forum.url"><img :src="forum.image" /></a>
      <h3>{{ forum.name }}</h3>
    </div>
    <div class="listefofo">
      <div class="iconmodofofo">
        <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
        <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajouter les styles ici */
</style>
