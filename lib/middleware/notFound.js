'use strict'
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports = (req, res, next) => {
  res.status(404).send('Route not found');
}