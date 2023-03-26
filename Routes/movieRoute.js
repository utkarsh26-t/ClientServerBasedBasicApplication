const express = require('express');
const router = express.Router();
const movies = require('../seed.js');

router.get('/suggest', (req, res) => {
    const {genre} = req.query;
    const suggestMovies = movies.filter(movie => movie.genre === genre);
    res.render('movies/suggest', {suggestMovies, genre});
})

router.get('/show/:movieName', (req, res) => {

    const {movieName} = req.params;

    const movie = movies.find(movie => movie.name === movieName);
    res.render('movies/show', {movie});
})


module.exports = router;