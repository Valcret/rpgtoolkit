<script lang="ts" setup>
import { ref } from 'vue'

const activeSection = ref('section-1')
const activeList = ref('prioritaire')
let connected = true

const loggedIn = ref(connected)

</script>
<template>
  <div id="wrapper" class="d-flex">
    <!--Menu de gauche-->
    <div id="sidebar-wrapper">
      <!--Icone accueil-->
      <a class="d-block text-center text-decoration-none logo mb-4" data-bs-placement="right"
         data-bs-toggle="tooltip" href="/" title="Retour à l'accueil">
        <img src="../assets/Image/Trieur_rpg.png" />
      </a>
      <!--Zone des onglets homes, +, rp, forum, personnages et aides-->
      <ul class="nav flex-column mb-auto text-center">
        <!--accueil-->
        <li :class="{ active: activeSection === 'section-1' }" class="nav-item"
            @click="activeSection = 'section-1'">
          <a aria-current="page" class="nav-link text-dark py-2" data-bs-placement="right" data-bs-toggle="tooltip"
             href="#" title="Accueil">
            <i class="bi bi-house-heart"></i>
          </a>
        </li>
        <!--PLUS-->
        <li v-show="loggedIn=== true" :class="{ active: activeSection === 'section-2' }"
            class="nav-item"
            @click="activeSection = 'section-2'">
          <a class="nav-link text-dark py-2 rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
             href="#" title="Ajouter">
            <i class="bi bi-plus"></i>
          </a>
        </li>
        <!--RPS-->
        <li v-show="loggedIn=== true" :class="{ active: activeSection === 'section-3' }" class="nav-item"
            @click="activeSection = 'section-3'">
          <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
             href="#" title="RPS">
            <i class="bi bi-chat-left-text"></i>
          </a>
        </li>
        <!--Personnages-->
        <li v-show="loggedIn=== true" :class="{ active: activeSection === 'section-4' }" class="nav-item"
            @click="activeSection = 'section-4'">
          <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
             href="#" title="Personnages">
            <i class="bi bi-person-fill"></i>
          </a>
        </li>
        <!--Forums-->
        <li v-show="loggedIn=== true" :class="{ active: activeSection === 'section-5' }" class="nav-item"
            @click="activeSection = 'section-5'">
          <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
             href="#" title="Forums">
            <i class="bi bi-laptop"></i>
          </a>
        </li>
        <!--Aide-->
        <li v-show="loggedIn=== true" :class="{ active: activeSection === 'section-6' }" class="nav-item"
            @click="activeSection = 'section-6'">
          <a class="nav-link py-2 text-dark rounded-0" data-bs-placement="right" data-bs-toggle="tooltip"
             href="#" title="FAQ">
            <i class="bi bi-question-square-fill"></i>
          </a>
        </li>
      </ul>
      <!--Menu de connexion-->
      <div class="connectmenu">
        <!--Connexion-->
        <a v-show="loggedIn=== false" class="navboutontrieur" href="/connect"
           title="Connexion">
          <i class="bi bi-toggle-off"></i>
        </a>
        <!--Enregistrement-->
        <a v-show="loggedIn=== false" class="navboutontrieur" href="/register"
           title="S'enregistrer">
          <i class="bi bi-pencil-square"></i>
        </a>
        <!--Deco-->
        <a  v-show="loggedIn=== true" class="navboutontrieur" href="/disconnect"
            title="Déconnexion">
          <i class="bi bi-toggle-on"></i>
        </a>
      </div>
    </div>
    <!--page de gauche avec sections liés aux onglets-->
    <div id="page-content-wrapper">
      <!--bouton x fixe pour fermer la navigations-->
      <nav class="navbar position-fixed">
        <div class="container-fluid">
          <button id="sidebarToggle" class="btn"><i class="bi bi-x-lg"></i></button>
        </div>
      </nav>
      <!--onglet/sections-->
      <div id="content">
        <!--section arrivée-->
        <section v-show="activeSection === 'section-1'"
                 id="section-1"
                 class="content-section">
          <div class="container-fluid">
            <div class="homesectiontrieur">
              <div class="trieurintrotop"><img class="trieurtoolki"
                                               src="../assets/Image/Trieur_rpg.png" />
                <div>
                  <h1>Tu te souviens ? Je suis Toolki ! </h1>
                  <!--Pour tout utilisateur-->
                  <p>Ici tu trouveras tout ce qui va te permettre <br />de <em>gérer tes
                    rps, tes forums et tes personnages !</em></p>
                </div>
              </div>
              <!--Pour les non-enregistré-->
              <div class="invitetrieurzone1"  v-show="loggedIn=== false">
                <div class="inviteenregistre">
                  Quoi, tu n'as pas encore de compte ?
                  <a href="/connect"><i class="bi bi-person-up"></i></a>
                  <i>Enregistre-toi</i>
                </div>
                <div class="inviteconnect">
                  Ah ! Tu n'es juste pas connecté ?
                  <a href="/connect"><i class="bi bi-door-open"></i></a>
                  <i>Connecte-toi</i>
                </div>

              </div>
              <!--Pour les enregistré-->
              <div class="connectetrieur1"  v-show="loggedIn=== true">
                <div class="gererrp">
                  Tu veux ajouter un RP/perso/fofo ?
                  <a href="#" @click="activeSection = 'section-1'">
                    <i class="bi bi-bookmark-plus"></i></a>
                </div>
                <div class="gererrp">
                  Tu veux gérer tes rps ?
                  <a href="#" @click="activeSection = 'section-2'">
                    <i class="bi bi-list-check"></i></a>
                </div>
                <div class="gererrp">
                  Tu veux gérer tes persos ?
                  <a href="#" @click="activeSection = 'section-3'">
                    <i class="bi bi-person-lines-fill"></i></a>
                </div>
                <div class="gererrp">
                  Tu veux gérer tes forums ?
                  <a href="#" @click="activeSection = 'section-4'">
                    <i class="bi bi-pc-display-horizontal"></i></a>
                </div>
                <div class="gererrp">
                  T'es en galère ?
                  <a href="#" @click="activeSection = 'section-5'">
                    <i class="bi bi-question-circle"></i></a>
                </div>

              </div>
            </div>
          </div>
        </section>
        <!--Section ajout de liens rps fofo et perso-->
        <section v-show="activeSection === 'section-2'"
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
                <img class="trieurtoolki" src="../assets/Image/Trieur_rpg.png" />
              </div>
              <div class="ajoutrpfofoperso ">
                <!--onglets-->
                <div class="ongledajout">

                  <div class="container-onglets">
                    <div class="onglets active">RPs</div>
                    <div class="onglets">Forum</div>
                    <div class="onglets">Perso</div>
                  </div>
                  <div class="contenu active-contenu">
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
                  <div class="contenu">
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
                  <div class="contenu">
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
        <!--section liste des rps-->
        <section v-show="activeSection === 'section-3'"
                 id="section-3"
                 class="content-section">
          <div class="container-fluid">
            <div class="trieurintrotop">
              <div>
                <h2>C'est l'heure de s'occuper de tes rps ! </h2>
                <!--Pour tout utilisateur-->
                <p>Toi tu réponds et tu cliques pour les ranger ! Moi je te soutiens
                  moralement !</p>
              </div>
              <img class="trieurtoolki" src="../assets/Image/Trieur_rpg.png" />
            </div>
            <div class="ajoutrpfofoperso ">
              <div class="ongledajout">

                <div class="container-onglets">
                  <div :class="{ active: activeList === 'prioritaire' }"
                       @click="activeList='prioritaire'"
                       class="onglets">Prioritaires</div>
                  <div :class="{ active: activeList === 'aFaire' }" class="onglets" @click="activeList='aFaire'">En
                    cours</div>
                  <div
                    :class="{ active: activeList === 'enAttente' }" class="onglets" @click="activeList='enAttente'">En
                    attente</div>
                  <div :class="{ active: activeList === 'archives' }" class="onglets" @click="activeList='archives'">
                    Archivés</div>
                </div>
                <div class="contenu active-contenu">
                  <!--Ceci n'est qu'un visuel de la finalité des listes, je ne savais pas comment le coder XD-->
                  <div class="exempleliste">
                    <!--la boite-->
                    <div class="article1">
                      <!--Icone de moderation et nom du forum-->
                      <div class="article1haut">
                        <div class="iconexemple">
                          <a class="exempleicone" href="#"><i class="bi bi-star"></i></a>
                          <a class="exempleicone" href="#"><i
                            class="bi bi-check-circle"></i></a>
                          <a class="exempleicone" href="#"><i class="bi bi-archive "></i></a>
                          <a class="exempleicone " href="# "><i class="bi bi-pen"></i></a>
                        </div>
                        <div class="fofoarticle">De sang et d'art</div>
                      </div>
                      <!--Chiffre, dates, noms du rps et participants-->
                      <div class="article1bas">
                        <div class="article1gauche">
                          <div class="exemplechiffre">
                            1
                          </div>
                          <div class="article1droitebas">
                            date de réponses
                          </div>
                        </div>
                        <div class="article1droite">
                          <h3><a href="#">Titre du rp</a></h3>
                          <div class="article1droitemilieu">
                            <a class="nomp" href="#">Nom de participant</a> - <a
                            class="nomp" href="#">Nom de participant</a>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div class="article1">
                      <div class="article1haut">
                        <div class="iconexemple">
                          <a class="exempleicone" href="#"><i class="bi bi-star"></i></a>
                          <a class="exempleicone" href="#"><i
                            class="bi bi-check-circle"></i></a>
                          <a class="exempleicone" href="#"><i class="bi bi-archive "></i></a>
                          <a class="exempleicone " href="# "><i class="bi bi-pen"></i></a>
                        </div>
                        <div class="fofoarticle">De sang et d'art</div>
                      </div>
                      <div class="article1bas">
                        <div class="article1gauche">
                          <div class="exemplechiffre">
                            1
                          </div>
                          <div class="article1droitebas">
                            date de réponses
                          </div>
                        </div>
                        <div class="article1droite">
                          <h3><a href="#">Titre du rp</a></h3>
                          <div class="article1droitemilieu">
                            <a class="nomp" href="#">Nom de participant</a> - <a
                            class="nomp" href="#">Nom de participant</a>
                          </div>

                        </div>
                      </div>

                    </div>


                  </div>
                </div>
                <div class="contenu ">
                  <h3>Remplis le formulaire ci dessous pour ajouter ton forum</h3>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                    perspiciatis alias quod, dolores eum illum doloremque assumenda odio
                    architecto, dolorum vitae nobis, quo deleniti ipsum.</p>
                </div>
                <div class="contenu ">
                  <h3>Remplis le formulaire ci dessous pour ajouter ton personnage</h3>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                    perspiciatis alias quod, dolores eum illum doloremque assumenda odio
                    architecto, dolorum vitae nobis, quo deleniti ipsum.</p>
                </div>
                <div class="contenu ">
                  <h3>Remplis le formulaire ci dessous pour ajouter ton personnage</h3>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                    perspiciatis alias quod, dolores eum illum doloremque assumenda odio
                    architecto, dolorum vitae nobis, quo deleniti ipsum.</p>
                </div>


              </div>

            </div>
          </div>
        </section>
        <!--Section forums-->
        <section v-show="activeSection === 'section-4'"
                 id="section-4"
                 class="content-section">
          <div class="container-fluid">
            <div class="trieurintrotop">
              <!--Intro toolki-->
              <div>
                <h2>Whaaa c'es toi qui joue tout ça ? </h2>
                <!--Pour tout utilisateur-->
                <p>Ici tu peux gérer tes personnages ! Ou te rappeler combien t'en
                  as...</p>
              </div>
              <img class="trieurtoolki" src="../assets/Image/Trieur_rpg.png" />
            </div>
            <!--Liste des persos par fofo-->
            <div class="trieurpersonnagezone">
              <!--Boite pour un forum-->
              <div class="forumpersonnage">
                <h3>Nom du forum</h3>
                <div class="personnageduforum">
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="forumpersonnage">
                <h3>Nom du forum</h3>
                <div class="personnageduforum">
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="forumpersonnage">
                <h3>Nom du forum</h3>
                <div class="personnageduforum">
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="forumpersonnage">
                <h3>Nom du forum</h3>
                <div class="personnageduforum">
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="forumpersonnage">
                <h3>Nom du forum</h3>
                <div class="personnageduforum">
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="forumpersonnage">
                <h3>Nom du forum</h3>
                <div class="personnageduforum">
                  <div class="name">
                    <h4>Nom du personnage</h4>
                    <div class="iconmodoperso">
                      <a href="#"><i class="bi bi-card-list"
                                     title="Liste des rps"></i></a>
                      <a href="#"><i class="bi bi-person-bounding-box"
                                     title="Archiver"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <!--Section forums-->
        <section v-show="activeSection === 'section-5'" id="section-5"
                 class="content-section">
          <div class="container-fluid">
            <div class="trieurintrotop">
              <div>
                <h2>C'est donc là que tu joues ! </h2>
                <!--Pour tout utilisateur-->
                <p>Rien ne vaut un petit Toolki pour veiller sur ses chez soi !</p>
              </div>
              <img class="trieurtoolki" src="../assets/Image/Trieur_rpg.png" />
            </div>
            <div class="trieurpersonnagezone">
              <!--Liste des forums-->
              <div class="listeforum">
                <div class="entetefofo">
                  <a href="#"><img src="../assets/Image/Toolkit_rpg.png" /></a>
                  <h3>Nom du forum</h3>
                </div>
                <div class="listefofo">
                  <div class="iconmodofofo">
                    <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
                    <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
                  </div>
                </div>
              </div>
              <div class="listeforum">
                <div class="entetefofo">
                  <a href="#"><img src="../assets/Image/Toolkit_rpg.png" /></a>
                  <h3>Nom du forum</h3>
                </div>
                <div class="listefofo">
                  <div class="iconmodofofo">
                    <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
                    <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
                  </div>
                </div>
              </div>
              <div class="listeforum">
                <div class="entetefofo">
                  <a href="#"><img src="../assets/Image/Toolkit_rpg.png" /></a>
                  <h3>Nom du forum</h3>
                </div>
                <div class="listefofo">
                  <div class="iconmodofofo">
                    <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
                    <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
                  </div>
                </div>
              </div>
              <div class="listeforum">
                <div class="entetefofo">
                  <a href="#"><img src="../assets/Image/Toolkit_rpg.png" /></a>
                  <h3>Nom du forum</h3>
                </div>
                <div class="listefofo">
                  <div class="iconmodofofo">
                    <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
                    <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
                  </div>
                </div>
              </div>
              <div class="listeforum">
                <div class="entetefofo">
                  <a href="#"><img src="../assets/Image/Toolkit_rpg.png" /></a>
                  <h3>Nom du forum</h3>
                </div>
                <div class="listefofo">
                  <div class="iconmodofofo">
                    <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
                    <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
                  </div>
                </div>
              </div>
              <div class="listeforum">
                <div class="entetefofo">
                  <a href="#"><img src="../assets/Image/Toolkit_rpg.png" /></a>
                  <h3>Nom du forum</h3>
                </div>
                <div class="listefofo">
                  <div class="iconmodofofo">
                    <a href="#"><i class="bi bi-card-list" title="Liste des rps"></i></a>
                    <a href="#"><i class="bi bi-person-bounding-box" title="Archiver"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <!--Section aide-->
        <section v-show="activeSection === 'section-6'" id="section-6"
                 class="content-section">
          <div class="container-fluid">
            <div class="trieurintrotop">
              <div>
                <h2>Tu as plein de questions ? J'ai plein de réponses ! </h2>

                <p>Et si je les ai pas, tu peux aller demander à mes créateurs !</p>
                <div style="text-align: center;">
                  <button class="footer"><a
                    href="file:///C:/Users/ange_/Downloads/Untitled-1.html#">Go
                    discord</a></button>
                </div>
              </div>
              <img class="trieurtoolki" src="../assets/Image/Trieur_rpg.png" />
            </div>
            <!--Accordeon de questions-->
            <div class="accordion">
              <div class="accordion-section">
                <div class="accordion-header">J'ai fais une bétise, comment je répare ?
                </div>
                <div class="accordion-content">
                  <p>...</p>
                </div>
              </div>
              <div class="accordion-section">
                <div class="accordion-header">Section 2</div>
                <div class="accordion-content">
                  <p>Contenu de la section 2</p>
                </div>
              </div>
              <div class="accordion-section">
                <div class="accordion-header">Section 3</div>
                <div class="accordion-content">
                  <p>Contenu de la section 3</p>
                </div>
              </div>
              <div class="accordion-section">
                <div class="accordion-header">Section 4</div>
                <div class="accordion-content">
                  <p>Contenu de la section 4</p>
                </div>
              </div>
              <div class="accordion-section">
                <div class="accordion-header">Section 5</div>
                <div class="accordion-content">
                  <p>Contenu de la section 5</p>
                </div>
              </div>
              <div class="accordion-section">
                <div class="accordion-header">Section 6</div>
                <div class="accordion-content">
                  <p>Contenu de la section 6</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-item i.bi {
  font-size: 27px;
}
</style>