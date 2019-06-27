const express = require('express');
const path = require('path');
// const expressValidator = require('express-validator');
const routes = require('./routes/index');
// const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressValidator());
app.use('/', routes);

// app.use(errorHandlers.notFound);

// if (app.get('env') === 'development') {
//   app.use(errorHandlers.developmentErrors);
// }

// app.use(errorHandlers.productionErrors);

module.exports = app;
