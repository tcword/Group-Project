import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo3 from "./images/logo3.png";
import building from "./images/building.jpg";
import story from "./images/story.jpg";


function Story() {
  return (
    <div id="Story">
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
                  <Link className="orderNow" to="/order">
                    Order Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="story" id="home">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h1>our story</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-me2">
        <div className="container">
          <div className="row">
            <div className="section-title2">
              <h1>How we started</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="imgBuilding">
                  <img src={story} />
                </div>
                <div className="text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  </p>
                </div>
              </div>
            </div>
          </div>
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

export default Story;