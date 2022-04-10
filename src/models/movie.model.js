const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { modelOptions } = require("$constants");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    budget: {
      type: Number,
    },
    genres: {
      type: [String],
    },
    homepage: {
      type: String,
    },
    original_language: {
      type: String,
    },
    overview: {
      type: String,
    },
    popularity: {
      type: Number,
    },
    poster_path: {
      type: String,
    },
    release_date: {
      type: Date,
    },
    revenue: {
      type: Number,
    },
    runtime: {
      type: Number,
    },
    tagline: {
      type: String,
    },
    title: {
      type: String,
    },
    vote_average: {
      type: Number,
    },
    vote_count: {
      type: Number,
    },
    external_ids: {
      imdb_id: String,
      facebook_id: String,
      instagram_id: String,
      twitter_id: String,
    },
    certification: {
      type: String,
    },
    directors: {
      type: [
        {
          name: String,
          id: Number,
        },
      ],
      default: [],
    },
    writers: {
      type: [
        {
          name: String,
          id: Number,
        },
      ],
      default: [],
    },
    cast: {
      type: [
        {
          name: String,
          id: Number,
        },
      ],
      default: [],
    },
    trailer_yt: {
      type: String,
    },
  },
  modelOptions
);

MovieSchema.plugin(mongoosePaginate);

const Movies = mongoose.model("Movies", MovieSchema);

module.exports = Movies;
