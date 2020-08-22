import React from "react";
import "./App.css";

function Banner() {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="row full-screen">
          <div className="home-content">
            <div className="block">
              <h1>Welcome to Mario's Pizza</h1>
              <p>REAL ITALIAN PIZZA WITH REAL INGREDIENTS</p>
              <div class="cv-btn">
                <a href="/" target="_blank">
                  Build Your Pizza
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
