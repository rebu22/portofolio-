<template>
  <footer class="dx-footer">
    <div class="dx-footer-grid">
      <div>
        <p class="dx-footer-name">Dea Cinta Ramadani</p>
        <p class="dx-footer-meta">Informatika · Institut Teknologi Kalimantan · 2024</p>
        <p class="dx-footer-desc">
          Portofolio akademik untuk mendokumentasikan proses belajar, analisis sistem, dan implementasi proyek
          digital.
        </p>
        <SocialLinks class="mt-5" @placeholder-click="notice = $event" />
        <p v-if="notice" class="mt-2 text-xs text-fog" role="status">
          Akun {{ notice }} belum tersedia — segera hadir.
        </p>
      </div>

      <nav aria-label="Navigasi footer">
        <p class="dx-footer-heading">Jelajahi</p>
        <ul class="dx-footer-list">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink :to="item.path">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <p class="dx-footer-heading">Kontak</p>
        <ul class="dx-footer-list">
          <li>NIM 11241025 — Informatika ITK</li>
          <li>
            <RouterLink to="/contact" class="font-semibold text-white transition hover:text-lilac">
              Kirim pesan via formulir →
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="dx-footer-bottom">
      <div class="dx-footer-bottom-inner">
        <p>© {{ year }} Dea Cinta Ramadani. Dibuat dengan Vue 3 + Tailwind CSS.</p>
        <p>Developer-X layout · data Dea</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import SocialLinks from './SocialLinks.vue'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const year = new Date().getFullYear()
const notice = ref('')
</script>
