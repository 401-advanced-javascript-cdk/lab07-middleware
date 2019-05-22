'use strict';
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}