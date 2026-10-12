<template>
  <div class="dx-hero">
    <img class="dx-portrait" :src="photoSrc" alt="Dea Cinta Ramadani, mahasiswi Informatika ITK" fetchpriority="high" />

    <section class="dx-intro" aria-labelledby="intro-title">
      <div class="dx-rule" aria-hidden="true"></div>
      <h1 id="intro-title">
        Saya Dea,<br />
        Mahasiswi Informatika
      </h1>
      <p>
        Mahasiswi Informatika Institut Teknologi Kalimantan angkatan 2024 yang tertarik mengembangkan solusi
        digital melalui pembelajaran, analisis sistem, dan implementasi proyek.
      </p>
      <RouterLink
        to="/about"
        class="dx-scroll"
        aria-label="Selengkapnya tentang Dea"
        title="Selengkapnya tentang Dea"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </RouterLink>
    </section>

    <aside class="dx-sidebar" aria-label="Ringkasan profil">
      <section class="dx-section" aria-labelledby="dx-about">
        <h2 id="dx-about">ABOUT ME</h2>
        <p>
          Mahasiswi Informatika ITK angkatan 2024 (NIM 11241025). Fokus pada pembelajaran, analisis sistem, dan
          implementasi proyek digital.
        </p>
        <RouterLink to="/about" class="dx-text-link">
          LEARN MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </RouterLink>
      </section>

      <section class="dx-section" aria-labelledby="dx-work">
        <h2 id="dx-work">MY WORK</h2>
        <p>
          Konsep dan latihan proyek yang didokumentasikan secara jujur: status konsep, latihan, atau ide — bukan
          klaim aplikasi yang sudah selesai.
        </p>
        <RouterLink to="/portfolio" class="dx-text-link">
          BROWSE PORTFOLIO
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </RouterLink>
      </section>

      <section class="dx-social" aria-labelledby="dx-follow">
        <h2 id="dx-follow">FOLLOW ME</h2>
        <SocialLinks @placeholder-click="notice = $event" />
        <p class="dx-social-note" role="status" aria-live="polite">
          <template v-if="notice">Akun {{ notice }} belum tersedia — segera hadir.</template>
          <template v-else>Akun sosial akan ditautkan setelah informasi resmi tersedia.</template>
        </p>
      </section>
    </aside>

    <div class="dx-journal" aria-label="Jelajahi halaman lain">
      <RouterLink v-for="card in quickLinks" :key="card.path" :to="card.path" class="dx-journal-card">
        <p class="dx-journal-emoji" aria-hidden="true">{{ card.emoji }}</p>
        <h2 class="dx-journal-title">{{ card.title }}</h2>
        <p class="dx-journal-text">{{ card.text }}</p>
        <p class="dx-journal-link">Buka halaman <span aria-hidden="true">→</span></p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SocialLinks from '../components/SocialLinks.vue'
import photoSrc from '../assets/photo-profil.png'

const notice = ref('')

const quickLinks = [
  {
    path: '/about',
    emoji: '👩‍🎓',
    title: 'About',
    text: 'Profil akademik, latar belakang, dan pendekatan belajar Dea.',
  },
  {
    path: '/blog',
    emoji: '📝',
    title: 'Blog',
    text: 'Jurnal belajar — akan diisi tulisan nyata, bukan artikel karangan.',
  },
  {
    path: '/portfolio',
    emoji: '🗂️',
    title: 'Portfolio',
    text: 'Daftar konsep dan latihan proyek yang didokumentasikan jujur.',
  },
]
</script>
