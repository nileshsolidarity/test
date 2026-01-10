import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { universities } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './Search.scss';

const Search = () => {
  const [searchParams] = useSearchParams();
  const { favorites, toggleFavorite, comparisonList, toggleComparison } = useApp();

  const [filters, setFilters] = useState({
    query: searchParams.get('q') || '',
    country: searchParams.get('country') || '',
    level: '',
    budget: '',
    ranking: ''
  });

  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  useEffect(() => {
    let result = universities;

    // Filter by search query
    if (filters.query) {
      result = result.filter(uni =>
        uni.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        uni.country.toLowerCase().includes(filters.query.toLowerCase()) ||
        uni.city.toLowerCase().includes(filters.query.toLowerCase())
      );
    }

    // Filter by country
    if (filters.country) {
      result = result.filter(uni => uni.country === filters.country);
    }

    // Filter by ranking
    if (filters.ranking) {
      if (filters.ranking === 'top50') {
        result = result.filter(uni => uni.ranking <= 50);
      } else if (filters.ranking === 'top100') {
        result = result.filter(uni => uni.ranking <= 100);
      }
    }

    setFilteredUniversities(result);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      country: '',
      level: '',
      budget: '',
      ranking: ''
    });
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search universities..."
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
          />
        </div>
      </div>

      <div className="filters-bar">
        <select
          value={filters.country}
          onChange={(e) => handleFilterChange('country', e.target.value)}
        >
          <option value="">All Countries</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="Singapore">Singapore</option>
        </select>

        <select
          value={filters.level}
          onChange={(e) => handleFilterChange('level', e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>

        <select
          value={filters.ranking}
          onChange={(e) => handleFilterChange('ranking', e.target.value)}
        >
          <option value="">All Rankings</option>
          <option value="top50">Top 50</option>
          <option value="top100">Top 100</option>
        </select>

        {(filters.country || filters.level || filters.ranking || filters.query) && (
          <button onClick={clearFilters} className="clear-filters">
            <i className="fas fa-times"></i> Clear
          </button>
        )}
      </div>

      <div className="results-header">
        <p>{filteredUniversities.length} universities found</p>
        {comparisonList.length > 0 && (
          <Link to="/compare" className="compare-btn">
            <i className="fas fa-balance-scale"></i>
            Compare ({comparisonList.length})
          </Link>
        )}
      </div>

      <div className="universities-grid">
        {filteredUniversities.map((uni) => (
          <div key={uni.id} className="university-card">
            <div className="card-header">
              <div className="university-logo">{uni.logo}</div>
              <div className="actions">
                <button
                  className={`icon-btn ${favorites.includes(uni.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(uni.id)}
                  title="Add to favorites"
                >
                  <i className={`${favorites.includes(uni.id) ? 'fas' : 'far'} fa-heart`}></i>
                </button>
                <button
                  className={`icon-btn ${comparisonList.includes(uni.id) ? 'active' : ''}`}
                  onClick={() => toggleComparison(uni.id)}
                  title="Add to compare"
                  disabled={!comparisonList.includes(uni.id) && comparisonList.length >= 4}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>

            <Link to={`/university/${uni.id}`} className="card-content">
              <h3>{uni.name}</h3>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i>
                {uni.city}, {uni.country}
              </p>

              <div className="stats">
                <div className="stat">
                  <span className="label">Ranking</span>
                  <span className="value">#{uni.ranking}</span>
                </div>
                <div className="stat">
                  <span className="label">Acceptance</span>
                  <span className="value">{uni.acceptanceRate}</span>
                </div>
              </div>

              <div className="tuition">
                <i className="fas fa-dollar-sign"></i>
                <span>{uni.tuitionRange}/year</span>
              </div>

              <div className="programs-count">
                {uni.programs.length} programs available
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <div className="no-results">
          <i className="fas fa-search"></i>
          <h3>No universities found</h3>
          <p>Try adjusting your filters</p>
          <button onClick={clearFilters} className="clear-btn">Clear All Filters</button>
        </div>
      )}
    </div>
  );
};

export default Search;
