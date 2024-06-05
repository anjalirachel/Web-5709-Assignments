import React from 'react';
import './Navbar.css';
// import logoImage from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo
        {/* <img src={logoImage} alt="Logo" className="logo-image" /> */}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#music">Music</a>
        <a href="#therapists">Therapists</a>
        <a href="#blog">Blog</a>
        <a href="#logout">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
