"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-top">
          <a href="/" className="logo-container" style={{ textDecoration: 'none' }}>
            <img src="/logo-nobg.png" alt="Hotel Oak Chhav Logo" className="logo" />
            <span className="logo-text">Hotel Oak Chhav</span>
          </a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/#accommodations" onClick={() => setIsOpen(false)}>Accommodations</a>
          <a href="/gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="/nainital" onClick={() => setIsOpen(false)}>Nainital</a>
          <a href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Book Now</a>
        </div>
      </nav>
    </div>
  );
}
