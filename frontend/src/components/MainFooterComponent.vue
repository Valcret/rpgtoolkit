<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainFooterComponent'
})
</script>

<template>
  <footer>
    <div class="firstzonefooter">
      <div class="footerleftfirst">Forum Rpg Toolkit, tous droits réservés.</div>
      <div class="footermiddlefirst">
        <a href="accueil.html"><img src="../assets/image/Toolkit_rpg.png"
                                    alt="Toolkit RPG Logo"></a>
      </div>
      <div class="footerlrightfirst">Design et concept par Carmina et Valcret.</div>
    </div>
    <div class="secondzonefooter">
      <button class="footer"><a href="mentionslegales.html">Mentions légales</a></button>
      <button class="footer"><a href="confidentialitecgu.html">CGU et confidentialité</a></button>
      <button class="footer"><a href="partenaires.html">Partenaires</a></button>
      <button class="footer"><a href="https://discord.com">Discord</a></button>
      <button class="footer"><a href="contact.html">Contact</a></button>
    </div>
  </footer>
</template>

<style scoped>

</style>