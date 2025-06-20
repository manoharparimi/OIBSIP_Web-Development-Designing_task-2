import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">MANOHAR PARIMI</div>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Header;