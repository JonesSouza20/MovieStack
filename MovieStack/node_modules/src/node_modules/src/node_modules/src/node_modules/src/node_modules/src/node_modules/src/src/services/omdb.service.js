const axios = require('axios'); // Import axios

// Function to get movie by title from OMDB API using axios
const getMovieByTitle = async (title) => {
    const response = await axios.get(
       `http://www.omdbapi.com/?i=tt3896198&apikey=bcd80c61${process.env.OMDB_KEY}&t=${encodeURIComponent(title)}` 
    );
    return response.data;
};

module.exports = {getMovieByTitle};