<template>
  <aside v-show="this.sidebar" class="menufichecraft">
    <!--bouton ouverture fermeture-->
    <button class="close-btn" @click="this.toggleMenu()"><i class="fa-solid fa-chevron-left"></i></button>
    <a href="/"><img src="../../assets/Image/Facelaime_rpg.png"></a>
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
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  sidebar: {
    type: Boolean,
    required: true
  },
  loggedIn: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits([
  'toggle-menu',
  'reset-filters',
  'update-filters',
  'hide-nsfw'
]);

const toggleMenu = () => {
  console.log("toggleMenu called");
  emit('toggle-menu');
};

const resetFilters = () => {
  emit('reset-filters');
};

const updateFilters = (filter, checked) => {
  emit('update-filters', filter, checked);
};

const hideNSFW = () => {
  emit('hide-nsfw');
};

const isConnected = () => {
  return props.loggedIn;
};
</script>

<style scoped>
.menufichecraft {
  /* Ajoutez ici les styles pour le composant */
}

aside .filterfacelaim{
  height:80%
}
aside.menufichecraft {
  height: 87vh;
}

.close-btn {
  position: fixed;
  top: 5px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

aside.menufichecraft {
  transform: none;
}

aside .filterfacelaim{
  height:80%
}
aside .filterzone{
  height: 90%;
  overflow-y: auto;
}

li>* {
  cursor: pointer;
}
/* Autres styles pour le composant */
</style>
