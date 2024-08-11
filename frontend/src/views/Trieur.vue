<script>
import SidebarComponent from '@/components/TrieurComponents/SidebarTrieurComponent.vue';
import HomeComponent from '@/components/TrieurComponents/HomeTrieurComponent.vue'
import AjoutComponent from '@/components/TrieurComponents/AjoutTrieurComponent.vue'
import rpListComponent from '@/components/TrieurComponents/RpListTrieurComponent.vue'
import CharacterListComponent from '@/components/TrieurComponents/CharacterListTrieurComponent.vue'
import ForumListComponent from '@/components/TrieurComponents/ForumListTrieurComponent.vue'
import FAQComponent from '@/components/TrieurComponents/FAQTrieurComponent.vue'
import Sidebar from '@/components/FaceclaimComponents/SidebarFaceclaimComponent.vue'
export default {
  components: {
    Sidebar,
    HomeComponent,
    SidebarComponent,
    AjoutComponent,
    rpListComponent,
    CharacterListComponent,
    ForumListComponent,
    FAQComponent
  },
  data() {
    return {
      activeSection: 1,
      activeList: 'prioritaire',
      connected: true,
      loggedIn: true,
      sidebar : true,
    }
  },
  methods: {
    updateActiveSection(section) {
      this.activeSection = Number(section);
    },
    toggleMenu() {
      this.sidebar = !this.sidebar;
    },
  },
  mounted() {
    this.updateActiveSection(1)
    this.connected = true
    this.loggedIn = true
    console.log("loggedIn : "+this.loggedIn)
    console.log("connected : "+this.connected)
    console.log("active : "+this.activeSection)
  }
}
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
    <button v-show="!this.sidebar" class="open-btn" @click="this.toggleMenu()">&#9776;</button>
    <!--page de gauche avec sections liés aux onglets-->
    <div id="page-content-wrapper">
      <!--bouton x fixe pour fermer la navigations-->
      <nav class="navbar position-fixed">
        <div class="container-fluid">
          <button @click="toggleMenu" id="sidebarToggle"
                  class="btn"><i class="bi bi-x-lg"></i></button>
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