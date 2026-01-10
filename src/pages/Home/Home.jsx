import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { universities, countries, testimonials } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './Home.scss';

const Home = () => {
  const { favorites, toggleFavorite } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredUniversities = universities.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Your Study Abroad Journey Starts Here</h1>
        <p>Explore 500+ universities across 70+ countries</p>

        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search universities, programs, countries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link to={`/search?q=${searchQuery}`} className="search-btn">
            Search
          </Link>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <Link to="/eligibility" className="action-card">
          <i className="fas fa-check-circle"></i>
          <span>Check Eligibility</span>
        </Link>
        <Link to="/financial-planning" className="action-card">
          <i className="fas fa-calculator"></i>
          <span>Cost Calculator</span>
        </Link>
        <Link to="/compare" className="action-card">
          <i className="fas fa-balance-scale"></i>
          <span>Compare Unis</span>
        </Link>
        <Link to="/scholarships" className="action-card">
          <i className="fas fa-trophy"></i>
          <span>Scholarships</span>
        </Link>
      </section>

      {/* Popular Countries */}
      <section className="countries-section">
        <h2>Study Destinations</h2>
        <div className="countries-grid">
          {countries.map((country, index) => (
            <Link
              to={`/search?country=${country.name}`}
              key={index}
              className="country-card"
            >
              <span className="flag">{country.flag}</span>
              <span className="name">{country.name}</span>
              <span className="cost">{country.avgCost}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Universities */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Universities</h2>
          <Link to="/search" className="see-all">See All</Link>
        </div>

        <div className="universities-list">
          {featuredUniversities.map((uni) => (
            <div key={uni.id} className="university-card">
              <div className="university-image">
                <img src={uni.image} alt={uni.name} />
                <button
                  className={`favorite-btn ${favorites.includes(uni.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(uni.id)}
                >
                  <i className={`${favorites.includes(uni.id) ? 'fas' : 'far'} fa-heart`}></i>
                </button>
                <span className="ranking">#{uni.ranking} QS Ranking</span>
              </div>

              <div className="university-info">
                <h3>{uni.name}</h3>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {uni.city}, {uni.country}
                </p>
                <p className="description">{uni.description}</p>

                <div className="university-stats">
                  <div className="stat">
                    <i className="fas fa-dollar-sign"></i>
                    <span>{uni.tuitionRange}</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-percentage"></i>
                    <span>{uni.acceptanceRate} acceptance</span>
                  </div>
                </div>

                <Link to={`/university/${uni.id}`} className="view-btn">
                  View Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="student-avatar">{testimonial.image}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="student-info">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.program} at {testimonial.university}</span>
              </div>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Talk to our expert counselors for personalized guidance</p>
        <Link to="/book-consultation" className="cta-btn">
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default Home;
