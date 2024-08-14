<script setup>
import CharacterForumListComponent from '@/components/TrieurComponents/subComponents/CharacterForumListComponent.vue';

defineOptions({ name: 'CharacterListTrieurComponent' });
</script>


<template>
  <section
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
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <!--Liste des persos par fofo-->
      <div class="trieurpersonnagezone">
        <!--Boite pour un forum-->
        <CharacterForumListComponent />
        <CharacterForumListComponent />
        <CharacterForumListComponent />
        <CharacterForumListComponent />
        <CharacterForumListComponent />
        <CharacterForumListComponent />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>