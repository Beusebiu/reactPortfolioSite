import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container-contact">
        <div className="row">
          <div className="col-sm">
            <img
              src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/11035548_864414130280895_3087896319083256697_n.jpg?_nc_cat=0&oh=e901264c0304379d48753f9e9df63333&oe=5C08C6C4"
              alt="wird child"
              className="avatar-img"
            />{" "}
            <h1>Eusebiu Balan</h1>
            <p>
              The best word that describes me is "persevering" because only with
              a lot of work I will have the best results. Lately I have been
              focusing on learning and deepening knowledge on web development.
            </p>
          </div>
          <div className="col-sm">
            <h1 className="contact-contactme">Contact me</h1>
            {/* <div className="dotted" /> */}
            <hr />
            <div className="row">
              <div className="col-sm grid-sm">
                <i
                  class="fas fa-mobile-alt fa-4x  icon-contact"
                  aria-hidden="true"
                />
                <div className="col-sm text-contact">+40755759867</div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm  grid-sm">
                <i
                  class="fab fa-facebook fa-4x icon-contact"
                  aria-hidden="true"
                />
                <div className="col-sm text-contact facebook">
                  https://www.facebook.com/beusebiu11
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm  grid-sm">
                <i
                  class="fas fa-envelope fa-4x icon-contact"
                  aria-hidden="true"
                />
                <div className="col-sm text-contact">
                  eusebiubalan11@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
