<script setup>
import CharacterComponent from '@/components/TrieurComponents/subComponents/CharacterComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
  forum: Object,
});
</script>

<template>
  <div class="forumpersonnage">
    <h3>{{ forum.name }}</h3>
    <div class="personnageduforum">
      <CharacterComponent
        v-for="(character, index) in forum.characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped>
/* Ajouter les styles ici */
</style>
