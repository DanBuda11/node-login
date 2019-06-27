exports.homePage = (req, res) => {
  res.render('index');
};

exports.settings = (req, res) => {
  res.render('settings', {
    username: 'Bob',
    password: 'Sparky12',
  });
};

exports.forgotUser = (req, res) => {
  res.render('forgotUser');
};

exports.forgotPassword = (req, res) => {
  res.render('forgotPassword');
};
