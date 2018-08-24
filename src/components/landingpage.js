import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-color" style={{ width: "100", margin: "auto" }}>
        <div class="container ">
          <div class="row">
            <div class="col" />
            <div class="col">
              <img
                className="avatar-img"
                src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png"
                alt="avatar"
              />
            </div>
            <div class="col" />
          </div>
        </div>
        <div className="banner-text">
          <h1> Front - End Developer</h1>
          <hr />
          <p>
            HTML/CSS | Bootstrap | JavaScript | React | React Native | Wordpress
          </p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/eusebiu-balan-735982131/"
              target="_black"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin fa-6x"
                aria-hidden="true"
                style={{ color: "white" }}
              />
            </a>
            <a
              href="https://github.com/Beusebiu"
              target="_black"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-git-square fa-6x"
                aria-hidden="true"
                style={{ color: "white" }}
              />
            </a>
            <a
              href="https://www.facebook.com/beusebiu11"
              target="_black"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-facebook-square fa-6x"
                aria-hidden="true"
                style={{ color: "white" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
