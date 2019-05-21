'use strict';

module.exports = (err, req, res) => {
  res.status(500).send(err);
}