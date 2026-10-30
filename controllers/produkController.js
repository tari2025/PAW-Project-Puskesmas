const { getAllProduk } = require('../models/produkModel');

// GET /api/status
const getStatus = (req, res) => {
  res.status(200).json({
    success: true,
    nama_aplikasi: 'Puskesmas Sehat',
    status: 'online',
    pesan: 'Server berjalan dengan baik',
    versi: '1.0.0',
    waktu: new Date().toISOString()
  });
};

// GET /api/produk
// Endpoint dipertahankan sesuai instruksi tugas Week 7.
// Data contoh disesuaikan dengan tema Puskesmas.
const getProduk = (req, res) => {
  res.status(200).json({
    success: true,
    total: getAllProduk().length,
    data: getAllProduk()
  });
};

module.exports = { getStatus, getProduk };
