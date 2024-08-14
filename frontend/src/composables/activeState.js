import { ref } from 'vue';

// Fonction générique pour gérer les états actifs
export function useActiveState() {
  const states = ref({});

  function setActive(key, value) {
    states.value[key] = value;
  }

  function getActive(key) {
    return states.value[key];
  }

  return {
    setActive,
    getActive
  };
}
