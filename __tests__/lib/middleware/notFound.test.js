'use strict';

const notFound = require('../../../lib/middleware/notFound.js');
const request = require('supertest');
const express = require('express');
const app = express();
 
app.get('./noGood', notFound);

describe('notFound.js', () => {
  it('sends 404 on a bad route', (done) => {
    request(app).get('/noGood')
    .expect(404, done)
  });
});