const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/node-login', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
