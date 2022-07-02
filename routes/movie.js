const express = require("express");
const checkToken = require("../handlers/checkToken");
const router = express.Router();

//load book model
const Movie = require("../models/movieSchema");

//add movie to db
router.post("/new/movie", (req, res) => {
  Movie.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//get list of movies from db
router.get("/get/movies", (req, res) => {
  Movie.find()
    .sort({ movie_name: 1 })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//Delete movie from db with authentication
router.delete("/delete/movie/:id", checkToken, (req, res) => {
  Movie.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//Update movie to db with authentication
router.post("/update/movie/:id", checkToken, (req, res) => {
  Movie.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
