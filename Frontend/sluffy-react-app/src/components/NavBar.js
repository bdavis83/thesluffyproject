import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
        <b>sluffy</b>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="/weathermap/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <p>Weather Map</p>
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/regions/" className="nav-links" onClick={closeMobileMenu}>
            <p>Regions</p>
          </Link>
          {dropdown && <Dropdown />}
        </li>

        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/passtype/" className="nav-links" onClick={closeMobileMenu}>
            <p>Passes</p>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link
            to="/independantresorts/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <p>Independant Resorts</p>
          </Link>
          {dropdown && <Dropdown />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
