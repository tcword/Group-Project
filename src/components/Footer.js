import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function Footer() {
  return (
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
  );
}

export default Footer;
