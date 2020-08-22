import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";

function About() {
  return (
    <div>
      <header className="about_header">
        <div className="container">
          <div className="row">
            <div className="brand-name">
              <a href="#home" className="logo">
                <img src={logo} />
              </a>
            </div>
            <div className="ham-burger">
              <i className="fa fa-bars"></i>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a href="#home" class="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
                <li>
                  <a href="#footer">Catering</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <div className='about_home'>
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section class="about-me" id="about">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h1>Mario's Pledge</h1>
              {/* <p class="small text-uppercase">Our Pledge</p> */}
            </div>
            <h4 class="pledge">
              Here at Mario's, we use fresh, never frozen ingredients from local
              farmers that will be sure to satisfy your taste buds. Our pledge
              to you is to satisfy your hunger needs with the best pizza in the
              nation. Voted #1 in the great state of Texas for 5 straight years
              for best pizza, we value customer satisfaction and promise to
              provide the best pizza eating experince of your life.{" "}
            </h4>
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

export default About;
