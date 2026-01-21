import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Header.scss';

const Header = ({ title, showBack, showNotifications = true }) => {
  const { notifications } = useApp();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="app-header">
      <div className="header-content">
        {showBack && (
          <button className="back-btn" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i>
          </button>
        )}

        <div className="header-title">
          {!showBack && <div className="logo"><i className="fas fa-plane"></i> GoTravel CC</div>}
          {title && <h1>{title}</h1>}
        </div>

        <div className="header-actions">
          {showNotifications && (
            <Link to="/notifications" className="notification-btn">
              <i className="fas fa-bell"></i>
              {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
