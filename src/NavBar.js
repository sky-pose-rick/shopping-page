/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>
        Shoppage
      </h1>
      <nav>
        <Link to="/shopping-page">Home</Link>
        <Link to="/shopping-page/shop">Shop</Link>
      </nav>
    </div>
  );
}

export default NavBar;
