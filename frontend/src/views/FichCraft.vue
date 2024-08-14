<script setup>

</script>

<template>
  <main class="fichecraft">
    <aside class="menufichecraft">
      <button class="close-btn">&times;</button>
      <a href="/"><img src="../assets/Image/fich_craft_rpg.png"></a>
      <div class="forumficheliste">
        <button class="fc"><a href="#">Forum 1</a></button>
        <button class="fc"><a href="#">Forum 1</a></button>
        <button class="fc"><a href="#">Forum 1</a></button>
        <button class="fc"><a href="#">Forum 1</a></button>
        <button class="fc"><a href="#">Forum 1</a></button>
      </div>
    </aside>
    <button class="open-btn">&#9776;</button>
    <section class="fichcraftmain">
      <!--Zone d'arrivée sur la page-->
      <div class="ficheintro"><img class="trieurtoolki" src="../assets/Image/fich_craft_rpg.png" />
        <div>
          <h1>C'est moi, Toolki ! </h1>

          <p>Le forum sur lequel tu joues un forum partenaire?<br/> Parfait, tu peux
            choisir son nom dans le menu pour trouver sa fiche. <br/>S'il n'y est pas, tu peux le proposer (si tu es l'admin du fofo bien entendu).
          </p>
          <center><button class="footer"> <a
            href="file:///C:/Users/ange_/Downloads/Untitled-1.html#">Go discord</a></button> <button class="footer"> <a href="/contact.html">Go contact</a></button></center>

        </div>
      </div>
      <div class="formfichearemplir">
        <!--Quand on clique sur un forum, intégration par "iframe" de la fiche à remplir exemple avec PIA-->
        <form class="fichecrafttype">
          <h2>PETITES INDECENCES ENTRE AMIS</h2>
          <hr>
          <!-- URL avatars 200*400 -->
          <div class="fichetypediv">
            <label for="url_avatars">URL avatars 200*400 :</label>
            <input type="text" id="url_avatars" name="url_avatars">
          </div>

          <!-- Choix Esclave -->
          <div class="fichetypediv"><label for="choix_esclave">Avez-vous les moyens, la capacité et la volonté d'avoir un(e) esclave ?</label>
            <select id="choix_esclave" name="choix_esclave">
              <option value="oui">J'ai les moyens, la capacité et la volonté d'avoir un(e) esclave</option>
              <option value="non">Je n'ai pas les moyens, la capacité et la volonté d'avoir un(e) esclave</option>
            </select>
          </div>

          <!-- Prénoms et Nom -->
          <div class="fichetypediv">
            <label for="prenom_nom">Prénoms et Nom :</label>
            <input type="text" id="prenom_nom" name="prenom_nom">
          </div>

          <!-- Age -->
          <div class="fichetypediv">
            <label for="age">Age :</label>
            <input type="number" id="age" name="age" min="0">
          </div>

          <!-- Nationalité -->
          <div class="fichetypediv">
            <label for="nationalite">Nationalité :</label>
            <input type="text" id="nationalite" name="nationalite">
          </div>

          <!-- Sexualité -->
          <div class="fichetypediv">
            <label for="sexualite">Sexualité :</label>
            <input type="text" id="sexualite" name="sexualite">
          </div>

          <!-- Statut marital -->
          <div class="fichetypediv">
            <label for="statut_marital">Statut marital :</label>
            <select id="statut_marital" name="statut_marital">
              <option value="celibataire">Célibataire</option>
              <option value="cest_compique">C'est compliqué</option>
              <option value="divorce">Divorcé(e)</option>
              <option value="en_couple">En couple</option>
              <option value="fiance">Fiancé(e)</option>
              <option value="marie">Marié(e)</option>
              <option value="separe">Séparé(e)</option>
            </select>
          </div>

          <!-- Statut -->
          <div class="fichetypediv">
            <label for="statut">Statut :</label>
            <select id="statut" name="statut">
              <option value="circlers">Circlers</option>
              <option value="clueless">Clueless</option>
              <option value="dungeonners">Dungeonners</option>
              <option value="in_between">In Between</option>
              <option value="slaves">Slaves</option>
            </select>
          </div>

          <!-- Anecdotes -->
          <div class="fichetypediv">
            <label for="anecdotes">Anecdotes :</label>
            <textarea id="anecdotes" name="anecdotes" placeholder="Écrire une dizaine d'anecdotes. Les anecdotes sont des détails secondaires de l'histoire, permettant de mieux connaître le personnage. Ex: sa couleur préférée est le bleu"></textarea>
          </div>

          <!-- Histoire -->
          <div class="fichetypediv">
            <label for="histoire">Histoire :</label>
            <textarea id="histoire" name="histoire" placeholder="Écrire votre histoire sous forme de tiret. Cela vous permet d'énumérer différents évènements du passé de votre personnage nous permettant de mieux le connaître"></textarea>
          </div>

          <!-- Pseudo -->
          <div class="fichetypediv">
            <label for="pseudo">Pseudo :</label>
            <input type="text" id="pseudo" name="pseudo">
          </div>

          <!-- Où nous avez-vous connu -->
          <div class="fichetypediv">
            <label for="ou_connu">Où nous avez-vous connu ? :</label>
            <input type="text" id="ou_connu" name="ou_connu">
          </div>

          <!-- Prélien -->
          <div class="fichetypediv">
            <label for="prelien">J'ai pris un prélien :</label>
            <input type="text" id="prelien" name="prelien" placeholder="Renseigner l'url">
          </div>

          <!-- Avatar -->
          <div class="fichetypediv">
            <label for="avatar">Avatar :</label>
            <input type="text" id="avatar" name="avatar">
          </div>

          <!-- Métier -->
          <div class="fichetypediv">
            <label for="metier">Métier :</label>
            <input type="text" id="metier" name="metier">
          </div>

          <!-- Je cherche -->
          <div class="fichetypediv">
            <label for="je_cherche">Je cherche :</label>
            <input type="text" id="je_cherche" name="je_cherche">
          </div>

          <button class="buttonformtype" type="submit">Soumettre</button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>