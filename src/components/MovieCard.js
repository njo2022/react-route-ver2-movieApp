import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterURL} alt={title} />
        <div className="movie-rating">
          <span className="rating-number">{rating}</span>
          <span className="rating-star">⭐</span>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard; 