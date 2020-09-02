import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
        <section className="locations" id="about">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h1>Locate</h1>
                {/* <p class="small text-uppercase">Our Pledge</p> */}
              </div>
            </div>
            <div className="about-content-location">
              {/* <Map
                google={this.props.google}
                zoom={16}
                initialCenter={{
                  lat: 29.737097,
                  lng: -95.386767,
                }}
              >
                <Marker
                  position={{
                    lat: 29.737097,
                    lng: -95.386767,
                  }}
                ></Marker>
              </Map> */}
              <iframe 
              className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444216.26967291266!2d-95.0288188!3d29.56181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24da915783aa0ee1!2sMario&#39;s%20Pizza%20%26%20Pasta!5e0!3m2!1sen!2sus!4v1598993651078!5m2!1sen!2sus"
                frameborder="0"
                style={{border:0}}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default GoogleMap;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAFD0kzMREDRKtnV2Fdi_GTQpXHfH83GxQ",
// })(GoogleMap);

