const router = require('express').Router();
const { httpMethods } = require('$src/constants');
const { responseHandler } = require('$src/helpers');
const movieController = require('./movie.controller');
const { validateQuery, validateGetMovieById } = require('./movie.validations');
const validate = require('$middlewares/validate-req');
const paginationMiddleware = require('$middlewares/pagination');

const routesConfigArr = [
  {
    method: httpMethods.GET,
    route: `/`,
    controllerFn: movieController.getMovies,
    middlewares: [
      paginationMiddleware,
      validateQuery(),
      validate,
    ],
  },
  {
    method: httpMethods.GET,
    route: `/:id`,
    controllerFn: movieController.getMovieById,
    middlewares: [
      validateGetMovieById(),
      validate,
    ],
  },
];

routesConfigArr.forEach(
  ({ method, route, controllerFn, middlewares = [] }) => {
    router[method](route, middlewares, responseHandler(controllerFn));
  }
);

module.exports = router;