
import React from 'react';
import { Users, Bell, Search } from "lucide-react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <Users />
            </div>
            <div className="logo-text">
              <h1>DecideGlobal</h1>
              <p>Democracy in Action</p>
            </div>
          </div>
          
          <nav className="nav">
            <a href="#" className="nav-link">Today's Decisions</a>
            <a href="#" className="nav-link">Past Results</a>
            <a href="#" className="nav-link">Submit Topic</a>
            <a href="#" className="nav-link">About</a>
          </nav>

          <div className="header-actions">
            <button className="icon-button">
              <Search />
            </button>
            <button className="icon-button">
              <Bell />
              <span className="notification-badge">3</span>
            </button>
            <button className="sign-in-button">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
