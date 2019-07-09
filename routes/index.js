const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const controllers = require('../controllers');
// Will need to check if user logged in/out to determine nav buttons shown (login, logout, register, settings) and whether home page will show something simple that changes depending on being logged in or out
router.get('/', controllers.isLoggedIn, controllers.homePage);

// Restrict acccess to login page if user is already logged in? Not necessarily from page navigation but if someone manually enters the url '/login'
router.get('/login', controllers.loginForm);

router.post('/login', controllers.login);

router.get('/register', controllers.registerForm);

router.post(
  '/register',
  [check('email').isEmail(), check('password').isLength({ min: 5 })],
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
  },
  controllers.register,
  controllers.login,
);

router.get('/logout', controllers.logout);

router.get('/settings', controllers.isLoggedIn, controllers.settings);

// Render password recovery form
router.get('/forgot', controllers.forgotForm);

module.exports = router;
