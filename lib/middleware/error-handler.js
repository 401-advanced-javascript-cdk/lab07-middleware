'use strict';
/**
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @param  {} =>{res.status(500
 * @param  {} .send(err
 */

module.exports = (err, req, res) => {
  res.status(500).send(err);
}