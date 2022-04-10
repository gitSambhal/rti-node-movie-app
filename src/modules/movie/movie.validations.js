const { query, param } = require("express-validator");
const { findById } = require("./movie.service");

exports.validateQuery = () => [
  query('limit')
    .optional()
    .toInt()
    .isNumeric(),

  query('page')
    .optional()
    .toInt()
    .isNumeric(),

  query('title')
    .optional()
    .isString(),
];


exports.validateGetMovieById = () => [
  param('id')
    .isString()
    .isMongoId(),

  query('page')
    .optional()
    .toInt()
    .isNumeric(),

  query('title')
    .optional()
    .isString(),
]
