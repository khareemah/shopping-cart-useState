import React from 'react';
import logo from './images/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <i className="fas fa-bars"></i>
        </span>
        <img src="./images/logo.svg" alt="store logo" />
        <div className="cart-btn">
          <span className="nav-icon">
            <i className="fas fa-cart-plus"></i>
          </span>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
