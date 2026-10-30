const renderHome = (req, res) => {
  res.render('index', { title: 'Puskesmas Sehat pilihan kita' });
};

module.exports = { renderHome };
