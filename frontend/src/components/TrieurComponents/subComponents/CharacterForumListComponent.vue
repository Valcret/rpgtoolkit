<script lang="ts">
import { defineComponent } from 'vue'
import CharacterComponent
  from '@/components/TrieurComponents/subComponents/CharacterComponent.vue'

export default defineComponent({
  name: 'CharacterForumListComponent',
  components: { CharacterComponent }
})
</script>

<template>
  <div class="forumpersonnage">
    <h3>Nom du forum</h3>
    <div class="personnageduforum">
      <CharacterComponent/>
      <CharacterComponent/>
      <CharacterComponent/>
      <CharacterComponent/>
      <CharacterComponent/>
    </div>
  </div>
</template>

<style scoped>

</style>