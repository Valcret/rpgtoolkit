<template>
  <a class="image test"
     @click="handleClick"
     href="javascript:void(0)">
    <img :src="getImageSrc(url)" :alt="`Avatar ${size.join('x')}`">
    <div class="info">
      <p>{{ name }}</p>
      <p>Taille: {{ size.join('x') }}</p>
    </div>
  </a>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: Array,
    required: true
  },
  getImageSrc: {
    type: Function,
    required: true
  },
});

const emit = defineEmits(['avatarClick']);

const handleClick = (event) => {
  const clickedElement = event.currentTarget;
  const img = clickedElement.querySelector('img');
  const url = img.getAttribute('src');
  emit('avatarClick', url); // Émet l'URL de l'image cliquée
};
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques au composant AvatarComponent si nécessaire */
</style>
