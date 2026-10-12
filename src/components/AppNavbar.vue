<template>
  <header class="dx-header">
    <nav class="dx-header-inner" aria-label="Navigasi utama">
      <RouterLink to="/" class="dx-brand" aria-label="Beranda Dea Cinta Ramadani">
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
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
        <span>Developer X</span>
      </RouterLink>

      <!-- Desktop -->
      <div class="dx-nav">
        <RouterLink to="/" class="dx-control" active-class="dx-current">Home</RouterLink>
        <RouterLink to="/about" class="dx-control" active-class="dx-current">About</RouterLink>
        <RouterLink to="/blog" class="dx-control" active-class="dx-current">Blog</RouterLink>
        <RouterLink to="/portfolio" class="dx-control" active-class="dx-current">Portfolio</RouterLink>
        <div class="dx-pages" ref="pagesWrap">
          <button
            ref="pagesBtn"
            type="button"
            class="dx-control dx-pages-btn"
            :aria-expanded="pagesOpen ? 'true' : 'false'"
            aria-haspopup="true"
            @click="togglePages"
          >
            Pages
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
          </button>
          <transition name="page">
            <div v-if="pagesOpen" class="dx-dropdown" role="menu" aria-label="Halaman tambahan">
              <RouterLink to="/contact" class="dx-control" role="menuitem">Contact</RouterLink>
              <RouterLink to="/about" class="dx-control" role="menuitem">About</RouterLink>
            </div>
          </transition>
        </div>
      </div>

      <!-- Tombol hamburger (mobile) -->
      <button
        ref="menuBtn"
        type="button"
        class="dx-control dx-menu-toggle"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-label="open ? 'Tutup menu' : 'Buka menu'"
        aria-controls="dx-mobile-menu"
        @click="toggleMenu"
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
          <path v-if="!open" d="M4 5h16" />
          <path v-if="!open" d="M4 12h16" />
          <path v-if="!open" d="M4 19h16" />
          <path v-if="open" d="M18 6 6 18" />
          <path v-if="open" d="m6 6 12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="page">
      <div v-show="open" id="dx-mobile-menu" ref="menuWrap" class="dx-menu">
        <RouterLink to="/about" class="dx-control">About</RouterLink>
        <RouterLink to="/blog" class="dx-control">Blog</RouterLink>
        <RouterLink to="/portfolio" class="dx-control">Portfolio</RouterLink>
        <RouterLink to="/contact" class="dx-control">Contact</RouterLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)
const pagesOpen = ref(false)
const menuBtn = ref(null)
const menuWrap = ref(null)
const pagesBtn = ref(null)
const pagesWrap = ref(null)

function toggleMenu() {
  open.value = !open.value
}

function togglePages() {
  pagesOpen.value = !pagesOpen.value
}

function closeAll() {
  open.value = false
  pagesOpen.value = false
}

function handlePointerDown(event) {
  const t = event.target
  if (menuWrap.value?.contains(t) || menuBtn.value?.contains(t)) return
  if (pagesWrap.value?.contains(t)) return
  closeAll()
}

function handleKeyDown(event) {
  if (event.key === 'Escape') closeAll()
}

// Tutup menu otomatis setiap kali route berganti + kunci scroll saat menu mobile terbuka.
watch(
  () => route.fullPath,
  () => {
    closeAll()
  },
)
watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => {
  document.addEventListener('pointerdown', handlePointerDown)
  document.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handlePointerDown)
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>
