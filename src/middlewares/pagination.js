const { defaultPaginationLimit, defaultPage } = require("$constants");

module.exports = (req, resp, next) => {
  const { page, limit } = req.query;

  req.query.page = page || defaultPage;
  req.query.limit = limit || defaultPaginationLimit;
  return next();
}