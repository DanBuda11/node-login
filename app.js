const express = require('express');
const path = require('path');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
// const errorHandlers = require('./handlers/errorHandlers');
// const config = './webpack.config.js';

const app = express();
// const DIST_DIR = __dirname;
// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

// app.use(errorHandlers.notFound);

// if (app.get('env') === 'development') {
//   app.use(errorHandlers.developmentErrors);
// }

// app.use(errorHandlers.productionErrors);

module.exports = app;
