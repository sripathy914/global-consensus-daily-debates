
import React, { useState } from 'react';
import { Users, Bell, Search, Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <header className="futuristic-header">
      <div className="header-glass">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-icon">
                <Users />
                <div className="logo-glow"></div>
              </div>
              <div className="logo-text">
                <Link to="/" className="logo-link">
                  <h1>DecideGlobal</h1>
                  <p>Democracy in Action</p>
                </Link>
              </div>
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link 
                to="/todays-decisions" 
                className={`nav-link ${isActive('/todays-decisions') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Today's Decisions
              </Link>
              <Link 
                to="/past-results" 
                className={`nav-link ${isActive('/past-results') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Past Results
              </Link>
              <Link 
                to="/submit-topic" 
                className={`nav-link ${isActive('/submit-topic') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Submit Topic
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>

            <div className="header-actions">
              <button 
                className="icon-button theme-toggle"
                onClick={toggleTheme}
              >
                {isDark ? <Sun /> : <Moon />}
              </button>
              <button 
                className="icon-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search />
              </button>
              <button className="icon-button notification-btn">
                <Bell />
                <span className="notification-badge">3</span>
              </button>
              <button className="sign-in-button glow-button">Sign In</button>
              
              <button 
                className="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {isSearchOpen && (
            <div className="search-overlay">
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search decisions, topics, or discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button type="submit" className="search-submit glow-button">
                  <Search />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
