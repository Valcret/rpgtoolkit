<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FAQTrieurComponent'
})
</script>

<template>
  <section id="section-6"
           class="content-section">
    <div class="container-fluid">
      <div class="trieurintrotop">
        <div>
          <h2>Tu as plein de questions ? J'ai plein de réponses ! </h2>

          <p>Et si je les ai pas, tu peux aller demander à mes créateurs !</p>
          <div style="text-align: center;">
            <button class="footer"><a
              href="file:///C:/Users/ange_/Downloads/Untitled-1.html#">Go
              discord</a></button>
          </div>
        </div>
        <img class="trieurtoolki" src="../assets/Image/Trieur_rpg.png" />
      </div>
      <!--Accordeon de questions-->
      <div class="accordion">
        <div class="accordion-section">
          <div class="accordion-header">J'ai fais une bétise, comment je répare ?
          </div>
          <div class="accordion-content">
            <p>...</p>
          </div>
        </div>
        <div class="accordion-section">
          <div class="accordion-header">Section 2</div>
          <div class="accordion-content">
            <p>Contenu de la section 2</p>
          </div>
        </div>
        <div class="accordion-section">
          <div class="accordion-header">Section 3</div>
          <div class="accordion-content">
            <p>Contenu de la section 3</p>
          </div>
        </div>
        <div class="accordion-section">
          <div class="accordion-header">Section 4</div>
          <div class="accordion-content">
            <p>Contenu de la section 4</p>
          </div>
        </div>
        <div class="accordion-section">
          <div class="accordion-header">Section 5</div>
          <div class="accordion-content">
            <p>Contenu de la section 5</p>
          </div>
        </div>
        <div class="accordion-section">
          <div class="accordion-header">Section 6</div>
          <div class="accordion-content">
            <p>Contenu de la section 6</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>