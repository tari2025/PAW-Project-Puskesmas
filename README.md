# PAW-Project-Puskesmas-Week7

Project Week 7: Integrasi Frontend, REST API, dan Middleware Logger.

Frontend menggunakan EJS dan Bootstrap dengan tampilan media informasi layanan Puskesmas: Home, Informasi (Pendaftaran, Jadwal Layanan, Biaya Rawat), Medi-chat, Login, Layanan Utama, dan Informasi Terbaru. Tidak ada menu atau katalog produk pada frontend.

## Teknologi
- Node.js dan Express.js
- EJS sebagai view engine
- Bootstrap 5 melalui CDN
- Arsitektur Model-View-Controller (MVC)
- Middleware logger

## Cara menjalankan
1. Buka terminal pada folder project.
2. Jalankan `npm install`.
3. Jalankan `npm run dev` (atau `npm start`).
4. Buka `http://localhost:3000`.

## Dua endpoint API wajib Week 7
1. `GET http://localhost:3000/api/status` — status aplikasi Puskesmas.
2. `GET http://localhost:3000/api/produk` — array JSON berisi contoh layanan Puskesmas. Nama endpoint tetap `/api/produk` agar sesuai instruksi dosen; data ini tidak ditampilkan sebagai katalog pada frontend.

Tidak ada endpoint API tambahan.

## Middleware Logger
Setiap request dicatat pada terminal dan disimpan ke `logs/logger.md`.
