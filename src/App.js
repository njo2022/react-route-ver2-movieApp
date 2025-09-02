import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  // Données d'exemple pour commencer
  useEffect(() => {
    const sampleMovies = [
      {
        title: "Inception",
        description: "Un voleur expérimenté dans l'art de l'extraction, Cobb, se voit offrir une chance de racheter sa vie. Au lieu de l'ultime casse, Cobb et son équipe sont chargés de faire l'inverse : leur mission est de planter une idée dans l'esprit d'un PDG.",
        posterURL: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        rating: 5
      },
      {
        title: "The Dark Knight",
        description: "Batman, Gordon et Harvey Dent s'unissent pour combattre le crime organisé qui ravage les rues de Gotham City. Leur alliance s'avère efficace jusqu'à ce qu'un nouveau criminel surgisse et plonge la ville dans le chaos.",
        posterURL: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        rating: 5
      },
      {
        title: "Pulp Fiction",
        description: "L'histoire de deux tueurs à gages, d'un boxeur, de la femme d'un gangster et de deux bandits dans une série d'événements entrelacés.",
        posterURL: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop",
        rating: 4
      }
    ];
    setMovies(sampleMovies);
    setFilteredMovies(sampleMovies);
  }, []);

  // Filtrer les films
  useEffect(() => {
    let filtered = movies;

    if (filterTitle) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
    }

    if (filterRating) {
      filtered = filtered.filter(movie =>
        movie.rating >= parseInt(filterRating)
      );
    }

    setFilteredMovies(filtered);
  }, [movies, filterTitle, filterRating]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      setFilterTitle(value);
    } else if (filterType === 'rating') {
      setFilterRating(value);
    }
  };

  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Movie App</h1>
        <p>Découvrez et partagez vos films préférés !</p>
      </header>
      
      <main className="main-content">
        <div className="container">
          <AddMovie onAddMovie={handleAddMovie} />
          
          <Filter
            onFilterChange={handleFilterChange}
            filterTitle={filterTitle}
            filterRating={filterRating}
          />
          
          <div className="movies-section">
            <h2>Films ({filteredMovies.length})</h2>
            <MovieList movies={filteredMovies} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App; 