import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="no-movies">
        <p>Aucun film trouvé. Ajoutez votre premier film !</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList; 