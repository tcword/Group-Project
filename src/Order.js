import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import logo3 from "./images/logo3.png";

function Order(){
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
                    <div class="dropdown">
                      About Us
                      <i class="fa fa-caret-down"></i>
                      <div class="dropdown-content">
                        <Link to="/team" className="dropTeam">
                          Meet the Team
                        </Link>
                        <Link to="/story">Our Story</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#footer">Contact</a>
                  </li>
                  <li>
                    <Link to="/location">Location</Link>
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
        <div className="home2" id="home">
          <div className="container">
            <div className="row full-screen">
              <div className="home-content">
                <div className="block">
                  <h1>IT'S TIME TO BUILD</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="about-me" id="about">
          <div class="container">
            <div class="row">
              <div class="section-title">
                <h1>Mario's Pledge</h1>
                {/* <p class="small text-uppercase">Our Pledge</p> */}
              </div>
              <h4 class="pledge">
                Here at Mario's, we use fresh, never frozen ingredients from
                local farmers that will be sure to satisfy your taste buds. Our
                pledge to you is to satisfy your hunger needs with the best
                pizza in the nation. Voted #1 in the great state of Texas for 5
                straight years for best pizza, we value customer satisfaction
                and promise to provide the best pizza eating experince of your
                life.{" "}
              </h4>
            </div>
            <div class="about-content">
              <i class="fa fa-thumbs-up"></i>
            </div>
            <div class="about-content"></div>
          </div>
        </section>

        <footer id="footer">
          <div class="container">
            <div class="row">
              <div class="logo">Mario's Pizza</div>
              <div class="info">
                <p>Location: 2100 E NASA Pkwy, Seabrook, TX 77586</p>
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

export default Order;