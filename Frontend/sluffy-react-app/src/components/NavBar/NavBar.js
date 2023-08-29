import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <ul className="navLinks">
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>sluffy</b>
          </Link>
        </li>

        <li>
          <Link
            to="/weathermap/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>weathermap</p>
          </Link>
        </li>
        <li>
          <Link
            to="/regions/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Regions</p>
          </Link>
        </li>

        <li>
          <Link
            to="/passes/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Passes</p>
          </Link>
        </li>
        <li>
          <Link
            to="/independantresorts/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Independant Resorts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
