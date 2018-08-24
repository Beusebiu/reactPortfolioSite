import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainP from "./mainProjects";

class Projects extends Component {
  // activeTabButton() {
  //   let getBadge = "nav-link";
  //   if (tabId === 0) {
  //     getBadge = "nav-link activ";
  //   }
  // }

  render() {
    return (
      <div>
        <div className="category-tabs">
          <nav class="nav nav-pills nav-justified">
            <Link class="nav-link" to="/projects/html">
              HTML & CSS
            </Link>
            <Link class="nav-link" to="/projects/js">
              JavaScript
            </Link>
            <Link class="nav-link" to="/projects/react">
              React
            </Link>
            <Link class="nav-link" to="/projects/wordpress">
              Live Website Projects
            </Link>
          </nav>
        </div>
        <MainP />
      </div>
    );
  }
}

export default Projects;
