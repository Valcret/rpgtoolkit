<template>
  <aside v-show="sidebar" class="filterzone">
    <h2>Filtres</h2>
    <div v-for="filter in filtersList" :key="filter">
      <input type="checkbox" :id="filter" :value="filter" @change="updateFilters($event.target.value, $event.target.checked)">
      <label :for="filter">{{ filter }}</label>
    </div>
    <button @click="resetFilters">Réinitialiser</button>
    <button @click="toggleMenu">Fermer</button>
    <button @click="hideNSFW">{{ hiddenNSFW ? 'Afficher' : 'Cacher' }} NSFW</button>
    <button v-if="isConnected()" @click="logOut">Déconnexion</button>
  </aside>
</template>

<script>
export default {
  props: {
    filters: Array,
    hiddenNSFW: Boolean,
    isConnected: Function,
    sidebar: Boolean,
  },
  data() {
    return {
      filtersList: ['size-200*400', 'hair-tainted', 'detail-tattoo', 'detail-piercing', 'style-nsfw', 'style-contemp', 'hair-redhead', 'style-historic'],
    };
  },
  methods: {
    updateFilters(filter, checked) {
      this.$emit('updateFilters', filter, checked);
    },
    resetFilters() {
      this.$emit('resetFilters');
    },
    hideNSFW() {
      this.$emit('hideNSFW');
    },
    toggleMenu() {
      this.$emit('toggleMenu');
    },
    logOut() {
      // Logique de déconnexion
    },
  },
};
</script>

<style scoped>
/* styles similaires à ceux que vous avez fournis */
</style>
