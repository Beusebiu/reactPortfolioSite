import React, { Component } from "react";

class JavaS extends Component {
  render() {
    return (
      <div className="container-projects">
        <h1> JavaScript Projects</h1>
        <div className="card-deck card-deck-width">
          <div className="card">
            <img
              className="card-img-top"
              src="https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png"
              alt="Card cap1"
            />
            <div className="card-body">
              <h5 className="card-title">White or Black</h5>
              <p className="card-text">
                This is a game "White or Black" ,created in JS (learn &
                practice). You have to guess the color, also you have a
                score(bet) so you can gambe more or less.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  <a
                    href="https://github.com/Beusebiu/albaNeagra"
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
              src="https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png"
              alt="Card cap2"
            />
            <div className="card-body">
              <h5 className="card-title">Blackjack</h5>
              <p className="card-text">
                Here I created a BlackJack game (just for learn & practice).
                This is with no visual graphic.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  <a
                    href="https://github.com/Beusebiu/blackJack"
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
              src="https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png"
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

export default JavaS;
