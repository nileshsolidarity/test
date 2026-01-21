import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.scss';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'fa-home', label: 'Home' },
    { path: '/destinations', icon: 'fa-map-marked-alt', label: 'Destinations' },
    { path: '/packages', icon: 'fa-suitcase', label: 'Packages' },
    { path: '/bookings', icon: 'fa-ticket-alt', label: 'Bookings' },
    { path: '/profile', icon: 'fa-user', label: 'Profile' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          <i className={`fas ${item.icon}`}></i>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
