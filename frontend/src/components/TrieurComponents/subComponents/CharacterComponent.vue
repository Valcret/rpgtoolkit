<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CharacterComponent'
})
</script>

<template>
  <div class="name">
    <h4>Nom du personnage</h4>
    <div class="iconmodoperso">
      <a href="#"><i class="bi bi-card-list"
                     title="Liste des rps"></i></a>
      <a href="#"><i class="bi bi-person-bounding-box"
                     title="Archiver"></i></a>
    </div>
  </div>
</template>

<style scoped>

</style>