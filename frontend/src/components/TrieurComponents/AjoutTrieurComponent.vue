<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  loggedIn: Boolean,
  activeSection: String,
  activeForm: Number
});

const activeForm = ref(1);

const setActiveForm = (number) => {
  activeForm.value = number;
};
</script>

<template>
  <section
    id="section-2"
    class="content-section">
    <div class="container-fluid">
      <div class="homesectiontrieur">
        <div class="trieurintrotop">
          <div>
            <h2>Tu as besoin d'ajouter quelque chose ? </h2>
            <!--Pour tout utilisateur-->
            <p>Choisis ce que tu veux ajouter <br /> <em> rps, forums et/ou
              personnages !</em>
              <br />Attention, si ton forum ou ton forum n'es pas encore enregistré,
              enregistre-le d'abord !
              <br />Oups, tu l'as mis en double ? Va dans la catégorie approprié
              pour le supprimer d'un coup de clic </p>
          </div>
          <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
        </div>
        <div class="ajoutrpfofoperso ">
          <!--onglets-->
          <div class="ongledajout">

            <div class="container-onglets">
              <div @click="setActiveForm(1)" class="onglets"
                   :class="{'active':this.activeForm===1}">RPs</div>
              <div @click="setActiveForm(2)" class="onglets"
                   :class="{'active':this.activeForm===2}">Forum</div>
              <div @click="setActiveForm(3)" class="onglets"
                   :class="{'active':this.activeForm===3}">Perso</div>
            </div>
            <div class="contenu"
                 :class="{'active-contenu':this.activeForm===1}"
                 v-show="this.activeForm===1">
              <h3>Remplis le formulaire ci dessous pour ajouter ton rp</h3>

              <form action="#" class="formulairetype" method="post">
                <div class="formstyletop">
                  <div class="formstyleoption">
                    <select id="dropdown1" class="full-width" name="dropdown1">
                      <option value="option1">Choisis ton forum</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div class="formstyleoption">
                    <select id="dropdown2" class="full-width" name="dropdown2">
                      <option value="option1">Choisis ton personnage</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>

                <div class="formstylemiddle">
                  <div class="formstyletxt">
                    <input id="text1" class="full-width" name="text1" placeholder="Les personnages participants s'inscriront automatiquement après tes choix "
                           type="text">
                  </div>
                </div>

                <div class="formulairestyle2">
                  <div class="formstyletxt1">
                    <label for="text2">Nom du RP:</label>
                    <input id="text2" class="full-width" name="text2" placeholder="Si à lancer, mettre un titre provisoire"
                           type="text">
                  </div>
                  <div class="formstyletxt1">
                    <label for="text3">Lien du rp:</label>
                    <input id="text3" class="full-width" name="text3" placeholder="Si à lancer, écrire à lancer ou autre"
                           type="text">
                  </div>
                </div>

                <button class="buttonformtype" type="submit">Ajouter</button>
              </form>

            </div>
            <div class="contenu"
                 :class="{'active-contenu':this.activeForm===2}"
                 v-show="this.activeForm===2">
              <h3>Remplis le formulaire ci dessous pour ajouter ton forum</h3>

              <form action="#" class="formulairetype" method="post">
                <div class="formstylebasic">
                  <div class="formstyletexte">
                    <label for="forumname">Nom du forum:</label>
                    <input id="forumname" class="full-width" name="forumname"
                           placeholder="Entrez le nom du forum" type="text">
                  </div>
                  <div class="formstyletexte">
                    <label for="indexlink">Lien de l'index du forum:</label>
                    <input id="indexlink" class="full-width" name="indexlink"
                           placeholder="Entrez le lien de l'index du forum"
                           type="text">
                  </div>
                  <div class="formstyletexte">
                    <label for="buttonlink">Lien URL du bouton en 50*50px:</label>
                    <input id="buttonlink" class="full-width" name="buttonlink"
                           placeholder="Entrez le lien URL du bouton"
                           type="text">
                  </div>
                </div>

                <button class="buttonformtype" type="submit">Envoyer</button>
              </form>
            </div>
            <div class="contenu"
                 :class="{'active-contenu':this.activeForm===3}"
                 v-show="this.activeForm===3">
              <h3>Remplis le formulaire ci dessous pour ajouter ton personnage</h3>

              <form action="#" class="formulairetype" method="post">
                <div class="formstylebasic">
                  <div class="formstyleperso">
                    <select id="dropdown1" class="full-width" name="dropdown1">
                      <option value="">Choisissez un forum</option>
                      <option value="forum1">Forum 1</option>
                      <option value="forum2">Forum 2</option>
                      <option value="forum3">Forum 3</option>
                    </select>
                  </div>
                </div>

                <div class="formstylecenter">
                  <div class="formstyletxt">
                    <label for="charactername">Nom du personnage:</label>
                    <input id="charactername" class="full-width" name="charactername"
                           placeholder="Entrez le nom du personnage"
                           type="text">
                  </div>
                  <div class="formstyletxt">
                    <label for="characterurl">URL de la fiche du personnage:</label>
                    <input id="characterurl" class="full-width" name="characterurl"
                           placeholder="Entrez l'URL de la fiche du personnage"
                           type="text">
                  </div>
                  <div class="formstyleperso">
                    <label for="userselect">Choisissez un utilisateur:</label>
                    <select id="userselect" class="full-width" name="userselect">
                      <option value="">Sélectionnez un utilisateur</option>
                      <option value="user1">Utilisateur 1</option>
                      <option value="user2">Utilisateur 2</option>
                      <option value="user3">Utilisateur 3</option>
                    </select>
                  </div>
                </div>

                <button class="buttonformtype" type="submit">Envoyer</button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>