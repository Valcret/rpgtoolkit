import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Faceclaim from '../views/Faceclaim.vue'
import Confidentialitecgu from '../views/Confidentialitecgu.vue'
import Connect from '../views/Connect.vue'
import Contact from '../views/Contact.vue'
import FichCraft from '../views/FichCraft.vue'
import MentionsLegal from '../views/MentionsLegal.vue'
import Partenaires from '../views/Partenaires.vue'
import Trieur from '@/views/Trieur.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil
    },
    {
      path: '/cgu',
      name: 'CGU',
      component: Confidentialitecgu,
    },
    {
      path: '/connect',
      name: 'Connexion',
      component: Connect,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/faceclaim',
      name: 'Faceclaim',
      component: Faceclaim,
    },
    {
      path: '/fichecraft',
      name: "Fich'craft",
      component: FichCraft,
    },
    {
      path: '/mentionslegales',
      name: 'Mentions légales',
      component: MentionsLegal,
    },
    {
      path: '/partenaires',
      name: 'Partenaires',
      component: Partenaires,
    },
    {
      path: '/trieur',
      name: 'Trieur',
      component: Trieur,
    },
  ]
})

export default router
