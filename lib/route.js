'use strict';

const express = require('express');

const router = express();
/**
 * @param  {} req
 * @param  {} res
 */
router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
router.get('/d', (req, res, next) => next('/d route error out'), (req,res) => {
  res.status(200).send('Route D');
});

module.exports = router;