<template>
  <div class="avatarfacelaim">
    <AvatarComponent
      v-for="image in imageList"
      :key="image.url"
      :url="image.url"
      :name="image.name"
      :size="image.size"
      :getImageSrc="getImageSrc"
      v-show="shouldShow(image.criteria.join(' '))"
      @avatarClick="openModalLink"
    />
  </div>
</template>

<script>
import AvatarComponent from './subComponents/AvatarComponent.vue';

export default {
  components: {
    AvatarComponent
  },
  props: {
    imageList: {
      type: Array,
      required: true
    },
    shouldShow: {
      type: Function,
      required: true
    },
    getImageSrc: {
      type: Function,
      required: true
    },
    openModalLink: {
      type: Function,
      required: true
    }
  },
  methods: {
    openModalLink(url) {
      console.log('Image URL clicked:', url);
      this.$emit('openModalLink', url); // Émet l'URL de l'image cliquée
    },
    getImages() {
      let image1 = {
        url: "avatar200400.jpeg",
        criteria: [
          'size-200*400',
          'hair-tainted',
          'detail-tattoo',
          'detail-piercing',
          'style-nsfw',
          'style-contemp'
        ],
        name: "Rolyatistaylor",
        size: ["200", "400"]
      };
      let image2 = {
        url: "avatar200320.jpg",
        criteria: [
          'size-200*320',
          'hair-redhead',
          'style-contemp'
        ],
        name: "Irina Meier",
        size: ["200", "320"]
      };
      let image3 = {
        url: "avatar400250.jpg",
        criteria: [
          'size-200*400',
          'hair-black',
          'style-historic'
        ],
        name: "Luria XII",
        size: ["400", "250"]
      };

      this.imageList.push(image1);
      this.imageList.push(image2);
      this.imageList.push(image3);
    },
  },
  mounted() {
    this.getImages();
  }
};
</script>

<style scoped>
.avatarfacelaim {
  justify-content: flex-start;
}
</style>
