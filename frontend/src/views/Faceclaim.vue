<script setup lang="ts">

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
          <button class="filter"><a href="#">Filtrer</a></button>
          <button class="filter"><a href="#">Reinitialiser</a></button>
        </div>

        <div class="filterzone">
          <span>Titre du filtre</span>
          <hr>
          <ul>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
          </ul>
          <span>Titre du filtre</span>
          <hr>
          <ul>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
          </ul>
          <span>Titre du filtre</span>
          <hr>
          <ul>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
          </ul>
          <span>Titre du filtre</span>
          <hr>
          <ul>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
            <li><input type="checkbox" name="*"> Choix 1</li>
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
        <a href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar200320.jpg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar 200400.jpeg" alt="Avatar 200x400">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 200x400</p>
          </div>
        </a>
        <a href="#">
          <img src="../assets/Image/avatar400250.jpg" alt="Avatar 400x250">
          <div class="info">
            <p>Nom de l'avatar</p>
            <p>Taille: 400x250</p>
          </div>
        </a>
        <a href="#">
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

</style>