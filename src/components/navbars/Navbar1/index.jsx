import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar1.style.css"; // Add styles in a separate CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbarWrapper">
      <nav className="navbar desktopNavbar">
        <div className="navbar-logo">
          <h1>MyApp</h1>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/todos">Todo</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/form">Form</Link>
          <Link to="/game">Game</Link>
          <Link to="/myform">MyForm</Link>
          <Link to="/success">Success</Link>
        </div>
      </nav>

      <nav className="mobileNavbar">
        <div className="mobile-navbar-logo">
          <h1>MyApp</h1>
        </div>

        <div className="mobile-navbar-menu">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`mobile-navbar-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/todos">Todo</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/form">Form</Link>
            <Link to="/game">Game</Link>
            <Link to="/myform">MyForm</Link>
            <Link to="/success">Success</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
