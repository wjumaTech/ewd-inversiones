exports.errors = (err, req, res, next) => {

  const { stack, message, statusCode } = err;
  const status = statusCode ? statusCode : 500;


  res.render('page500', {
    pageTitle: status,
    stack,
    message,
    status
  });

}