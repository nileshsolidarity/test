import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations, categories } from '../../data/travelData';
import './Destinations.scss';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="destinations-page">
      <div className="page-header">
        <h1>Explore Destinations</h1>
        <p>Discover amazing places around the world</p>
      </div>

      <div className="container">
        <div className="search-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button
              className={selectedCategory === 'All' ? 'active' : ''}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                className={selectedCategory === cat.name ? 'active' : ''}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <i className={`fas ${cat.icon}`}></i> {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="results-info">
          <h2>{filteredDestinations.length} Destinations Found</h2>
        </div>

        <div className="destinations-grid">
          {filteredDestinations.map(destination => (
            <Link
              to={`/destination/${destination.id}`}
              key={destination.id}
              className="destination-card"
            >
              <div className="card-image">
                <img src={destination.image} alt={destination.name} />
                <div className="card-overlay">
                  <span className="category-badge">{destination.category}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p className="description">{destination.description}</p>
                <div className="card-info">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{destination.rating}</span>
                  </div>
                  <div className="duration">
                    <i className="fas fa-clock"></i>
                    <span>{destination.duration}</span>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="price">
                    <span className="from">From</span>
                    <span className="amount">${destination.price}</span>
                  </div>
                  <button className="book-btn">Explore</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
