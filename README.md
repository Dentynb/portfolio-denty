# Portfolio Denty Nirwana Bintang

Website portfolio statis (HTML, CSS, JS polos — tanpa framework/build tool), dibuat berdasarkan CV.
Dirancang ceria & animatif, dan sengaja dipisah per file supaya gampang diedit di VS Code.

## Struktur File

```
portfolio-denty/
├─ index.html          -> semua konten & struktur halaman
├─ css/
│  └─ style.css        -> semua styling, warna, dan animasi
├─ js/
│  ├─ main.js           -> logika interaksi (navbar, slider, modal, dll)
│  └─ projects-data.js  -> DI SINI kamu isi proyekmu sendiri (manual, bukan CRUD)
└─ assets/
   ├─ profile/          -> taruh foto profilmu di sini
   ├─ images/uiux/       -> gambar-gambar proyek UI/UX & Frontend
   ├─ images/data/       -> gambar-gambar proyek Data Analyst & Science
   └─ pdf/data/           -> file PDF laporan/proyek data
```

## Cara Menjalankan

Cukup buka `index.html` langsung di browser (double click), atau pakai extension
**Live Server** di VS Code supaya lebih nyaman saat mengedit.

## 1. Mengganti Foto Profil

1. Taruh fotomu (format jpg/png) di folder `assets/profile/`.
2. Buka `index.html`, cari baris:
   ```html
   <img src="assets/profile/placeholder.jpg" alt="Foto Denty Nirwana Bintang" id="profilePhoto">
   ```
3. Ganti `assets/profile/placeholder.jpg` dengan path foto barumu, contoh:
   `assets/profile/foto-denty.jpg`

## 2. Menambah / Mengedit Proyek

Semua proyek diatur manual di file **`js/projects-data.js`** (bukan database/CRUD).
Ada 2 kelompok: `uiux` (UI/UX & Frontend) dan `data` (Data Analyst & Science).

Contoh 1 proyek dengan galeri gambar (bisa di-next/slide):
```js
{
  title: "Judul Proyek",
  description: "Deskripsi proyek...",
  cover: "assets/images/uiux/cover.jpg",
  media: {
    type: "images",
    images: [
      "assets/images/uiux/project-1.jpg",
      "assets/images/uiux/project-2.jpg"
    ]
  }
}
```

Contoh 1 proyek dengan dokumen PDF (bisa discroll di popup):
```js
{
  title: "Judul Proyek Data",
  description: "Deskripsi proyek...",
  cover: "assets/images/data/cover.jpg",
  media: {
    type: "pdf",
    pdf: "assets/pdf/data/laporan.pdf"
  }
}
```

Langkah:
1. Taruh file gambar/PDF ke folder `assets/images/...` atau `assets/pdf/...`.
2. Tambahkan object baru di array `uiux: [...]` atau `data: [...]` pada `projects-data.js`.
3. Simpan, refresh browser — kartu proyek baru otomatis muncul di grid, lengkap dengan popup.

Urutan array = urutan tampil kartu. Hapus object untuk menghapus proyek.

## 3. Mengedit Konten Lain (Tentang, Pengalaman, Skill, dll)

Semua teks selain proyek langsung ditulis di `index.html` per section
(`#about`, `#experience`, `#education`, `#skills`, `#achievements`, `#contact`).
Tinggal cari section-nya dan edit teksnya langsung.

## 4. Mengubah Warna / Font

Buka `css/style.css`, di bagian paling atas ada variabel warna & font (`:root { ... }`).
Ubah nilai hex warnanya untuk mengganti tema warna di seluruh halaman sekaligus.

## Catatan Teknis

- Tidak pakai Tailwind — CSS ditulis manual di `style.css` supaya tidak butuh proses build
  apa pun. Tinggal edit dan refresh.
- Ikon pakai Font Awesome (dimuat via CDN), font pakai Google Fonts (Fredoka + Plus Jakarta Sans).
- Jika gambar proyek belum ditambahkan, kartu proyek otomatis menampilkan ikon placeholder
  supaya tampilan tetap rapi.
