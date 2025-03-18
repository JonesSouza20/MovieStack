require('dotenv').config(); // Import the dotenv library
const express = require('express'); // Import the express library
const moviesRoutes = require('./src/routes/movies'); // Import the movies routes module

const app = express(); 

app.use(express.json());

// Remova a chamada para initializeDB()
app.use('/movies', moviesRoutes); // Configura as rotas

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000 🎬');
});