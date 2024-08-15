<script setup>
import { defineProps } from 'vue';

defineOptions({ name: 'CharacterComponent' });

const props = defineProps({
  character: Object,
});
</script>

<template>
  <div class="name">
    <h4><a :href="character.url">{{ character.name }}</a></h4>
    <div class="iconmodoperso">
      <a href="#">
        <i class="bi bi-card-list" title="Liste des rps"></i>
      </a>
      <a href="#">
        <i class="bi bi-person-bounding-box" title="Archiver"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Ajouter les styles ici */
</style>
