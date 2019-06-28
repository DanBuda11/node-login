const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', authController.homePage);

router.get('/login', userController.login);

router.get('/register', userController.register);

// router.post('/register', userController.validateRegister);

router.get('/settings', authController.settings);

router.get('/forgotuser', authController.forgotUser);

router.get('/forgotpassword', authController.forgotPassword);

module.exports = router;
