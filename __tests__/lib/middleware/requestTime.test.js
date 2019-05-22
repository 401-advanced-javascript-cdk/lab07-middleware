'use strict';

const time = require('../../../lib/middleware/requestTime.js');

describe('requestTime.js', () => {
  it('attaches the current time to req.requestTime', () => {
    let req = {requestTime: null};
    time(req, {}, (err, req, res, next) => {
      expect(req.requestTime).toBeInstanceOf(Number);
    });
  });
});