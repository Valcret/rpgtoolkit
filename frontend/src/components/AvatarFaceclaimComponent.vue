<template>
  <div class="avatarfacelaim">
    <a v-for="image in imageList" :key="image.url" class="image test"
       v-show="shouldShow(image.criteria.join(' '))"
       @click="openModal(image.url)"
       href="javascript:void(0)">
      <img :src="getImageSrc(image.url)" :alt="`Avatar ${image.size.join('x')}`">
      <div class="info">
        <p>{{ image.name }}</p>
        <p>Taille: {{ image.size.join('x') }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
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
    },
  },
  methods: {
    isConnected() {
      return this.loggedIn;
    },
    openModal(url){
      this.$emit('openModalLink',url);
    },
    getImages() {
      //ajouter ajax//
      let image1 = {
        url:"avatar 200400.jpeg",
        criteria:[
          'size-200*400',
          'hair-tainted',
          'detail-tattoo',
          'detail-piercing',
          'style-nsfw',
          'style-contemp'
        ],
        name:"Rolyatistaylor",
        size:[
          "200",
          "400"
        ]
      }
      let image2 = {
        url:"avatar200320.jpg",
        criteria:[
          'size-200*320',
          'hair-redhead',
          'style-contemp'
        ],
        name:"Irina Meier",
        size:[
          "200",
          "320"
        ]
      }
      let image3 = {
        url:"avatar400250.jpg",
        criteria:[
          'size-200*400',
          'hair-black',
          'style-historic'
        ],
        name:"Luria XII",
        size:[
          "400",
          "250"
        ]
      }
      this.imageList.push(image1)
      this.imageList.push(image2)
      this.imageList.push(image3)
    },
  },
  mounted() {
    this.getImages()
  }
};
</script>

<style scoped>
/* Pas de styles ajoutés ici pour ne pas interférer avec les styles existants */
</style>
