import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Applications.scss';

const Applications = () => {
  const { applications } = useApp();

  const getStatusColor = (status) => {
    const colors = {
      'Draft': '#6b7280',
      'Submitted': '#2563eb',
      'Under Review': '#f59e0b',
      'Documents Required': '#ef4444',
      'Interview Scheduled': '#8b5cf6',
      'Offer Received': '#10b981',
      'Accepted': '#059669',
      'Rejected': '#dc2626'
    };
    return colors[status] || '#6b7280';
  };

  const getProgressPercentage = (documents) => {
    const uploaded = documents.filter(doc => doc.uploaded).length;
    return Math.round((uploaded / documents.length) * 100);
  };

  const getUpcomingDeadlines = () => {
    return applications
      .filter(app => new Date(app.deadline) > new Date())
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
      .slice(0, 3);
  };

  const upcomingDeadlines = getUpcomingDeadlines();

  return (
    <div className="applications-page">
      <div className="page-header">
        <h1>My Applications</h1>
        <p>{applications.length} Active Applications</p>
      </div>

      {upcomingDeadlines.length > 0 && (
        <div className="deadlines-section">
          <h2><i className="fas fa-clock"></i> Upcoming Deadlines</h2>
          <div className="deadlines-list">
            {upcomingDeadlines.map((app) => {
              const daysLeft = Math.ceil((new Date(app.deadline) - new Date()) / (1000 * 60 * 60 * 24));
              return (
                <div key={app.id} className="deadline-item">
                  <div className="deadline-info">
                    <strong>{app.universityName}</strong>
                    <span>{app.program}</span>
                  </div>
                  <div className={`deadline-badge ${daysLeft <= 7 ? 'urgent' : ''}`}>
                    {daysLeft} days left
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="applications-list">
        {applications.map((app) => {
          const progressPercentage = getProgressPercentage(app.documents);

          return (
            <div key={app.id} className="application-card">
              <div className="card-header">
                <div className="university-info">
                  <h3>{app.universityName}</h3>
                  <p>{app.program}</p>
                </div>
                <div
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(app.status) }}
                >
                  {app.status}
                </div>
              </div>

              <div className="application-details">
                <div className="detail-row">
                  <span className="label">
                    <i className="fas fa-calendar"></i>
                    Applied On
                  </span>
                  <span className="value">
                    {new Date(app.appliedDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <div className="detail-row">
                  <span className="label">
                    <i className="fas fa-calendar-check"></i>
                    Deadline
                  </span>
                  <span className="value">
                    {new Date(app.deadline).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              <div className="documents-progress">
                <div className="progress-header">
                  <span>Documents</span>
                  <span>{progressPercentage}% Complete</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="documents-checklist">
                  {app.documents.map((doc, index) => (
                    <div key={index} className="doc-item">
                      <i className={`fas ${doc.uploaded ? 'fa-check-circle uploaded' : 'fa-circle-notch pending'}`}></i>
                      <span>{doc.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-actions">
                <Link to={`/application/${app.id}`} className="action-btn primary">
                  <i className="fas fa-edit"></i>
                  Manage Application
                </Link>
                <button className="action-btn secondary">
                  <i className="fas fa-comment"></i>
                  Message Counselor
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {applications.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-file-alt"></i>
          <h3>No Applications Yet</h3>
          <p>Start your journey by exploring universities</p>
          <Link to="/search" className="explore-btn">
            Explore Universities
          </Link>
        </div>
      )}

      <Link to="/apply-new" className="fab">
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
};

export default Applications;
