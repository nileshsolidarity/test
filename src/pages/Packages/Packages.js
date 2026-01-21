import React from 'react';
import { packages } from '../../data/travelData';
import './Packages.scss';

const Packages = () => {
  return (
    <div className="packages-page">
      <div className="page-header">
        <h1>Travel Packages</h1>
        <p>Carefully curated travel experiences for unforgettable journeys</p>
      </div>

      <div className="container">
        <div className="packages-grid">
          {packages.map(pkg => (
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
                  <h4>Includes:</h4>
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

                <button className="package-btn">Book Package</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
