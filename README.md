# Portfolio Akhir Satya — panduan singkat

Website statis (HTML, CSS, JS biasa). Tidak perlu install apa pun dan tidak ada server.

## Isi folder

| File | Fungsinya |
|---|---|
| `content.js` | **Satu-satunya file yang biasa kamu edit.** Berisi kontak dan daftar proyek |
| `index.html` | Halaman utama (teks hero dan About ada di sini) |
| `project.html` | Template halaman case study, otomatis terisi dari `content.js` |
| `style.css`, `main.js` | Tampilan dan perilaku. Biasanya tidak perlu disentuh |
| `assets/` | Gambar dan logo |
| `robots.txt` | Meminta mesin pencari tidak mengindeks situs (sementara) |

## Menambah atau mengubah proyek

1. Masukkan gambar ke folder `assets/` (WebP atau JPG, lebar sekitar 2000px cukup).
2. Buka `content.js`. Proyek yang belum siap sudah ada di sana dengan `hidden: true` (Collegos dan Trofi POS).
3. Isi `cover` dengan path gambar, misalnya `"assets/hexia-cover.webp"`, lalu ubah `hidden: true` jadi `hidden: false`.
4. Kalau mau kartunya membuka halaman case study, tambahkan blok `caseStudy` (contohnya ada di proyek AEON). Tanpa blok itu, kartu menampilkan "Case study coming soon".
5. Field yang dikosongkan (`""`) tidak ditampilkan, jadi tidak akan ada teks `[placeholder]` yang bocor ke publik.

## Publikasi lewat GitHub (gratis)

**A. Unggah ke GitHub**
1. Buat akun di github.com, lalu buat repository baru, misalnya `portfolio`.
2. Pilih **uploading an existing file**, lalu seret **semua isi folder ini** (bukan file zip-nya). `index.html` harus berada di paling atas repo.
3. Klik **Commit changes**.

**B1. Tayang lewat GitHub Pages (paling mudah)**
1. Di repo, buka **Settings → Pages**.
2. Pada *Build and deployment*, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
3. Tunggu beberapa menit. Alamatnya biasanya `https://USERNAME.github.io/portfolio/`.
4. Catatan: di akun gratis, GitHub Pages umumnya mensyaratkan repo yang public. Cek ketentuan terbaru GitHub.

**B2. Atau lewat Cloudflare Pages**
1. Buat akun di cloudflare.com, lalu buka **Workers & Pages** dan buat project Pages dengan **Connect to Git**.
2. Pilih repo `portfolio`. Kosongkan *build command*, dan *output directory* biarkan root.
3. Hasilnya berupa alamat `namaproject.pages.dev`. Nama menu bisa sedikit berbeda dari panduan ini.

**Mengedit setelah tayang:** buka `content.js` di GitHub, klik ikon pensil, ubah, lalu **Commit changes**. Situs ikut berubah dalam beberapa menit. Untuk menambah gambar: **Add file → Upload files** ke dalam folder `assets`.

## Sebelum benar-benar dipublikasikan

Situs ini sengaja dibuat **tidak muncul di Google** dulu (`noindex`). Orang yang punya link tetap bisa membukanya. Kalau sudah siap:

1. Hapus baris `<meta name="robots" content="noindex, nofollow">` di `index.html` dan `project.html`.
2. Hapus file `robots.txt` (atau kosongkan isinya).
3. Pastikan kamu boleh menampilkan proyek klien (AEON MALL, Grand Indonesia, dll.) secara publik. Sebagian perusahaan punya aturan NDA.
4. Ingat bahwa email dan nomor WhatsApp-mu tampil di situs dan bisa menerima spam.
5. Kalau repo public, siapa pun bisa membaca semua file di dalamnya. Jangan menyimpan data rahasia di sini.

## Domain sendiri (opsional, berbayar)

Beli domain (.com atau .id) di registrar mana pun, lalu hubungkan lewat pengaturan **Custom domain** di GitHub Pages atau Cloudflare Pages. Alamat gratis dari hosting sudah cukup untuk memulai.
