import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="container-resume">
        <div>
          <div className="resume-work">
            <h2>WORK EXPERIENCE</h2>
            <div>
              <h3>Network Administrator</h3>
              <h3>Resonance Distribution</h3>
              <p className="resume-period">08/2017 – 07/2018</p>
              <ul>
                <li>Wordpress (create/maintenance resonance.ro);</li>
                <li>
                  Woocommerce (create/maintenance online store wattelectric.ro
                  );
                </li>
                <li>HTML 5 & CSS 3;</li>
                <li>Emag account (create / maintenance / adding products </li>
                <li>
                  Adobe Photoshop (create posters, logo, business cards,
                  diplomas, flyers);
                </li>
                <li>Facebook (content creator/ administrating ads)</li>
                <li>Google Adwords /Analytics;</li>
                <li>Yoast SEO;</li>
              </ul>
            </div>
            <div>
              <div className="resume-header-text">
                <h3>Network Administrator</h3>
                <h3>Mr. Bricolage</h3>
                <p className="resume-period">07/2016 – 03/2017</p>
              </div>
              <ul>
                <li>
                  Providing technical support for users (create/delete account
                  in AD, Exchange, reset password, Office /Hardware problems);
                </li>
                <li>
                  Printers / Ticket Printers / Windows XP/7/10 - installation,
                  configuration, troubleshooting;
                </li>
                <li>
                  Basic network management(routing, switching, VPN, firewall,
                  patch panel);
                </li>
                <li>VMware vSphere Client;</li>
                <li>
                  SAP Basis Administration(create/delete accont, reset password,
                  duplicate invoices problems, difference between invoices,
                  monthly reports);
                </li>
                <li>Microsoft Windows Server 2003/2008/2012 administration;</li>
                <li>SQL Basic Querying;</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="resume-education">
            <h2>EDUCATION</h2>
            <h3>Study Programme</h3>
            <p>Faculty of Automatic Control and Computer Engineering - Iasi</p>
            <p className="resume-period">09/2014 - 07/2018</p>
          </div>
          <div className="resume-skills">
            <h2>SKILLS</h2>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Photoshop
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS3
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML5
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                SQL
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Wordpress
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Woocommerce
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JavaScript
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                GIT &GitHub
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                React
              </div>
            </div>
          </div>
          <div className="resume-projects">
            <h2>PERSONAL PROJECTS</h2>

            <div>
              <h3>Pernador.ro</h3>
              <p>
                This website is created in Prestashop. 80% of it is created by
                me
              </p>
              <p className="resume-period">02/2018 – 05/2018</p>
            </div>

            <div>
              <h3>Internship Tester - Pentalog</h3>
              <p>
                Tester Manual/Automation - after this internship I took a test
                from ISTQB-ISEB (basic about life cycle ,triangle decision table
                ,testing principles,testing types,static testing,etc.)
              </p>
              <p className="resume-period">03/2016 – 05/2016</p>
            </div>
          </div>
          <div className="resume-language">
            <h2>LANGUAGES</h2>
            <p> English</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="resume-interests">
            <h2>INTERESTS</h2>
            <span class="badge badge-secondary">Front-End Developer</span>
            <span class="badge badge-secondary">Web Developer</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
