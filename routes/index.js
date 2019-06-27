const express = require('express');

const router = express.Router();
// const indexController = require('../controllers/index');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/forgotUser', (req, res) => {
  res.render('forgotUser');
});

router.get('/forgotPassword', (req, res) => {
  res.render('forgotPassword');
});

router.get('/settings', (req, res) => {
  res.render('settings', {
    username: 'Bob',
    password: 'Sparky12',
  });
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;
