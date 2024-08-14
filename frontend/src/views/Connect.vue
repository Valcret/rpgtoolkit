<script setup>

</script>

<template>
  <div class="bodyconnect">
    <!-- Zone du menu -->
    <div class="menu">
      <a class="menuconnect" href="/" title="Go accueil"><img
        src="../assets/Image/Toolkit_rpg.png"></a>
      <a class="menuconnect" href="/Facelaim" title="Go facelaim"><img
        src="../assets/Image/Facelaime_rpg.png"></a>
      <a class="menuconnect" href="/fichecraft" title="Go Fich'Craft"><img
        src="../assets/Image/fich_craft_rpg.png"></a>
      <a class="menuconnect" href="/trieur" title=" Go Trieur"><img
        src="../assets/Image/Trieur_rpg.png"></a>
    </div>
    <div class="connectiontxt">
      <!--Pour l'enregistrement-->
      <img src="../assets/Image/Trieur_rpg.png">

      <p>Coucou toi, alors, prêt à nous rejoindre ? </p>
      <form id="regForm">
        <div class="formreggrpe">
          <label for="username">Ton pseudo:</label>
          <input type="text" id="username" name="username" required placeholder="Entre ton pseudo">
        </div>
        <div class="formreggrpe">
          <label for="email">Ton mail:</label>
          <input type="email" id="email" name="email" required placeholder="Entre ton email">
        </div>
        <div class="formreggrpe">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required placeholder="Entre ton mot de passe">
        </div>
        <div class="formreggrpe">
          <label for="confirmPassword">Répéter le mot de passe:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirme ton mot de passe">
        </div>
        <div class="formreggrpe consent">
          <input type="checkbox" id="consent" name="consent" required>
          <label for="consent">J'accepte que mes informations personnelles soient utilisées uniquement pour le RPG TOOLKIT.</label>
        </div>
        <button type="submit" class="buttonformtype">S'enregistrer</button>
      </form>
      <div id="error-message" class="error-message" style="display: none;"></div>
      <!--Pour la connection-->
      <p>Coucou toi, tu reviens jouer avec moi ? </p>
      <form id="login">
        <div class="formreggrpe">
          <label for="username">Ton pseudo:</label>
          <input type="text" id="username" name="username" required placeholder="Entre ton pseudo">
        </div>
        <div class="formreggrpe">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required placeholder="Entre ton mot de passe">
        </div>
        <div class="formreggrpe forgotmp">
          <a href="#">J'ai oublié mon mot de passe</a>
        </div>
        <button type="submit" class="buttonformtype">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>