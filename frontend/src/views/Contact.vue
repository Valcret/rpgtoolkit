<script setup lang="ts">

</script>

<template>
  <div class="bodyconnect">
    <!--Zone du menu-->
    <div class="menu">
      <a class="menuconnect" href="/" title="Go accueil"><img
        src="../assets/Image/Toolkit_rpg.png"></a>
      <a class="menuconnect" href="/facelaim" title="Go facelaim"><img
        src="../assets/Image/Facelaime_rpg.png"></a>
      <a class="menuconnect" href="/fichecraft" title="Go Fich'Craft"><img
        src="../assets/Image/fich_craft_rpg.png"></a>
      <a class="menuconnect" href="/trieur" title=" Go Trieur"><img
        src="../assets/Image/Trieur_rpg.png"></a>
    </div>
    <div class="pagebasique">
      <!--Zone contact-->
      <img src="../assets/Image/Toolkit_rpg.png">
      <h1>Tu as quelque chose à dire à mes créateurs ? </h1>
      <p>Tu peux passer par discord je te rappelle, sinon, utilise ce formulaire de contact</p>
      <div class="boutonpartenaire">
        <button class="footer"> <a href="file:///C:/Users/ange_/Downloads/Untitled-1.html#">Discord</a></button>
      </div>
      <div class="connectiontxt">

        <form id="regForm">
          <div class="formreggrpe">
            <label for="name">Nom et prénom:</label>
            <input type="text" id="name" name="name" required placeholder="Entrez votre nom et prénom">
          </div>
          <div class="formreggrpe">
            <label for="email">Mail:</label>
            <input type="email" id="email" name="email" required placeholder="Entrez votre email">
          </div>
          <div class="formreggrpe">
            <label for="subject">Objet du message:</label>
            <select id="subject" name="subject" required>
              <option value="">Sélectionnez un sujet</option>
              <option value="renseignement">Je demande un renseignement</option>
              <option value="partenaire">Je veux devenir partenaire</option>
              <option value="bug">J'ai un bug, help</option>
              <option value="autres">Autres</option>
            </select>
          </div>
          <div class="formreggrpe">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required placeholder="Entrez votre message"></textarea>
          </div>

          <div class="formreggrpe consent">
            <input type="checkbox" id="consent" name="consent" required>
            <label for="consent">J'accepte que mes informations personnelles soient utilisées uniquement pour le RPG TOOLKIT.</label>
          </div>
          <button type="submit" class="buttonformtype">Se connecter</button>
        </form>
        <div id="error-message" class="error-message" style="display: none;"></div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>