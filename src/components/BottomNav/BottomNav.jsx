import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.scss';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'fa-home', label: 'Home' },
    { path: '/search', icon: 'fa-search', label: 'Search' },
    { path: '/applications', icon: 'fa-file-alt', label: 'Applications' },
    { path: '/documents', icon: 'fa-folder', label: 'Documents' },
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
