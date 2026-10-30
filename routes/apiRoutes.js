const express = require('express');
const router = express.Router();
const { getStatus, getProduk } = require('../controllers/produkController');

// Dua endpoint API wajib Week 7
router.get('/status', getStatus);
router.get('/produk', getProduk);

module.exports = router;
