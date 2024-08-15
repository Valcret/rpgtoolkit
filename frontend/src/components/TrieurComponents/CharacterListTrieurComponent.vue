<script setup>
import CharacterForumListComponent from '@/components/TrieurComponents/subComponents/CharacterForumListComponent.vue';
import { defineProps } from 'vue'

defineOptions({ name: 'CharacterListTrieurComponent' });
const props = defineProps({
  ForaCharacters : Object,

});
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
        <CharacterForumListComponent
          v-for="(forum, index) in props.ForaCharacters" :key="forum.id"
          :forumName="forum.name"
          :forum ="forum"
          :index ="index"
        />

        <CharacterForumListComponent/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>