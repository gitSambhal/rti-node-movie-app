const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('$root/config');
const movieRoutes = require('$modules/movie/movie.route');
const cors = require('cors');

require('$root/config');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, resp) => {
  return resp.json({ message: "Welcome to the movie api" })
});
app.use('/movies', movieRoutes);


// 404 Handler
app.use((req, resp, next) => {
  const error = new Error("404 Not Found");
  error.statusCode = 404;
  next(error);
});

// Error Handler
app.use((error, req, resp, next) => {
  let status = error.statusCode || 500;
  let message = error.message || "500 Server Error";

  let returnObj = {
    status: 0,
    message,
    stack: error.stack,
  };
  return resp.status(status).json(returnObj);
});

module.exports = app;
