import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo3 from "./images/logo3.png";

function Location() {
  return (
    <div>
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
                  <Link to="/team">Meet the Team</Link>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
                <li>
                  <a href="/location">Location</a>
                </li>
                <li>
                  <a className="orderNow" href="/order">
                    Order Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="location" id="location">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h1>Locate Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="locations" id="about">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h1>Locate</h1>
              {/* <p class="small text-uppercase">Our Pledge</p> */}
            </div>
          </div>
          <div class="about-content"></div>
        </div>
      </section>

      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="logo">Mario's Pizza</div>
            <div class="info">
              <p>Location: 555 N. Bernard St. Houston, T.X 77701</p>
              <p>Open: Monday-Saturday (11:00am-10:00pm)</p>
              <p>Contact: (888)777-4444</p>
            </div>
            <div class="social">
              <a href="/" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="/" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="/" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Location;
