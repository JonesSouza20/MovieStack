// src/controllers/moviesController.js
const fs = require('fs');
const path = require('path');
const omdbServices = require('../services/omdb.service');

const dbPath = path.join(__dirname, '../db/db.json');

// Função para carregar dados do arquivo
const loadDB = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Se o arquivo não existir, cria com estrutura inicial
    if (error.code === 'ENOENT') {
      const initialData = { movies: [] };
      fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    throw error;
  }
};

// Função para salvar dados no arquivo
const saveDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Buscar filme na OMDb
const searchMovie = async (req, res) => {
  try {
    const { title } = req.query;
    const movie = await omdbServices.getMovieByTitle(title);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filme' });
  }
};

// Adicionar filme aos favoritos
const addFavorite = (req, res) => {
  const db = loadDB();
  const { Title, Year, Director } = req.body;
  
  const newMovie = {
    id: Date.now(),
    title: Title,
    year: Year,
    director: Director
  };

  db.movies.push(newMovie);
  saveDB(db);
  res.status(201).json(newMovie);
};

// Listar favoritos
const listFavorites = (req, res) => {
  const db = loadDB();
  res.json(db.movies);
};

// Excluir favorito
const deleteFavorite = (req, res) => {
  const db = loadDB();
  const id = parseInt(req.params.id);
  
  db.movies = db.movies.filter(movie => movie.id !== id);
  saveDB(db);
  res.status(204).send();
};

module.exports = {
  searchMovie,
  addFavorite,
  listFavorites,
  deleteFavorite
};