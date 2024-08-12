<script lang="ts">
import { defineComponent } from 'vue'
import RpComponent from '@/components/TrieurComponents/subComponents/RpComponent.vue'

export default defineComponent({
  name: 'RpListComponent',
  components: { RpComponent }
})
</script>

<template>
  <div class="active-contenu contenu">
    <div class="exempleliste">
      <RpComponent />
      <RpComponent />
    </div>
  </div>
</template>

<style scoped>

</style>