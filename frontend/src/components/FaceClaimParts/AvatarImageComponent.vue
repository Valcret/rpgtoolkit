<template>
  <div v-if="shouldShow" class="image-item">
    <img :src="image.url" :alt="image.name" @click="openModal(image.url)" />
  </div>
</template>

<script>
export default {
  props: {
    image: Object,
    shouldShow: Boolean,
  },
  methods: {
    openModal(imageUrl) {
      this.$emit('openModal', imageUrl);
    },
  },
};
</script>

<style scoped>
/* styles similaires à ceux que vous avez fournis */
</style>
