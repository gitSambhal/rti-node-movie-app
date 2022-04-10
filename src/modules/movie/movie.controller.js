const { find, findById } = require("./movie.service");
const {errorThrow404} = require('$helpers')
exports.getMovies = async (req, resp, next) => {
  let respData = {};

  let { page, limit, title, sortBy = "rating" } = req.query;

  let where = {
    ...(title && {
      title: { $regex: new RegExp(decodeURIComponent(title), "i") },
    }),
  };

  const options = {
    ...(page && { page }),
    ...(limit && { limit }),
    select: {
      // budget:1,
      // title:1,
    },
    sort: {
      [sortBy]: -1,
    },
  };

  try {
    let movies = await find(where, options);
    respData.movies = movies;
    return respData;
  } catch (error) {
    throw error;
  }
};

exports.getMovieById = async (req, resp, next) => {
  let respData = {};

  let { id } = req.params;


  try {
    let movie = await findById(id);
    if(!movie) {
      errorThrow404("Movie not found")
    }
    respData.movie = movie;
    return respData;
  } catch (error) {
    throw error;
  }
};
