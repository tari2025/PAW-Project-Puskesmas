const errorHandler = (err, req, res, next) => {
  console.error('Terjadi kesalahan:', err.message);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server'
  });
};

module.exports = errorHandler;
