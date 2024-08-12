<template>
  <section id="section-3" class="content-section">
    <div class="container-fluid">
      <div class="trieurintrotop">
        <div>
          <h2>C'est l'heure de s'occuper de tes rps ! </h2>
          <!--Pour tout utilisateur-->
          <p>Toi tu réponds et tu cliques pour les ranger ! Moi je te soutiens moralement !</p>
        </div>
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <div class="ajoutrpfofoperso">
        <div class="ongledajout">
          <div class="container-onglets">
            <div
              :class="{ active: activeList === 'prioritaire' }"
              @click="setActiveList('prioritaire')"
              class="onglets"
            >
              Prioritaires
            </div>
            <div
              :class="{ active: activeList === 'aFaire' }"
              @click="setActiveList('aFaire')"
              class="onglets"
            >
              En cours
            </div>
            <div
              :class="{ active: activeList === 'enAttente' }"
              @click="setActiveList('enAttente')"
              class="onglets"
            >
              En attente
            </div>
            <div
              :class="{ active: activeList === 'archives' }"
              @click="setActiveList('archives')"
              class="onglets"
            >
              Archivés
            </div>
          </div>
          <div v-show="activeList === 'prioritaire'" class="contenu active-contenu">
            <div class="exempleliste">
              <div class="article1">
                <div class="article1haut">
                  <div class="iconexemple">
                    <a class="exempleicone" href="#"><i class="bi bi-star"></i></a>
                    <a class="exempleicone" href="#"><i class="bi bi-check-circle"></i></a>
                    <a class="exempleicone" href="#"><i class="bi bi-archive"></i></a>
                    <a class="exempleicone" href="#"><i class="bi bi-pen"></i></a>
                  </div>
                  <div class="fofoarticle">De sang et d'art</div>
                </div>
                <div class="article1bas">
                  <div class="article1gauche">
                    <div class="exemplechiffre">1</div>
                    <div class="article1droitebas">date de réponses</div>
                  </div>
                  <div class="article1droite">
                    <h3><a href="#">Titre du rp</a></h3>
                    <div class="article1droitemilieu">
                      <a class="nomp" href="#">Nom de participant</a> - <a class="nomp" href="#">Nom de participant</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="article1">
                <div class="article1haut">
                  <div class="iconexemple">
                    <a class="exempleicone" href="#"><i class="bi bi-star"></i></a>
                    <a class="exempleicone" href="#"><i class="bi bi-check-circle"></i></a>
                    <a class="exempleicone" href="#"><i class="bi bi-archive"></i></a>
                    <a class="exempleicone" href="#"><i class="bi bi-pen"></i></a>
                  </div>
                  <div class="fofoarticle">De sang et d'art</div>
                </div>
                <div class="article1bas">
                  <div class="article1gauche">
                    <div class="exemplechiffre">1</div>
                    <div class="article1droitebas">date de réponses</div>
                  </div>
                  <div class="article1droite">
                    <h3><a href="#">Titre du rp</a></h3>
                    <div class="article1droitemilieu">
                      <a class="nomp" href="#">Nom de participant</a> - <a class="nomp" href="#">Nom de participant</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeList === 'aFaire'" class="contenu">
            <h3>Remplis le formulaire ci-dessous pour ajouter ton forum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis alias quod, dolores eum illum doloremque assumenda odio architecto, dolorum vitae nobis, quo deleniti ipsum.</p>
          </div>
          <div v-show="activeList === 'enAttente'" class="contenu">
            <h3>Remplis le formulaire ci-dessous pour ajouter ton personnage</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis alias quod, dolores eum illum doloremque assumenda odio architecto, dolorum vitae nobis, quo deleniti ipsum.</p>
          </div>
          <div v-show="activeList === 'archives'" class="contenu">
            <h3>Remplis le formulaire ci-dessous pour ajouter ton personnage</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis alias quod, dolores eum illum doloremque assumenda odio architecto, dolorum vitae nobis, quo deleniti ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RpListTrieurComponent',
  data() {
    return {
      activeList: 'prioritaire' // Valeur par défaut
    };
  },
  methods: {
    setActiveList(list) {
      this.activeList = list;
    }
  }
};
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à la section */
</style>
