// Model data untuk endpoint GET /api/produk.
// Karena project bertema Puskesmas, contoh data berisi layanan kesehatan.
const produk = [
  {
    id: 1,
    nama: 'Poli Umum',
    kategori: 'Pelayanan Kesehatan',
    deskripsi: 'Pelayanan pemeriksaan kesehatan umum.'
  },
  {
    id: 2,
    nama: 'Poli Gigi',
    kategori: 'Pelayanan Kesehatan',
    deskripsi: 'Pelayanan pemeriksaan dan konsultasi kesehatan gigi.'
  },
  {
    id: 3,
    nama: 'Kesehatan Ibu dan Anak (KIA)',
    kategori: 'Pelayanan Kesehatan',
    deskripsi: 'Pelayanan kesehatan ibu, bayi, dan anak.'
  },
  {
    id: 4,
    nama: 'Imunisasi',
    kategori: 'Pelayanan Kesehatan',
    deskripsi: 'Pelayanan imunisasi sesuai jadwal yang berlaku.'
  }
];

const getAllProduk = () => produk;

module.exports = { getAllProduk };
