const morgan = require('morgan');
const express = require('express');
const path = require('path');
const cors = require('cors');
const { IS_PROD } = require('./config');
const routes = require('./routes');
const { errorHandler500 } = require('./middleware');
const healthCheckMiddleware = require('express-healthcheck');

const app = express();

!IS_PROD &&
app.use(morgan('dev'));

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes.indexRouter);

app.use('/healthcheck', healthCheckMiddleware());

app.use(errorHandler500);

module.exports = app;
