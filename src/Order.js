import React from "react";
import Footer from "./Footer";
import "./App.css";
import Navbar from "./Navbar";

function Order(){
    return (
      <div>
        <Navbar />
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
        <section className="build">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h1>Let's Get Started</h1>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    ); 
}

export default Order;