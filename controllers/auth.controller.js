exports.loginCtrl = (req, res, next) => {

  res.render('login', {
    pageTitle: 'Iniciar sesion'
  });
}