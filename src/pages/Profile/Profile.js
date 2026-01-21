import React from 'react';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          <i className="fas fa-user"></i>
        </div>
        <h2>John Traveler</h2>
        <p>john.traveler@email.com</p>
      </div>

      <div className="container">
        <div className="stats-cards">
          <div className="stat-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>12</h3>
            <p>Destinations Visited</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-suitcase"></i>
            <h3>5</h3>
            <p>Trips Completed</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-star"></i>
            <h3>4.9</h3>
            <p>Travel Score</p>
          </div>
        </div>

        <div className="menu-section">
          <h3>Account Settings</h3>
          <div className="menu-list">
            <div className="menu-item">
              <i className="fas fa-user-edit"></i>
              <span>Edit Profile</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="menu-item">
              <i className="fas fa-heart"></i>
              <span>Saved Destinations</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="menu-item">
              <i className="fas fa-credit-card"></i>
              <span>Payment Methods</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="menu-item">
              <i className="fas fa-bell"></i>
              <span>Notifications</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h3>Support</h3>
          <div className="menu-list">
            <div className="menu-item">
              <i className="fas fa-question-circle"></i>
              <span>Help Center</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="menu-item">
              <i className="fas fa-file-alt"></i>
              <span>Terms & Conditions</span>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="menu-item">
              <i className="fas fa-shield-alt"></i>
              <span>Privacy Policy</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <button className="logout-btn">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
