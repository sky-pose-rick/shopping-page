/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="Navbar">
      <h1>
        Shoppage
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
}

export default NavBar;
