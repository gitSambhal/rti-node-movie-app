const Movies = require("$models/movie.model");

exports.find = (where = {}, options = {}) => {
  return Movies.paginate(where, options);
}
exports.findById = (id) => {
  return Movies.findById(id);
}