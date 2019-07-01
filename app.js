const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const routes = require('./routes/index');
// const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressValidator());
app.use('/', routes);

// app.use(errorHandlers.notFound);

// if (app.get('env') === 'development') {
//   app.use(errorHandlers.developmentErrors);
// }

// app.use(errorHandlers.productionErrors);

module.exports = app;
