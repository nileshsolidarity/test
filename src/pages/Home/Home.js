import React from 'react';
import { Link } from 'react-router-dom';
import { destinations, packages } from '../../data/travelData';
import './Home.scss';

const Home = () => {
  const featuredDestinations = destinations.slice(0, 6);
  const featuredPackages = packages.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">
            Explore amazing destinations around the world with GoTravel CC
          </p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="search-input"
            />
            <Link to="/destinations" className="search-btn">
              <i className="fas fa-search"></i> Search
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <i className="fas fa-globe-americas"></i>
              <h3>150+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-users"></i>
              <h3>50K+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-star"></i>
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-headset"></i>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Destinations</h2>
            <Link to="/destinations" className="view-all">
              View All <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="destinations-grid">
            {featuredDestinations.map(destination => (
              <Link
                to={`/destination/${destination.id}`}
                key={destination.id}
                className="destination-card"
              >
                <div className="card-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="card-badge">{destination.duration}</div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3>{destination.name}</h3>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                  <p className="card-description">{destination.description}</p>
                  <div className="card-footer">
                    <div className="price">
                      <span className="price-label">From</span>
                      <span className="price-value">${destination.price}</span>
                    </div>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2>Exclusive Travel Packages</h2>
            <Link to="/packages" className="view-all">
              View All <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="packages-grid">
            {featuredPackages.map(pkg => (
              <div key={pkg.id} className="package-card">
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="package-badge">{pkg.category}</div>
                </div>
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-destinations">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{pkg.destinations.join(' • ')}</span>
                  </div>
                  <div className="package-includes">
                    {pkg.includes.map((item, index) => (
                      <span key={index} className="include-tag">
                        <i className="fas fa-check"></i> {item}
                      </span>
                    ))}
                  </div>
                  <div className="package-footer">
                    <div className="package-info">
                      <div className="duration">
                        <i className="fas fa-clock"></i> {pkg.duration}
                      </div>
                      <div className="rating">
                        <i className="fas fa-star"></i> {pkg.rating}
                      </div>
                    </div>
                    <div className="package-price">
                      <span className="price-label">From</span>
                      <span className="price-value">${pkg.price}</span>
                    </div>
                  </div>
                  <Link to="/packages" className="package-btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose GoTravel CC?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Best Price Guarantee</h3>
              <p>We guarantee the best prices on all our travel packages and destinations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Secure Booking</h3>
              <p>Your payments and personal information are always protected</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headphones"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Our travel experts are always available to help you</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-undo"></i>
              </div>
              <h3>Flexible Cancellation</h3>
              <p>Free cancellation on most bookings up to 24 hours before travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Get Special Offers & Travel Inspiration</h2>
            <p>Subscribe to our newsletter and never miss a deal</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
