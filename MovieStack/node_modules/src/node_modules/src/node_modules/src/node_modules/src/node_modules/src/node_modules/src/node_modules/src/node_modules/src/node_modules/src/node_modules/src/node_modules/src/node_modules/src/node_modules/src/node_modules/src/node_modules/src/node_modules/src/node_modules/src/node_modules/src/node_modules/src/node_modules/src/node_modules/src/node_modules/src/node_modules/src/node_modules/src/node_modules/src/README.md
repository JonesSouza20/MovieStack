# 🎬 MovieStack

Simple favorite movie management system, integrated with OMDb API.

**Technologies**: 
Node.js, Express, OMDb API and LowDB (for local storage).

---

## 🚀 Features

- 🔍 **Search for movies** by title using OMDb API.
- ❤️ **Add movies** to favorites list.
- 📋 **List all saved favorite movies**.
- ✏️ **Update information** of a favorite movie.
- 🗑️ **Delete movies** from favorites list.

---

## 📦 Installation

1. **Prerequisites**:
    - Node.js (v18 or higher)
    - npm (package manager)  

2. **Clone the repository**: 
   ```bash
   git clone https://github.com/JonesSouza20/movie-stack.git
   cd movie-stack

3. **Install the dependencies**:
   - npm install express axios lowdb dotenv

4. **Configure a chave da OMDb API**:
   - OMDB_KEY=your_key_here

5. **Start the server**:
    - node src/app.js

## 🛠️ How to Use

**API Endpoints**

**Search movie**:
  - GET /movies/search?title=NomeDoFilme

**Add movie to favorites**:
  - POST /movies/favorites

**JSON**
    // Request body:
    {
        "title": "Inception",
        "year": "2010",
        "director": "Christopher Nolan"
    }

**List favorites**:
  - GET /movies/favorites

**Update favorite movie**:
  - PUT /movies/favorites/1

**JSON**
    // Body da requisição (exemplo):
    {
    "director": "Christopher Nolan, Emma Thomas"
    }

**Delete movie**:
  - DELETE /movies/favorites/1


## 📄 License

    This project is licensed under the MIT License. See the LICENSE file for more details.


Made with ❤️ by Jones Souza. Contributions are welcome!