import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import PortfolioPage from '../pages/PortfolioPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ProjectDetailPage from '../pages/ProjectDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Dea Cinta Ramadani — Informatika Student' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { title: 'About — Dea Cinta Ramadani' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage,
    meta: { title: 'Blog — Dea Cinta Ramadani' },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage,
    meta: { title: 'Portfolio — Dea Cinta Ramadani' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: { title: 'Contact — Dea Cinta Ramadani' },
  },
  {
    // LAYOUT 5 — dynamic route detail proyek
    path: '/portfolio/:id',
    name: 'project-detail',
    component: ProjectDetailPage,
    meta: { title: 'Project Detail — Dea Cinta Ramadani' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PortfolioPage,
    meta: { title: 'Portfolio — Dea Cinta Ramadani', fromNotFound: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Pindah halaman selalu mulai dari atas; pertahankan anchor bila ada hash.
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta?.title ?? 'Dea Cinta Ramadani — Informatika Student'
})

export default router
