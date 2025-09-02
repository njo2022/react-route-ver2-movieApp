import React from 'react';
import './Filter.css';

const Filter = ({ onFilterChange, filterTitle, filterRating }) => {
  return (
    <div className="filter-container">
      <h3>Filtrer les films</h3>
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="title-filter">Titre :</label>
          <input
            type="text"
            id="title-filter"
            placeholder="Rechercher par titre..."
            value={filterTitle}
            onChange={(e) => onFilterChange('title', e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="rating-filter">Note minimum :</label>
          <select
            id="rating-filter"
            value={filterRating}
            onChange={(e) => onFilterChange('rating', e.target.value)}
          >
            <option value="">Toutes les notes</option>
            <option value="1">1+ ⭐</option>
            <option value="2">2+ ⭐⭐</option>
            <option value="3">3+ ⭐⭐⭐</option>
            <option value="4">4+ ⭐⭐⭐⭐</option>
            <option value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter; 