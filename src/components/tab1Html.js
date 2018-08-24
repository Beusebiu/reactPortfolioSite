import React, { Component } from "react";

class Tab1HTML extends Component {
  render() {
    return (
      <div className="container-projects">
        <h1> HTML5 & CSS3 Projects</h1>
        <div className="card-deck card-deck-width">
          <div className="card">
            <img
              className="card-img-top"
              src="https://cms-assets.tutsplus.com/legacy-courses/CRS-40.png"
              alt="Card cap1"
            />
            <div className="card-body">
              <h5 className="card-title">A responsive design</h5>
              <p className="card-text">
                Here I created a responsiv design. Very simple, but still very
                atractive.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  <a
                    href="https://github.com/Beusebiu/CssGridResponsiveTemplate"
                    target="_black"
                  >
                    GITHUB CODE
                  </a>
                </button>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://cms-assets.tutsplus.com/legacy-courses/CRS-40.png"
              alt="Card cap2"
            />
            <div className="card-body">
              <h5 className="card-title">No project</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  GITHUB CODE
                </button>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://cms-assets.tutsplus.com/legacy-courses/CRS-40.png"
              alt="Card cap3"
            />
            <div className="card-body">
              <h5 className="card-title">No project</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  GITHUB CODE
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab1HTML;
