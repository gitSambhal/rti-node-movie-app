const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  let mappedErrors = errors.mapped();

  return res.status(400).json({
    validation_errors: mappedErrors,
    message: 'Validation errors',
    status: 0,
  });
};