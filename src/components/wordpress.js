import React, { Component } from "react";

class Wordpress extends Component {
  render() {
    return (
      <div className="container-projects">
        <h1> Live website Projects</h1>
        <div className="card-deck card-deck-width">
          <div className="card">
            <img
              className="card-img-top"
              src="https://sophosnews.files.wordpress.com/2018/02/wp-1200.png?w=780&h=408&crop=1"
              alt="Card cap1"
            />
            <div className="card-body">
              <h5 className="card-title">resonance.ro</h5>
              <p className="card-text">
                This is a website created in Wordpress. For this site I use many
                plugins link Elementor. This site is for a company presentation.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  <a href="https://resonance.ro" target="_black">
                    WEBSITE LINK
                  </a>
                </button>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.multimedia-creations.academy/wp-content/uploads/2017/02/curs-wordpress-woocommerce-1.png"
              alt="Card cap2"
            />
            <div className="card-body">
              <h5 className="card-title">wattelectric.ro</h5>
              <p className="card-text">
                This is a website created in Wordpress with the plugin for
                ecommerce 'Woocommerce'. This is a live ecommerce website.
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  <a href="https://www.wattelectric.ro" target="_black">
                    WEBSITE LINK
                  </a>
                </button>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://i2.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/01/prestashop.png?fit=1000%2C600&ssl=1"
              alt="Card cap3"
            />
            <div className="card-body">
              <h5 className="card-title">pernador.ro</h5>
              <p className="card-text">
                This website is created in Prestashop. 80% of it is created by
                me
              </p>
              <p className="card-text-btn">
                <button type="button" class="btn btn-dark">
                  <a href="https://www.pernador.ro" target="_black">
                    WEBSITE LINK
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wordpress;
