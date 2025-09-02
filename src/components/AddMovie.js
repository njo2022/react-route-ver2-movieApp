import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.posterURL && formData.rating) {
      onAddMovie({
        ...formData,
        rating: parseInt(formData.rating)
      });
      setFormData({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
      });
      setIsFormOpen(false);
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="add-movie-container">
      <button 
        className="add-movie-btn"
        onClick={toggleForm}
      >
        {isFormOpen ? '✕' : '+ Ajouter un film'}
      </button>

      {isFormOpen && (
        <form className="add-movie-form" onSubmit={handleSubmit}>
          <h3>Ajouter un nouveau film</h3>
          
          <div className="form-group">
            <label htmlFor="title">Titre *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Titre du film"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description du film"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="posterURL">URL de l'affiche *</label>
            <input
              type="url"
              id="posterURL"
              name="posterURL"
              value={formData.posterURL}
              onChange={handleInputChange}
              placeholder="https://exemple.com/affiche.jpg"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Note *</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            >
              <option value="">Sélectionner une note</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐⭐</option>
              <option value="3">3 ⭐⭐⭐</option>
              <option value="4">4 ⭐⭐⭐⭐</option>
              <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" onClick={toggleForm} className="cancel-btn">
              Annuler
            </button>
            <button type="submit" className="submit-btn">
              Ajouter le film
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddMovie; 