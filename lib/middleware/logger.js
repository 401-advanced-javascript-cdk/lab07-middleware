/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports = (req, res, next) => {
  console.log({method: req.method, path: req.path, requestTime: req.requestTime});
  next();
}