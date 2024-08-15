<template>
  <div class="article1" :id="'rp-' + id">
    <div class="article1haut">
      <div class="iconexemple">
        <a
          class="exempleicone"
          :class="{ 'bi-star-fill': isPriority, 'bi-star': !isPriority }"
          href="#"
          @click="prioritize"
          title="Prioritaire"
        >
          <i class="bi"></i>
        </a>
        <a
          class="exempleicone"
          href="#"
          @click="reply"
          title="Répondu"
        >
          <i class="bi bi-check-circle"></i>
        </a>
        <a
          class="exempleicone"
          href="#"
          @click="archive"
          title="Archiver"
        >
          <i class="bi bi-archive"></i>
        </a>
        <a
          class="exempleicone"
          href="#"
          @click="update"
          title="Editer"
        >
          <i class="bi bi-pen"></i>
        </a>
      </div>
      <div class="fofoarticle">{{ forumTitle }}</div>
    </div>
    <div class="article1bas">
      <div class="article1gauche">
        <div class="exemplechiffre">{{ responseCount }}</div>
        <div class="article1droitebas">{{ responseDate }}</div>
      </div>
      <div class="article1droite">
        <h3><a href="#">{{ title }}</a></h3>
        <div class="article1droitemilieu">
          <template v-for="(participant, index) in participantsWithSeparators" :key="index">
            <a
              class="nomp"
              :href="participant.url || '#'"
            >
              {{ participant.name || participant }}
            </a>
            <span v-if="participant.separator" class="separator"> - </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits, ref } from 'vue';

const props = defineProps({
  id: Number,
  title: String,
  forumTitle: String,
  participants: {
    type: Array,
    required: true
  },
  responseDate: String,
  responseCount: Number,
  isPriority: Boolean
});

const emit = defineEmits(['changeList']);

// Utilisation d'une variable réactive pour suivre l'état de la priorité
const isPriority = ref(props.isPriority);

const participantsWithSeparators = computed(() => {
  return props.participants.map((participant, index) => ({
    ...participant,
    separator: index < props.participants.length - 1
  }));
});

const prioritize = () => {
  // Inverser la valeur de la priorité
  isPriority.value = !isPriority.value;
  emit('changeList', "prioritize", props.id); // Émet l'événement avec l'id
}

const reply = () => {
  emit('changeList', "reply", props.id); // Émet l'événement avec l'id
}

const archive = () => {
  emit('changeList', "archive", props.id); // Émet l'événement avec l'id
}

const update = () => {
  // Logique pour éditer à ajouter plus tard
}
</script>

<style scoped>
.separator {
  margin: 0 8px; /* Ajustez les marges pour l'espacement du séparateur */
}
</style>
