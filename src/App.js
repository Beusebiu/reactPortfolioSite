import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light header-color">
          <Link className="navbar-brand" to="/">
            <span style={{ fontSize: "20px" }}>B</span>
            eusebiu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects/html">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
