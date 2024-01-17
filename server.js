const express = require('express');
const path = require('path');

const { errors } = require('./middlewares/errors');
const welcomeRoutes = require('./routes/welcome.route');
const authRoutes = require('./routes/auth.route');

const server = app => {

  
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/welcome', welcomeRoutes);
  app.use('/auth', authRoutes);

  //ERROR PAGE
  app.use(errors);

  return app;
}

module.exports = server;
