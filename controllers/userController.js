const mongoose = require('mongoose');
const {
  check,
  body,
  sanitizeBody,
  validationResult,
  equals,
} = require('express-validator');

exports.login = (req, res) => {
  res.render('login');
};

exports.register = (req, res) => {
  res.render('register');
};

// exports.validateRegister = (req, res, next) => {
//   [
//     check('name', 'Email is not valid')
//       .not()
//       .isEmpty()
//       .isEmail()
//       .normalizeEmail({
//         remove_dots: false,
//         remove_extension: false,
//         gmail_remove_subaddress: false,
//       }),
//   ];

// sanitizeBody('name');
// req
//   .check('name', 'You must provide a name')
//   .not()
//   .isEmpty();
// req.check('name', 'Email is not valid').isEmail();
// req.sanitizeBody('email').normalizeEmail({

// });
// req
//   .check('password', 'Password cannot be blank')
//   .not()
//   .isEmpty();
// req
//   .check('password-confirm', 'Confirmed password cannot be blank')
//   .not()
//   .isEmpty();
// req
//   .check('password-confirm', 'Your passwords do not match')
//   .equals(req.body.password);

// const errors = req.validationResult(req);
// if (errors) {
//   req.flash('error', errors.map(err => err.msg));
//   res.render('register', { body: req.body, flashes: req.flash() });
// }
