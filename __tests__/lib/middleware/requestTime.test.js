'use strict';

const time = require('../../../lib/middleware/requestTime.js');

describe('requestTime.js', () => {
  it('attaches the current time to req.requestTime', () => {
    let request = {requestTime: null};
    time(request, {}, (err, req, res, next) => {
      expect(request.requestTime).not.toBeNull();
    });
  });
});