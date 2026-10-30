const express = require('express');
const path = require('path');
const appConfig = require('./config/appConfig');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const indexRoutes = require('./routes/indexRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Konfigurasi view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware bawaan dan file statis
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Logger dipasang sebelum routes agar semua request tercatat
app.use(logger);

// Routes halaman dan API
app.use('/', indexRoutes);
app.use('/api', apiRoutes);

// Halaman tidak ditemukan
app.use((req, res) => {
  res.status(404).send('404 - Halaman tidak ditemukan');
});

// Error handler harus dipasang paling akhir
app.use(errorHandler);

app.listen(appConfig.port, () => {
  console.log(`======================================`);
  console.log(`${appConfig.appName} berjalan`);
  console.log(`Frontend: http://localhost:${appConfig.port}`);
  console.log(`API Status: http://localhost:${appConfig.port}/api/status`);
  console.log(`API Produk: http://localhost:${appConfig.port}/api/produk`);
  console.log(`======================================`);
});

module.exports = app;
