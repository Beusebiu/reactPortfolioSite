import React, { Component } from "react";
import "../App.css";

class ReactT extends Component {
  render() {
    return (
      <div className="container-projects">
        <h1> React Projects</h1>
        <div className="card-deck card-deck-width">
          <div className="card">
            <img
              className="card-img-top"
              src="https://reactjs.org/logo-og.png"
              alt="Card cap1"
            />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  GITHUB
                </button>
                <button type="button" class="btn btn-dark">
                  CODEPEN
                </button>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://reactjs.org/logo-og.png"
              alt="Card cap2"
            />
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  GITHUB
                </button>
                <button type="button" class="btn btn-dark">
                  CODEPEN
                </button>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://reactjs.org/logo-og.png"
              alt="Card cap3"
            />
            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  GITHUB
                </button>
                <button type="button" class="btn btn-dark">
                  CODEPEN
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactT;
