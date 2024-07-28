<script>
export default {
  data() {
    return {
      filters: [],
      isModalOpen: false,
      modalImageUrl: '',
      hiddenNSFW: true,
      imageList : [],
      loggedIn : false,
      sidebar : true,
    };
  },
  methods: {
    isConnected(){
      return this.loggedIn;
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
    updateFilters(filter, checked) {
      if (checked) {
        this.filters.push(filter);
      } else {
        const index = this.filters.indexOf(filter);
        if (index > -1) {
          this.filters.splice(index, 1);
        }
      }
    },
    shouldShow(criteria) {
      const nsfwCriteria = 'style-nsfw';
      if(criteria === "")
      {
        return false;
      }
      const isNSFW = criteria.split(' ').includes(nsfwCriteria);
      if (this.hiddenNSFW && isNSFW) {
        return false;
      }
      return this.filters.length === 0 || this.filters.some(filter => criteria.split(' ').includes(filter));
    },
    resetFilters() {
      this.filters = [];
      const checkboxes = document.querySelectorAll('.filterzone input[type="checkbox"]');
      checkboxes.forEach(checkbox => checkbox.checked = false);
      this.hideNSFW();
    },
    openModal(event) {
      const imageUrl = event.target.closest('.image').querySelector('img').src;
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImageUrl = '';
    },
    downloadImage() {
      const link = document.createElement('a');
      link.href = this.modalImageUrl;
      link.download = this.modalImageUrl.substring(this.modalImageUrl.lastIndexOf('/') + 1);
      link.click();
    },
    copyImageUrl() {
      navigator.clipboard.writeText(this.modalImageUrl).then(() => {
        alert('Lien copié dans le presse-papier');
      }, (err) => {
        console.error('Erreur lors de la copie du lien : ', err);
      });
    },
    hideNSFW() {
      this.hiddenNSFW = !this.hiddenNSFW; // Toggle hideNSFW
    },
    getImageSrc(imageUrl) {
      return `/src/assets/Image/${imageUrl}`;
    },
    toggleMenu() {
      this.sidebar = !this.sidebar
}
  },
  mounted() {
    this.getImages(),
      ()=>{this.hiddenNSFW = true}
  }
};

</script>

<template>
  <main class="fichecraft">
    <!--Zone de gauche-->
    <aside v-show="this.sidebar" class="menufichecraft">
      <!--bouton ouverture fermeture-->
      <button class="close-btn" @click="this.toggleMenu()">&times;</button>
      <a href="/"><img src="../assets/Image/Facelaime_rpg.png"></a>
      <!--Zone de connection admin rapide-->
      <div class="adminconnect">
        <a v-show="this.isConnected()===false" href="/connect" class="navboutontrieur"
           title="Connexion">
          <i class="bi bi-toggle-off"></i>
        </a>
        <a v-show="this.isConnected()===true" href="/connect" class="navboutontrieur"
           title="Déconnexion">
          <i class="bi bi-toggle-on"></i>
        </a>
      </div>
      <!--Filtres-->
      <div class="filterfacelaim">
        <div class="buttonfilter">
          <button class="filter"><a href="#" @click="resetFilters">Réinitialiser</a></button>
        </div>


        <div class="filterzone">
          <span>Genre/Sexe</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="gender-M" @change="(e) => updateFilters('gender-M', e.target.checked)" name="gender-M"> <label for="gender-M">Homme</label></li>
            <li><input type="checkbox" id="gender-F" @change="(e) => updateFilters('gender-F', e.target.checked)" name="gender-F"> <label for="gender-F">Femme</label></li>
            <li><input type="checkbox" id="gender-O" @change="(e) => updateFilters('gender-O', e.target.checked)" name="gender-O"> <label for="gender-O">Autre</label></li>
          </ul>
          <span>Âge</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="age-00" @change="(e) => updateFilters('age-00', e.target.checked)" name="age-00"> <label for="age-00">- 20 ans</label></li>
            <li><input type="checkbox" id="age-20" @change="(e) => updateFilters('age-20', e.target.checked)" name="age-20"> <label for="age-20">20-29 ans</label></li>
            <li><input type="checkbox" id="age-30" @change="(e) => updateFilters('age-30', e.target.checked)" name="age-30"> <label for="age-30">30-39 ans</label></li>
            <li><input type="checkbox" id="age-40" @change="(e) => updateFilters('age-40', e.target.checked)" name="age-40"> <label for="age-40">40-49 ans</label></li>
            <li><input type="checkbox" id="age-50" @change="(e) => updateFilters('age-50', e.target.checked)" name="age-50"> <label for="age-50">50-59 ans</label></li>
            <li><input type="checkbox" id="age-60" @change="(e) => updateFilters('age-60', e.target.checked)" name="age-60"> <label for="age-60">60 ans et +</label></li>
          </ul>
          <span>Couleur des yeux</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="eye-black" @change="(e) => updateFilters('eye-black', e.target.checked)" name="eye-black"> <label for="eye-black">Noirs</label></li>
            <li><input type="checkbox" id="eye-blue" @change="(e) => updateFilters('eye-blue', e.target.checked)" name="eye-blue"> <label for="eye-blue">Bleus</label></li>
            <li><input type="checkbox" id="eye-green" @change="(e) => updateFilters('eye-green', e.target.checked)" name="eye-green"> <label for="eye-green">Verts</label></li>
            <li><input type="checkbox" id="eye-brown" @change="(e) => updateFilters('eye-brown', e.target.checked)" name="eye-brown"> <label for="eye-brown">Marrons</label></li>
            <li><input type="checkbox" id="eye-pers" @change="(e) => updateFilters('eye-pers', e.target.checked)" name="eye-pers"> <label for="eye-pers">Vairons</label></li>
            <li><input type="checkbox" id="eye-other" @change="(e) => updateFilters('eye-other', e.target.checked)" name="eye-other"> <label for="eye-other">Autres</label></li>
          </ul>
          <span>Couleur des cheveux</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="hair-black" @change="(e) => updateFilters('hair-black', e.target.checked)" name="hair-black"> <label for="hair-black">Noirs</label></li>
            <li><input type="checkbox" id="hair-brown" @change="(e) => updateFilters('hair-brown', e.target.checked)" name="hair-brown"> <label for="hair-brown">Marrons</label></li>
            <li><input type="checkbox" id="hair-blond" @change="(e) => updateFilters('hair-blond', e.target.checked)" name="hair-blond"> <label for="hair-blond">Blonds</label></li>
            <li><input type="checkbox" id="hair-grey" @change="(e) => updateFilters('hair-grey', e.target.checked)" name="hair-grey"> <label for="hair-grey">Gris</label></li>
            <li><input type="checkbox" id="hair-white" @change="(e) => updateFilters('hair-white', e.target.checked)" name="hair-white"> <label for="hair-white">Blancs</label></li>
            <li><input type="checkbox" id="hair-redhead" @change="(e) => updateFilters('hair-redhead', e.target.checked)" name="hair-redhead"> <label for="hair-redhead">Roux</label></li>
            <li><input type="checkbox" id="hair-tainted" @change="(e) => updateFilters('hair-tainted', e.target.checked)" name="hair-tainted"> <label for="hair-tainted">Teints</label></li>
            <li><input type="checkbox" id="hair-shaved" @change="(e) => updateFilters('hair-shaved', e.target.checked)" name="hair-shaved"> <label for="hair-shaved">Chauve</label></li>
          </ul>
          <span>Taille</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="height-00" @change="(e) => updateFilters('height-00', e.target.checked)" name="height-00"> <label for="height-00">- 160cm</label></li>
            <li><input type="checkbox" id="height-160" @change="(e) => updateFilters('height-160', e.target.checked)" name="height-160"> <label for="height-160">160-169cm</label></li>
            <li><input type="checkbox" id="height-170" @change="(e) => updateFilters('height-170', e.target.checked)" name="height-170"> <label for="height-170">170-179cm</label></li>
            <li><input type="checkbox" id="height-180" @change="(e) => updateFilters('height-180', e.target.checked)" name="height-180"> <label for="height-180">180-189cm</label></li>
            <li><input type="checkbox" id="height-190" @change="(e) => updateFilters('height-190', e.target.checked)" name="height-190"> <label for="height-190">190cm +</label></li>
          </ul>
          <span>Détails physiques</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="detail-tattoo" @change="(e) => updateFilters('detail-tattoo', e.target.checked)" name="detail-tattoo"> <label for="detail-tattoo">Tatouage</label></li>
            <li><input type="checkbox" id="detail-piercing" @change="(e) => updateFilters('detail-piercing', e.target.checked)" name="detail-piercing"> <label for="detail-piercing">Piercing</label></li>
            <li><input type="checkbox" id="detail-beard" @change="(e) => updateFilters('detail-beard', e.target.checked)" name="detail-beard"> <label for="detail-beard">Barbe</label></li>
            <li><input type="checkbox" id="detail-mustache" @change="(e) => updateFilters('detail-mustache', e.target.checked)" name="detail-mustache"> <label for="detail-mustache">Moustache</label></li>
            <li><input type="checkbox" id="detail-beard&mustache" @change="(e) => updateFilters('detail-beard&mustache', e.target.checked)" name="detail-beard&mustache"> <label for="detail-beard&mustache">Barbe & moustache</label></li>
            <li><input type="checkbox" id="detail-tongue" @change="(e) => updateFilters('detail-tongue', e.target.checked)" name="detail-tongue"> <label for="detail-tongue">Langue bifide</label></li>
            <li><input type="checkbox" id="detail-handicap" @change="(e) => updateFilters('detail-handicap', e.target.checked)" name="detail-handicap"> <label for="detail-handicap">Handicap</label></li>
            <li><input type="checkbox" id="detail-plusSize" @change="(e) => updateFilters('detail-plusSize', e.target.checked)" name="detail-plusSize"> <label for="detail-plusSize">Plus size</label></li>
          </ul>
          <span>Style d'image</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="style-hero" @change="(e) => updateFilters('style-hero', e.target.checked)" name="style-hero"> <label for="style-hero">Super-héros</label></li>
            <li><input type="checkbox" id="style-historic" @change="(e) => updateFilters('style-historic', e.target.checked)" name="style-historic"> <label for="style-historic">Historique</label></li>
            <li><input type="checkbox" id="style-fantastique" @change="(e) => updateFilters('style-fantastique', e.target.checked)" name="style-fantastique"> <label for="style-fantastique">Fantasy/Fantastique</label></li>
            <li><input type="checkbox" id="style-contemp" @change="(e) => updateFilters('style-contemp', e.target.checked)" name="style-contemp"> <label for="style-contemp">Contemporain</label></li>
            <li><input type="checkbox" id="style-futur" @change="(e) => updateFilters('style-futur', e.target.checked)" name="style-futur"> <label for="style-futur">Futuriste</label></li>
          </ul>
          <span>Format d'image</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="size-200*320" @change="(e) => updateFilters('size-200*320', e.target.checked)" name="size-200*320"> <label for="size-200*320">200x320</label></li>
            <li><input type="checkbox" id="size-200*400" @change="(e) => updateFilters('size-200*400', e.target.checked)" name="size-200*400"> <label for="size-200*400">200x400</label></li>
            <li><input type="checkbox" id="size-400*250" @change="(e) => updateFilters('size-400*250', e.target.checked)" name="size-400*250"> <label for="size-400*250">400x250</label></li>
            <li><input type="checkbox" id="size-other" @change="(e) => updateFilters('size-other', e.target.checked)" name="size-other"> <label for="size-other">Autre</label></li>
          </ul>
          <span>18+</span>
          <hr>
          <ul>
            <li><input type="checkbox" id="style-NSFW" @click="hideNSFW()"
                       name="style-NSFW">
              <label
                for="style-NSFW">NSFW</label></li>
          </ul>
        </div>

      </div>

    </aside>
    <button v-show="!this.sidebar" class="open-btn" @click="this.toggleMenu()">&#9776;
    </button>
    <section class="facelaim">
      <!--Zone d'arrivée sur la page-->
      <div class="facelaimintro"><img class="trieurtoolki" src="../assets/Image/Facelaime_rpg.png" />
        <div>
          <h1>C'est moi, Toolki ! </h1>

          <p>Ce facelaim est réservé aux créations de Carmina, tu ne peux pas ajouter tes créations !
            <br/>Mais tu peux en trouver qui te plaisent ! Et ça c'est le top !
          </p>

        </div>
      </div>
      <!--Les avatars-->
      <div class="avatarfacelaim">
        <a v-for="image in this.imageList" :key="image.url" class="image test"
           v-show="shouldShow(image.criteria.join(' '))"
           @click="openModal($event)"
           href="javascript:void(0)">
          <img :src="getImageSrc(image.url)" :alt="`Avatar ${image.size.join('x')}`">
          <div class="info">
            <p>{{ image.name }}</p>
            <p>Taille: {{ image.size.join('x') }}</p>
          </div>
        </a>
      </div>
      <div class="modal" v-if="isModalOpen" @click.self="closeModal">
        <div class="modal-content">
          <span class="close" @click="closeModal"><i class="fa-solid fa-xmark"></i></span>
          <img :src="modalImageUrl" alt="Image en taille réelle" class="modal-image">
          <div class="flex">
            <button @click="downloadImage"><i class="fa-solid fa-download"></i></button>
            <button @click="copyImageUrl"><i class="fa-solid fa-link"></i></button>
          </div>
          <p class="legend">
            Merci de penser à créditer Carmina !
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

section.facelaim {
  height:auto;
}
.avatarfacelaim {
  justify-content : flex-start
}
aside .filterfacelaim{
  height:80%
}
li>* {
  cursor: pointer;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  position: relative;
  text-align: center;
  width: auto;
  height: auto;
  overflow: auto;
  background: none;
  border-radius: 0;

}
.modal-content button {
  width: 50%;
  background-color: var(--color2);
  border: none;
  color: var(--color6);
}
.modal-content p.legend {
  background-color: none;
  color: var(--color6);
  font-size: 10px;
  text-align: center;
}
.modal-image {
  display: block;
  height: 100%;
  width: auto;
  object-fit: contain;
  border:2px solid var(--color2);
}

.close,
.close:hover {
  position: fixed;
  top: 5px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: var(--color6);
  opacity: 100%;
}
.open-btn {
  display: block;
}
aside.menufichecraft {
  transform: none;
}
</style>
