const dialog = document.querySelector('.portfolio-dialog');
const dialogTitle = dialog.querySelector('h2');
const dialogBody = dialog.querySelector('.dialog-body');

// Data Dea — ditulis eksplisit per permintaan: desain ikut prompt Developer-X,
// teks diganti data pemilik. Tidak ada URL sosial palsu, tidak ada proyek karangan.
const copy = {
  about: [
    'Tentang Dea',
    '<p>Saya <strong style="color:var(--foreground)">Dea Cinta Ramadani</strong>, mahasiswi Program Studi Informatika, Institut Teknologi Kalimantan, angkatan 2024 (NIM 11241025).</p>' +
      '<p>Portofolio ini dibuat sebagai dokumentasi perjalanan akademik — mencatat apa yang dipelajari, dianalisis, dan diimplementasikan secara jujur dan terstruktur.</p>' +
      '<div class="skill-list"><span>Vue 3 &amp; Frontend</span><span>Analisis Sistem</span><span>Python &amp; Data</span><span>Git &amp; Kolaborasi</span></div>',
  ],
  portfolio: [
    'Karya Saya',
    '<p>Konsep dan latihan proyek yang didokumentasikan secara jujur. Setiap item berstatus konsep, latihan, atau ide — bukan aplikasi yang sudah selesai.</p>' +
      '<ul>' +
      '<li><strong>Sistem Informasi Tugas Kuliah</strong> — konsep dasbor pencatat dan pemantau tugas kuliah (Vue 3, Vite, Tailwind CSS).</li>' +
      '<li><strong>Analisis Data Nilai Mahasiswa</strong> — latihan analisis data: distribusi nilai dan kehadiran kelas (Python, Pandas, Matplotlib).</li>' +
      '<li><strong>Landing Page UMKM Lokal</strong> — konsep landing page satu halaman: katalog singkat dan kontak (HTML, Tailwind CSS, JavaScript).</li>' +
      '<li><strong>Mini-Game Edukasi Logika</strong> — ide game browser sederhana untuk melatih logika dasar (JavaScript, Canvas).</li>' +
      '</ul>',
  ],
  blog: [
    'Jurnal Belajar',
    '<p>Catatan proses belajar Dea. Bagian ini masih kosong dan akan diisi tulisan nyata — bukan artikel karangan.</p>',
  ],
  contact: [
    'Mari Terhubung',
    '<p>Akun sosial resmi akan ditautkan setelah informasinya tersedia. Sementara itu, silakan kirim pesan lewat formulir di bawah ini (mode demonstrasi — tersimpan di browser, belum terkirim ke mana pun).</p>' +
      '<form class="dialog-contact-form" id="contact-form" novalidate>' +
      '<label>Nama<input type="text" name="name" autocomplete="name" placeholder="Nama lengkap Anda" required minlength="2"></label>' +
      '<label>Email<input type="email" name="email" autocomplete="email" placeholder="nama@email.com" required></label>' +
      '<label>Pesan<textarea name="message" rows="4" placeholder="Tulis pesan atau ajakan kolaborasi… (min. 10 karakter)" required minlength="10" maxlength="500"></textarea></label>' +
      '<button type="submit">Kirim Pesan</button>' +
      '<p class="form-status" role="status" aria-live="polite"></p>' +
      '</form>',
  ],
};

let lastTrigger;

function closeDialog() {
  if (dialog.open) dialog.close();
  if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
}

function openPanel(name, trigger) {
  lastTrigger = trigger || null;
  const entry = copy[name];
  if (!entry) return;
  dialogTitle.textContent = entry[0];
  dialogBody.innerHTML = entry[1];
  closeMenus();
  if (!dialog.open) dialog.showModal();
  wireContactForm();
}

function wireContactForm() {
  const form = dialogBody.querySelector('#contact-form');
  if (!form) return;
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (name.length < 2) {
      status.textContent = 'Nama wajib diisi (min. 2 karakter).';
      form.name.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      status.textContent = 'Format email tidak valid. Contoh: nama@email.com.';
      form.email.focus();
      return;
    }
    if (message.length < 10) {
      status.textContent = 'Pesan wajib diisi (min. 10 karakter).';
      form.message.focus();
      return;
    }
    status.textContent = 'Pesan lolos validasi (mode demonstrasi). Belum ada backend, jadi pesan ini belum terkirim ke mana pun.';
    form.reset();
  });
}

function closeMenus() {
  document.querySelectorAll('.portfolio-dropdown,.portfolio-menu').forEach((el) => el.remove());
  document.querySelectorAll('[aria-expanded]').forEach((el) => {
    if (el.classList.contains('menu-toggle') || el.dataset.action === 'pages') {
      el.setAttribute('aria-expanded', 'false');
    }
  });
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) toggle.setAttribute('aria-label', 'Open menu');
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) {
    if (!event.target.closest('.pages-container,.portfolio-menu')) closeMenus();
    return;
  }
  const action = button.dataset.action;
  if (action === 'close') {
    closeDialog();
    return;
  }
  if (action === 'home') {
    closeDialog();
    closeMenus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (action === 'pages' || button.classList.contains('menu-toggle')) {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    closeMenus();
    if (expanded) return;
    button.setAttribute('aria-expanded', 'true');
    const dropdown = document.createElement('div');
    const isMenu = button.classList.contains('menu-toggle');
    dropdown.className = isMenu ? 'portfolio-menu' : 'portfolio-dropdown';
    if (isMenu) {
      button.setAttribute('aria-label', 'Close menu');
      ['about', 'blog', 'portfolio', 'contact'].forEach((name) => {
        const item = document.createElement('button');
        item.className = 'portfolio-control';
        item.dataset.action = name;
        item.textContent = name === 'about' ? 'About' : name === 'blog' ? 'Blog' : name === 'portfolio' ? 'Portfolio' : 'Contact';
        dropdown.append(item);
      });
      document.querySelector('.portfolio-header').append(dropdown);
    } else {
      ['contact', 'about'].forEach((name) => {
        const item = document.createElement('button');
        item.className = 'portfolio-control';
        item.dataset.action = name;
        item.textContent = name === 'contact' ? 'Contact' : 'About';
        dropdown.append(item);
      });
      button.parentElement.append(dropdown);
    }
    return;
  }
  if (copy[action]) {
    openPanel(action, button);
  }
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenus();
});
