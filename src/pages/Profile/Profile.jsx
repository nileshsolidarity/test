import React from 'react';
import { useApp } from '../../context/AppContext';
import './Profile.scss';

const Profile = () => {
  const { userProfile, applications, documents } = useApp();

  const profileSections = [
    {
      title: 'Personal Information',
      icon: 'fa-user',
      items: [
        { label: 'Name', value: userProfile.name },
        { label: 'Email', value: userProfile.email || 'Not provided' },
        { label: 'Phone', value: userProfile.phone || 'Not provided' },
      ]
    },
    {
      title: 'Education',
      icon: 'fa-graduation-cap',
      items: [
        { label: 'Level', value: userProfile.education.level || 'Not specified' },
        { label: 'Institution', value: userProfile.education.institution || 'Not specified' },
        { label: 'GPA', value: userProfile.education.gpa || 'Not specified' },
        { label: 'Year of Passing', value: userProfile.education.yearOfPassing || 'Not specified' },
      ]
    },
    {
      title: 'Test Scores',
      icon: 'fa-file-alt',
      items: [
        { label: 'IELTS', value: userProfile.testScores.ielts || 'Not taken' },
        { label: 'TOEFL', value: userProfile.testScores.toefl || 'Not taken' },
        { label: 'GRE', value: userProfile.testScores.gre || 'Not taken' },
        { label: 'GMAT', value: userProfile.testScores.gmat || 'Not taken' },
      ]
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          <i className="fas fa-user-circle"></i>
        </div>
        <h1>{userProfile.name}</h1>
        <p>Student Profile</p>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-value">{applications.length}</div>
          <div className="stat-label">Applications</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{documents.length}</div>
          <div className="stat-label">Documents</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{userProfile.profileStrength}%</div>
          <div className="stat-label">Profile Strength</div>
        </div>
      </div>

      {profileSections.map((section, index) => (
        <div key={index} className="profile-section">
          <div className="section-header">
            <i className={`fas ${section.icon}`}></i>
            <h2>{section.title}</h2>
          </div>
          <div className="section-content">
            {section.items.map((item, idx) => (
              <div key={idx} className="info-row">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="profile-actions">
        <button className="action-btn primary">
          <i className="fas fa-edit"></i>
          Edit Profile
        </button>
        <button className="action-btn secondary">
          <i className="fas fa-cog"></i>
          Settings
        </button>
        <button className="action-btn secondary">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
