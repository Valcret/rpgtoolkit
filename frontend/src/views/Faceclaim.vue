<script setup lang="ts">
import { ref } from 'vue';

const selectedFilters = ref<string[]>([])
const updateFilters = (filterClass: string, isChecked: boolean) => {
  if (isChecked) {
    selectedFilters.value.push(filterClass);
  } else {
    selectedFilters.value = selectedFilters.value.filter(f => f !== filterClass);
  }
};
const shouldShow = (classes: string[]) => {
  if (selectedFilters.value.length === 0) return true;
  return selectedFilters.value.some(filter => classes.includes(filter));
};
const resetFilters = () => {
  selectedFilters.value = [];
};
</script>

<template>
  <main class="fichecraft">
    <!--Zone de gauche-->
    <aside class="menufichecraft">
      <!--bouton ouverture fermeture-->
      <button class="close-btn">&times;</button>
      <a href="/"><img src="../assets/Image/Facelaime_rpg.png"></a>
      <!--Zone de connection admin rapide-->
      <div class="adminconnect">
        <a href="/connect" class="navboutontrieur" title="Connexion">
          <i class="bi bi-toggle-off"></i>
        </a>
        <a href="/connect" class="navboutontrieur" title="Déconnexion">
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
            <li><input type="checkbox" @change="(e) => updateFilters('gender-M', e.target.checked)" name="gender-M"> Homme</li>
            <li><input type="checkbox" @change="(e) => updateFilters('gender-F', e.target.checked)" name="gender-F"> Femme</li>
            <li><input type="checkbox" @change="(e) => updateFilters('gender-O', e.target.checked)" name="gender-O"> Autre</li>
          </ul>
          <span>Âge</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('age-00', e.target.checked)" name="age-00"> - 20 ans</li>
            <li><input type="checkbox" @change="(e) => updateFilters('age-20', e.target.checked)" name="age-20"> 20-29 ans</li>
            <li><input type="checkbox" @change="(e) => updateFilters('age-30', e.target.checked)" name="age-30"> 30-39 ans</li>
            <li><input type="checkbox" @change="(e) => updateFilters('age-40', e.target.checked)" name="age-40"> 40-49 ans</li>
            <li><input type="checkbox" @change="(e) => updateFilters('age-50', e.target.checked)" name="age-50"> 50-59 ans</li>
            <li><input type="checkbox" @change="(e) => updateFilters('age-60', e.target.checked)" name="age-60"> 60 ans et +</li>
          </ul>
          <span>Couleur des yeux</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('eye-black', e.target.checked)" name="eye-black"> Noirs</li>
            <li><input type="checkbox" @change="(e) => updateFilters('eye-blue', e.target.checked)" name="eye-blue"> Bleus</li>
            <li><input type="checkbox" @change="(e) => updateFilters('eye-green', e.target.checked)" name="eye-green"> Verts</li>
            <li><input type="checkbox" @change="(e) => updateFilters('eye-brown', e.target.checked)" name="eye-brown"> Marrons</li>
            <li><input type="checkbox" @change="(e) => updateFilters('eye-pers', e.target.checked)" name="eye-pers"> Vairons</li>
            <li><input type="checkbox" @change="(e) => updateFilters('eye-other', e.target.checked)" name="eye-other"> Autres</li>
          </ul>
          <span>Couleur des cheveux</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-black', e.target.checked)" name="hair-black"> Noirs</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-brown', e.target.checked)" name="hair-brown"> Marrons</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-blond', e.target.checked)" name="hair-blond"> Blonds</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-grey', e.target.checked)" name="hair-grey"> Gris</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-white', e.target.checked)" name="hair-white"> Blancs</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-redhead', e.target.checked)" name="hair-redhead"> Roux</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-tainted', e.target.checked)" name="hair-tainted"> Teints</li>
            <li><input type="checkbox" @change="(e) => updateFilters('hair-shaved', e.target.checked)" name="hair-shaved"> Chauve</li>
          </ul>
          <span>Taille</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('height-00', e.target.checked)" name="height-00"> - 160cm</li>
            <li><input type="checkbox" @change="(e) => updateFilters('height-160', e.target.checked)" name="height-160"> 160-169cm</li>
            <li><input type="checkbox" @change="(e) => updateFilters('height-170', e.target.checked)" name="height-170"> 170-179cm</li>
            <li><input type="checkbox" @change="(e) => updateFilters('height-180', e.target.checked)" name="height-180"> 180-189cm</li>
            <li><input type="checkbox" @change="(e) => updateFilters('height-190', e.target.checked)" name="height-190"> 190cm +</li>
          </ul>
          <span>Détails physiques</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-tattoo', e.target.checked)" name="detail-tattoo">Tatouage</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-piercing', e.target.checked)" name="detail-piercing"> Piercing</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-beard', e.target.checked)" name="detail-beard"> Barbe</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-mustache', e.target.checked)" name="detail-mustache"> Moustache</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-beard&mustache', e.target.checked)" name="detail-beard&mustache"> Barbe & moustache</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-tongue', e.target.checked)" name="detail-tongue"> Langue bifide</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-handicap', e.target.checked)" name="detail-handicap"> Handicap</li>
            <li><input type="checkbox" @change="(e) => updateFilters('detail-plusSize', e.target.checked)" name="detail-plusSize"> Plus size</li>
          </ul>
          <span>Style d'image</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('style-hero', e.target.checked)" name="style-hero"> Super-héros</li>
            <li><input type="checkbox" @change="(e) => updateFilters('style-historic', e.target.checked)" name="style-historic"> Historique</li>
            <li><input type="checkbox" @change="(e) => updateFilters('style-fantastique',
            e.target.checked)" name="style-fantastique"> Fantasy/Fantastique</li>
            <li><input type="checkbox" @change="(e) => updateFilters('style-contemp', e.target.checked)" name="style-contemp"> Contemporain</li>
            <li><input type="checkbox" @change="(e) => updateFilters('style-futur',
            e.target.checked)" name="style-futur"> futuriste</li>
            <li><input type="checkbox" @change="(e) => updateFilters('style-nsfw',
            e.target.checked)" name="style-NSFW"> NSFW</li>
          </ul>
          <span>Format d'image</span>
          <hr>
          <ul>
            <li><input type="checkbox" @change="(e) => updateFilters('size-200*320', e.target.checked)"name="size-200*320"> 200x320</li>
            <li><input type="checkbox" @change="(e) => updateFilters('size-200*400', e.target.checked)"name="size-200*400"> 200x400</li>
            <li><input type="checkbox" @change="(e) => updateFilters('size-400*250', e.target.checked)"name="size-400*250"> 400x250</li>
            <li><input type="checkbox" @change="(e) => updateFilters('size-other', e.target.checked)"name="size-other"> Autre</li>
          </ul>
        </div>

      </div>

    </aside>
    <button class="open-btn">&#9776;</button>
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
        <a class="image" v-show="shouldShow('size-200*400')" href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-400*250')" href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*320')" href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*400')" href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-400*250')" href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*320')" href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*400')" href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-400*250')" href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*320')" href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*400')" href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-400*250')" href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*320')" href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*400')" href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-400*250')" href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*320')" href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*400')" href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-400*250')" href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a class="image" v-show="shouldShow('size-200*320')" href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
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

</style>