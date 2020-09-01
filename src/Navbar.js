import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo3 from "./images/logo3.png";

function Navbar() {
  return (
      <header>
        <div className="container">
          <div className="row">
            <div className="brand-name">
              <Link to="/" className="logo">
                <img src={logo3} />
              </Link>
            </div>
            <div className="ham-burger">
              <i className="fa fa-bars"></i>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <Link to="/" class="active">
                    Home
                  </Link>
                </li>
                <li>
                  <div class="dropdown">
                    About Us
                    <i class="fa fa-caret-down"></i>
                    <div class="dropdown-content">
                      <Link to="/team" className="dropTeam">Meet the Team</Link>
                      <Link to="/story">Our Story</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#footer">Contact</Link>
                </li>
                <li>
                  <Link to="/location">Location</Link>
                </li>
                <li>
                  <Link className="orderNow" to="/order">
                    Order Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  )
};

export default Navbar;