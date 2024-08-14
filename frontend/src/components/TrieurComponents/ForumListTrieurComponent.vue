<script setup>
import ForumComponent from '@/components/TrieurComponents/subComponents/ForumComponent.vue';

defineOptions({ name: 'ForumListTrieurComponent' });
</script>

<template>
  <section id="section-5"
           class="content-section">
    <div class="container-fluid">
      <div class="trieurintrotop">
        <div>
          <h2>C'est donc là que tu joues ! </h2>
          <!--Pour tout utilisateur-->
          <p>Rien ne vaut un petit Toolki pour veiller sur ses chez soi !</p>
        </div>
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <div class="trieurpersonnagezone">
        <!--Liste des forums-->
        <ForumComponent/>
        <ForumComponent/>
        <ForumComponent/>
        <ForumComponent/>
        <ForumComponent/>
        <ForumComponent/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>