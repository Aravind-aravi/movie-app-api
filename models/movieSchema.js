const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
  },
  rating: { type: Number },
  cast: { type: Array },
  genre: { type: String },
  release_date: { type: Date },
});
module.exports = Movie = mongoose.model("movies", movieSchema);
