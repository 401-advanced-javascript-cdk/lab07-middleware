'use strict';

const express = require('express');
const app = express();
const router = require('./lib/route.js');

const errorHandler = require('./lib/middleware/error-handler.js');
const notFound = require('./lib/middleware/notFound.js');
const doMath = require('./lib/middleware/doMath.js');
const requestTime = require('./lib/middleware/requestTime.js');
const logger = require('./lib/middleware/logger.js');

const PORT = process.env.PORT || 8080;
app.use(requestTime);
app.use(logger);
app.use('/', router);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b/:num', (req, res) => {
  req.number = doMath(parseInt(req.params.num));
  res.status(200)
  res.send(req.number.toString());
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/*', notFound);
app.use(errorHandler);