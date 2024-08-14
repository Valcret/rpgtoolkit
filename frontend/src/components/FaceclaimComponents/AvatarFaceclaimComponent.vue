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

<script setup>
import { ref, onMounted } from 'vue';
import AvatarComponent from './subComponents/AvatarComponent.vue';

const props = defineProps({
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
  },
});

const emit = defineEmits(['openModalLink']);

const openModalLink = (url) => {
  console.log(url);
  emit('openModalLink', url); // Émet l'URL de l'image cliquée
};

const getImages = () => {
  const images = [
    {
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
    },
    {
      url: "avatar200320.jpg",
      criteria: [
        'size-200*320',
        'hair-redhead',
        'style-contemp'
      ],
      name: "Irina Meier",
      size: ["200", "320"]
    },
    {
      url: "avatar400250.jpg",
      criteria: [
        'size-200*400',
        'hair-black',
        'style-historic'
      ],
      name: "Luria XII",
      size: ["400", "250"]
    }
  ];

  props.imageList.push(...images);
};

onMounted(() => {
  getImages();
});
</script>

<style scoped>
.avatarfacelaim {
  justify-content: flex-start;
}
</style>
