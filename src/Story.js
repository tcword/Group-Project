import React from "react";
import "./App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import building from "./images/building.jpg";
import story from "./images/story.jpg";


function Story() {
  return (
    <div id="Story">
     <Navbar />
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
      <Footer />
    </div>
  );
}

export default Story;