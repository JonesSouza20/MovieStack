const express = require('express'); // Import the express library
const router = express.Router(); // Create a new router

const { 
    searchMovie, 
    addFavorite, 
    listFavorites, 
    deleteFavorite 
  } = require('../controllers/moviesController'); // Import the movies controller

// Routes
router.get('/search', searchMovie); // Search for a movie on IMDb
router.post('/favorites', addFavorite); // Add favorite
router.get('/favorites', listFavorites); // List favorites
router.delete('/favorites', deleteFavorite); // Delete favorite

module.exports = router;