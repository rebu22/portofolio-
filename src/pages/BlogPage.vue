<template>
  <div class="dx-page">
    <div class="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <p class="dx-eyebrow">Blog</p>
      <h1 class="dx-title">Jurnal Belajar</h1>
      <p class="dx-lead">
        Catatan proses belajar Dea — Informatika ITK angkatan 2024. Bagian ini masih kosong dan akan diisi
        tulisan nyata, bukan artikel karangan.
      </p>

      <div class="dx-card dx-empty" role="status" aria-label="Status jurnal">
        <p class="dx-empty-icon" aria-hidden="true">📝</p>
        <h2 class="dx-empty-title">Belum ada tulisan</h2>
        <p class="dx-empty-text">
          Tulisan pertama sedang disiapkan. Sementara itu, lihat dokumentasi konsep proyek di halaman Portfolio
          atau kenalan lebih jauh di halaman About.
        </p>
        <div class="dx-empty-actions">
          <RouterLink to="/portfolio" class="dx-text-link">Lihat Portfolio <span aria-hidden="true">→</span></RouterLink>
          <RouterLink to="/about" class="dx-text-link">Tentang Dea <span aria-hidden="true">→</span></RouterLink>
        </div>
      </div>

      <div class="dx-note" aria-label="Catatan kejujuran konten">
        <h2 class="dx-note-title">📝 Catatan dokumentasi</h2>
        <p>
          Halaman ini memakai pola <em>empty state</em> seperti desain acuan: tidak ada proyek atau artikel yang
          dikarang. Tulisan akan ditambahkan satu per satu setelah benar-benar ditulis.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Halaman statis — empty state yang jujur, tanpa data fiktif.
</script>
