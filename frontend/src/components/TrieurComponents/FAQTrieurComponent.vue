<script lang="ts">
import { defineComponent } from 'vue'
import FAQAccordeonComponent
  from '@/components/TrieurComponents/subComponents/FAQAccordeonComponent.vue'

export default defineComponent({
  components: {
    FAQAccordeonComponent
  }
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
        <img class="trieurtoolki" src="../../assets/Image/Trieur_rpg.png" />
      </div>
      <!--Accordeon de questions-->
      <div class="accordion">
        <FAQAccordeonComponent
          headerText="Comment créer un nouveau compte ?"
          contentText="Pour créer un nouveau compte, suivez ces étapes..."
        />
        <FAQAccordeonComponent
          headerText="Comment créer un nouveau compte ?"
          contentText="Pour créer un nouveau compte, suivez ces étapes..."
        />
        <FAQAccordeonComponent
          headerText="Comment créer un nouveau compte ?"
          contentText="Pour créer un nouveau compte, suivez ces étapes..."
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>