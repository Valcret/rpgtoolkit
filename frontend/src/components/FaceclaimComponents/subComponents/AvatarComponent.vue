<template>
  <a class="image test"
     @click="handleClick"
     href="javascript:void(0)">
    <img :src="computedImageSrc" :alt="`Avatar ${size.join('x')}`">
    <div class="info">
      <p>{{ name }}</p>
      <p>Taille: {{ size.join('x') }}</p>
    </div>
  </a>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
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
    }
  },
  setup(props, { emit }) {
    // Calculer l'URL de l'image avec une computed property
    const computedImageSrc = computed(() => props.getImageSrc(props.url));

    // Gérer le clic sur l'avatar
    const handleClick = () => {
      emit('avatarClick', computedImageSrc.value);
    };

    // Retourner les références pour être utilisées dans le template
    return {
      computedImageSrc,
      handleClick
    };
  }
};
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques au composant AvatarComponent si nécessaire */
</style>
