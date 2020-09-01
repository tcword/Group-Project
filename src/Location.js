import { Link } from "react-router-dom";
import "./App.css";
import logo3 from "./images/logo3.png";
import React, { Component } from "react";
import "./App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
  render() {
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
                    <Link className="orderNow" to="/order">
                      Order Now
                    </Link>
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
            <div class="about-content">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1774507.97320061!2d-95.64607073335829!3d29.695537418451227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f6251afb5b46b%3A0x24da915783aa0ee1!2sMario&#39;s%20Pizza%20%26%20Pasta!5e0!3m2!1sen!2sus!4v1598647950201!5m2!1sen!2sus"
                width="1000"
                height="650"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
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
}

export default GoogleMap;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAFD0kzMREDRKtnV2Fdi_GTQpXHfH83GxQ",
// })(GoogleMap);

// function Location() {
//   return (
//     <div>
//       <header>
//         <div className="container">
//           <div className="row">
//             <div className="brand-name">
//               <Link to="/" className="logo">
//                 <img src={logo3} />
//               </Link>
//             </div>
//             <div className="ham-burger">
//               <i className="fa fa-bars"></i>
//             </div>
//             <div className="navbar">
//               <ul>
//                 <li>
//                   <Link to="/" class="active">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/team">Meet the Team</Link>
//                 </li>
//                 <li>
//                   <a href="#footer">Contact</a>
//                 </li>
//                 <li>
//                   <a href="/location">Location</a>
//                 </li>
//                 <li>
//                   <a className="orderNow" href="/order">
//                     Order Now
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="location" id="location">
//         <div className="container">
//           <div className="row full-screen">
//             <div className="home-content">
//               <div className="block">
//                 <h1>Locate Us</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section class="locations" id="about">
//         <div class="container">
//           <div class="row">
//             <div class="section-title">
//               <h1>Locate</h1>
//               {/* <p class="small text-uppercase">Our Pledge</p> */}
//             </div>
//           </div>
//           <div class="about-content"></div>
//         </div>
//       </section>

//       <footer id="footer">
//         <div class="container">
//           <div class="row">
//             <div class="logo">Mario's Pizza</div>
//             <div class="info">
//               <p>Location: 555 N. Bernard St. Houston, T.X 77701</p>
//               <p>Open: Monday-Saturday (11:00am-10:00pm)</p>
//               <p>Contact: (888)777-4444</p>
//             </div>
//             <div class="social">
//               <a href="/" target="_blank">
//                 <i class="fa fa-facebook"></i>
//               </a>
//               <a href="/" target="_blank">
//                 <i class="fa fa-instagram"></i>
//               </a>
//               <a href="/" target="_blank">
//                 <i class="fa fa-twitter"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Location;
