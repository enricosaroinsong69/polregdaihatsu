# Polreg Sulut

Dashboard Polreg Sulawesi Utara (semua merek) dan penjualan Daihatsu per cabang (dicocokkan dari DO List lewat nomor rangka). Bisa dibuka di HP Android, iPhone, iPad, dan laptop, dan bisa dipasang di layar utama.

## Isi folder

| Berkas | Fungsi |
|---|---|
| `index.html` | Aplikasinya |
| `data/polreg.json` | **Data** (Polreg + DO List). Hanya berkas ini yang diganti tiap update bulanan |
| `lib/` | Pustaka grafik (Chart.js) dan pembaca Excel (SheetJS) |
| `sw.js`, `manifest.webmanifest`, `icons/` | Supaya bisa dipasang seperti aplikasi dan tetap terbuka tanpa sinyal |

## Update data tiap bulan

1. Buka aplikasinya, masuk ke **Kelola data**.
2. Unggah berkas Polreg bulan baru (dan/atau DO List cabang).
3. Tekan **Unduh polreg.json (untuk GitHub)**.
4. Di GitHub buka folder `data` → **Add file → Upload files** → unggah `polreg.json` (nama harus persis `polreg.json`, ganti yang lama) → **Commit changes**.
5. Tunggu 1–2 menit, lalu muat ulang aplikasi di HP/iPad/laptop.

## Pasang di layar utama

- **Android (Chrome):** menu ⋮ → *Tambahkan ke layar utama* / *Instal aplikasi*.
- **iPhone / iPad (Safari):** tombol Bagikan → *Tambah ke Layar Utama*.
- **Laptop (Chrome / Edge):** ikon instal di ujung kanan kolom alamat.

Catatan: kalau repo ini publik, siapa pun yang tahu alamatnya bisa membuka aplikasi dan datanya.
