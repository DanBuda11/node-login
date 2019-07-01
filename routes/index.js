const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

// Will need to check if user logged in/out to determine nav buttons shown (login, logout, register, settings) and whether home page will show something simple that changes depending on being logged in or out
router.get('/', controllers.homePage);

// Restrict acccess to login page if user is already logged in? Not necessarily from page navigation but if someone manually enters the url '/login'
router.get('/login', controllers.loginForm);

router.post('/login', controllers.login);

router.get('/register', controllers.registerForm);

router.post('/register', controllers.register);

router.get('/settings', controllers.isLoggedIn, controllers.settings);

// I should do some kind of username recovery similar to password recovery
// router.get('/forgotuser', controllers.forgotUser);

router.get('/forgotpassword', controllers.forgotPassword);

module.exports = router;
