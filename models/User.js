const mongoose = require('mongoose');

const { Schema } = mongoose;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please provide an email address',
  },
  name: {
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isLength(value, { min: 5 })) {
        throw new Error('Name is too short');
      }
    },
    required: 'Please provide a name',
  },
  password: {
    type: String,
    required: 'Please provide a password',
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

// Temp code to test schema
const User = new mongoose.model('User', userSchema);
const user = User({
  email: 'dan@dan.com',
  name: 'Frankie',
  password: 'passwrd',
});
user
  .save()
  .then(() => {
    console.log(user);
  })
  .catch(error => {
    console.log(error);
  });

module.exports = mongoose.model('User', userSchema);
