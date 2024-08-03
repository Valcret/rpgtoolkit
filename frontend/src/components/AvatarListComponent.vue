<template>
  <div class="image-list">
    <ImageItem
      v-for="image in images"
      :key="image.url"
      :image="image"
      :shouldShow="shouldShow(image.criteria.join(' '))"
      @openModal="openModal"
    />
  </div>
</template>

<script>
import ImageItem from '@/components/FaceClaimParts/AvatarImageComponent.vue';

export default {
  components: {
    ImageItem,
  },
  props: {
    images: Array,
    shouldShow: Function,
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
