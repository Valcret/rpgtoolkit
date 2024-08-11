<script>
import SidebarComponent from '@/components/TrieurComponents/SidebarTrieurComponent.vue';
import HomeComponent from '@/components/TrieurComponents/HomeTrieurComponent.vue';
import AjoutComponent from '@/components/TrieurComponents/AjoutTrieurComponent.vue';
import RpListComponent from '@/components/TrieurComponents/RpListTrieurComponent.vue';
import CharacterListComponent from '@/components/TrieurComponents/CharacterListTrieurComponent.vue';
import ForumListComponent from '@/components/TrieurComponents/ForumListTrieurComponent.vue';
import FAQComponent from '@/components/TrieurComponents/FAQTrieurComponent.vue';

export default {
  components: {
    SidebarComponent,
    HomeComponent,
    AjoutComponent,
    RpListComponent,
    CharacterListComponent,
    ForumListComponent,
    FAQComponent
  },
  data() {
    return {
      activeSection: 1,
      sidebar: true, // Renommé de 'connected' en 'sidebar' pour plus de clarté
      loggedIn: true
    };
  },
  methods: {
    updateActiveSection(section) {
      this.activeSection = Number(section);
    },
    toggleMenu() {
      this.sidebar = !this.sidebar;
      document.getElementById('button-sidebar').innerHTML = this.sidebar
        ? `<i class="fa-solid fa-chevron-left"></i>`
        : `<i class="fa-solid fa-chevron-right"></i>`;
      document.querySelector('.navbar.position-fixed').style.left = this.sidebar ? '' :
        '0';
    }
  },
  mounted() {
    console.log("loggedIn:", this.loggedIn);
    console.log("activeSection:", this.activeSection);
  }
};
</script>

<template>
  <div id="wrapper" class="d-flex">
    <!--Menu de gauche-->
    <SidebarComponent
      :loggedIn="loggedIn"
      :sidebar="sidebar"
      :activeSection="activeSection"
      @update:activeSection="updateActiveSection"
    />
    <button v-show="!this.sidebar" class="open-btn"
            @click="this.toggleMenu()"><i class="fa-solid fa-chevron-left"></i></button>
    <!--page de gauche avec sections liés aux onglets-->
    <div id="page-content-wrapper">
      <!--bouton x fixe pour fermer la navigations-->
      <nav class="navbar position-fixed">
        <div class="container-fluid">
          <button @click="toggleMenu()" id="button-sidebar"
                  class="btn"><i class="fa-solid fa-chevron-left"></i></button>
        </div>
      </nav>
      <!--onglet/sections-->
      <div id="content">
        <!--section arrivée-->
        <HomeComponent
          :loggedIn="loggedIn"
          :activeSection="activeSection"
          v-show="activeSection === 1"
          @update:activeSection="updateActiveSection"/>
        <!--Section ajout de liens rps fofo et perso-->
        <AjoutComponent v-show="activeSection === 2" />
        <!--section liste des rps-->
        <rpListComponent v-show="activeSection === 3" />
        <!--Section forums-->
        <CharacterListComponent v-show="activeSection === 4" />
        <!--Section forums-->
        <ForumListComponent v-show="activeSection === 5" />
        <!--Section aide-->
        <FAQComponent v-show="activeSection === 6" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-item i.bi {
  font-size: 27px;
}
</style>