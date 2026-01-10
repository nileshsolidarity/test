import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { universities } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './UniversityDetail.scss';

const UniversityDetail = () => {
  const { id } = useParams();
  const { favorites, toggleFavorite, toggleComparison, comparisonList } = useApp();
  const university = universities.find(uni => uni.id === parseInt(id));

  if (!university) {
    return <div className="error-page">University not found</div>;
  }

  return (
    <div className="university-detail-page">
      <div className="uni-header">
        <img src={university.image} alt={university.name} className="header-image" />
        <div className="header-overlay">
          <div className="header-content">
            <div className="uni-logo">{university.logo}</div>
            <h1>{university.name}</h1>
            <p className="location">
              <i className="fas fa-map-marker-alt"></i>
              {university.city}, {university.country}
            </p>
            <div className="ranking-badge">#{university.ranking} QS World Ranking</div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button
          className={`action-btn ${favorites.includes(university.id) ? 'active' : ''}`}
          onClick={() => toggleFavorite(university.id)}
        >
          <i className={`${favorites.includes(university.id) ? 'fas' : 'far'} fa-heart`}></i>
          {favorites.includes(university.id) ? 'Saved' : 'Save'}
        </button>
        <button
          className={`action-btn ${comparisonList.includes(university.id) ? 'active' : ''}`}
          onClick={() => toggleComparison(university.id)}
        >
          <i className="fas fa-plus"></i>
          Compare
        </button>
        <button className="action-btn">
          <i className="fas fa-share-alt"></i>
          Share
        </button>
      </div>

      <div className="uni-content">
        <section className="overview-section">
          <h2>Overview</h2>
          <p>{university.description}</p>
        </section>

        <section className="stats-section">
          <h2>Quick Facts</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-trophy"></i>
              <div>
                <strong>Ranking</strong>
                <span>#{university.ranking} in World</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-dollar-sign"></i>
              <div>
                <strong>Tuition Range</strong>
                <span>{university.tuitionRange}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-percentage"></i>
              <div>
                <strong>Acceptance Rate</strong>
                <span>{university.acceptanceRate}</span>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-users"></i>
              <div>
                <strong>Programs</strong>
                <span>{university.programs.length}+ Available</span>
              </div>
            </div>
          </div>
        </section>

        <section className="programs-section">
          <h2>Available Programs</h2>
          <div className="programs-list">
            {university.programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <h3>{program.name}</h3>
                  <span className="level-badge">{program.level}</span>
                </div>
                <div className="program-details">
                  <div className="detail">
                    <i className="fas fa-clock"></i>
                    <span>{program.duration}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-dollar-sign"></i>
                    <span>${program.tuition.toLocaleString()}/year</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-calendar"></i>
                    <span>{program.intake}</span>
                  </div>
                </div>
                <button className="apply-btn">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Apply?</h2>
          <p>Talk to our counselor for personalized guidance</p>
          <div className="cta-buttons">
            <Link to="/book-consultation" className="cta-btn primary">
              Book Free Consultation
            </Link>
            <Link to="/eligibility" className="cta-btn secondary">
              Check Eligibility
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UniversityDetail;
