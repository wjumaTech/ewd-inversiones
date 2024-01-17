exports.getWelcomeCtrl = (req, res, next) => {

  res.render('welcome', {
    pageTitle: 'Welcome'
  });
}