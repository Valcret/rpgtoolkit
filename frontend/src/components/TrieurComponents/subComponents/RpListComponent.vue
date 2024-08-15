<template>
  <div class="active-contenu contenu">
    <div class="exempleliste">
      <div v-for="(rp, index) in rps" :key="rp.id"> <!-- Utiliser 'rp.id' comme clé -->
        <RpComponent
          :id="rp.id"
          :title="rp.title"
          :forumTitle="rp.forumTitle"
          :participants="rp.participants"
          :responseDate="rp.responseDate"
          :responseCount="index + 1"
          :isPriority="rp.priority"
          @changeList="handleChangeList"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import RpComponent from '@/components/TrieurComponents/subComponents/RpComponent.vue';

const props = defineProps({
  listType: {
    type: String,
    required: true,
  }
});

const rps = ref([]); // Stocke la liste des RPs récupérés depuis l'API

const fetchRps = () => {
  rps.value = [
    {
      id: 1, title: "test Titre 1", forumTitle: "test Forum Titre 1", participants:
        [{ name: "moi", url: "#" }, { name: "toi", url: "#" }, { name: "lui", url: "#" }],
      responseDate: "aujourd'hui", priority: true
    },
    {
      id: 2,
      title: "test Titre 2",
      forumTitle: "test Forum Titre 2",
      participants: [{ name: "moi", url: "#" }, { name: "toi", url: "#" }, {
        name: "lui",
        url: "#"
      }],
      responseDate: "aujourd'hui",
      priority: false
    },
    {
      id: 3,
      title: "test Titre 3",
      forumTitle: "test Forum Titre 3",
      participants: [{ name: "moi", url: "#" }, { name: "toi", url: "#" }, {
        name: "lui",
        url: "#"
      }],
      responseDate: "aujourd'hui",
      priority: true
    },
    {
      id: 4,
      title: "test Titre 4",
      forumTitle: "test Forum Titre 4",
      participants: [{ name: "moi", url: "#" }, { name: "toi", url: "#" }, {
        name: "lui",
        url: "#"
      }],
      responseDate: "aujourd'hui",
      priority: true
    }
  ];
}

const remove = (id) => {
  // Filtrer l'élément à supprimer de la liste
  console.log(rps.value)
  rps.value = rps.value.filter(rp => rp.id !== id);
  console.log(rps.value)
}

const handleChangeList = (action, id) => {
  switch (action) {
    case "prioritize":
      if(props.listType === "1"){
        remove(id)
        //updateListe
      }
      console.log(`Prioritize: ${id}`);
      break;
    case "reply":
      remove(id)
      //updateListe
      console.log(`Reply: ${id}`);
      break;
    case "archive":
      remove(id)
      //updateListe
      console.log(`Archive: ${id}`);
      break;
    default:
      console.log(`Action inconnue: ${action}`);
      break;
  }
}

// Récupère les RPs lorsque le composant est monté ou lorsque listType change
onMounted(fetchRps);
watch(() => props.listType, fetchRps);
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques au composant RpListComponent si nécessaire */
</style>
