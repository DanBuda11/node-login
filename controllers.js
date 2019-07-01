// const mongoose = require('mongoose');

// const User = mongoose.model('User');
// const {
//   check,
//   body,
//   sanitizeBody,
//   validationResult,
//   equals,
// } = require('express-validator');

// Render the home page
exports.homePage = (req, res) => {
  res.render('index');
};

// Render the registration page
exports.registerForm = (req, res) => {
  res.render('registerForm');
};

exports.register = (req, res, next) => {
  // This needs to run after validation of registration input form and before the function that handles logging in; once user account created successfully, redirect back to home page with welcome message; failure to register should show some kind of error message
  next();
};

// Render the login page
exports.loginForm = (req, res) => {
  res.render('loginForm');
};

// Runs to log in a user by validating username/password combo
exports.login = (req, res) => {
  // stuff goes here
  // Redirect back to home page with message that logging in was either successful or failed
};

exports.logout = (req, res) => {
  // Logout logic goes here. Should redirect to '/'
};

// Render the settings/account page
exports.settings = (req, res) => {
  res.render('settings');
};

exports.updatePassword = (req, res) => {
  // Change a user's password from the settings page
};

exports.forgotForm = (req, res) => {
  // Show the page for confirming a user wants an email sent with a link for password reset
  res.render('forgotForm');
};

exports.forgotPassword = (req, res) => {
  // Send a link to a password reset page
};

exports.resetForm = (req, res) => {
  // This is the page that shows when a user clicks the email link to reset a passord
  res.render('resetForm');
};

exports.resetPassword = (req, res) => {
  // Perform the tasks of setting a new password for the user
  // Then it should log them in (exports.login) & redirect to home page logged in
};

exports.deleteUser = (req, res) => {
  // Tasks to perform to permanently delete a user account
};

exports.isLoggedIn = (res, req) => {
  // This will need to run to confirm user is logged in before allowing access to settings page, forgot password page, reset password page, or home page that shows someone as logged in
};

// This should end up being the validateRegister middleware run before and if successful, redirects to either the user settings page or the home page, with confirmation that user has been added to the database.
// exports.submitRegister = (req, res) => {};

// Since express-validator has changed its syntax, start with just 1 type of validation with it in the export below and keep adding to fix each thing as you go.

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

// exports.settings = (req, res) => {
//   res.render('settings', {
//     username: 'Bob',
//     password: 'Sparky12',
//   });
// };
