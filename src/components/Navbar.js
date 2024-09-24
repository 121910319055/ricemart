import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logok.jpg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/all-products">All Products</Link></li>
        <li><Link to="/Rice">Rice</Link></li>
        <li><Link to="/cosmetics">Cosmetics</Link></li>
        <li><Link to="/brand-merchandise">Brand Merchandise</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/pages">Pages</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
