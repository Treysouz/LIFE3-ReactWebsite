import React, { Component } from "react";
import HomeBanner from "../Components/Banner";
import AboutUsImage from "../Assets/Images/About Us image.jpg";
import ProjectData from "../JSON/projectsData.json";
import ProjectModule from "../Components/ProjectModule";
import PhaseOneBanner from "../Assets/Images/Banner/phase1.png";
import PhaseTwoBanner from "../Assets/Images/Banner/phase2.png";
import PhaseThreeBanner from "../Assets/Images/Banner/phase3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default class Empower extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getPage(window.location.pathname);
  }
  render() {
    return (
      <section className="empower">
        <div>
          <div className="testimonials">
            <h1>TESTIMONIALS</h1>
            <div className="testimonialsHead">
              <img
                src={require("../Assets/Images/Team/sabine.jpg")}
                alt="Image of Sabine Salandy"
              />
              <div className="testimonialsName">
                <h2>SABINE SALANDY</h2>
                <h3>UX RESEARCHER, ENERGY EDC</h3>
              </div>
            </div>
            <div className="testimonialsContentInfo">
              <p>
                " I was skeptical about technology as an industry where I can
                thrive. Even though I had studied UX design and was good at what
                I did I wasn't sure it was the right field for me .
                <strong> LIFE3 created a culture of inclusion</strong> where I
                felt free to share my ideas and make mistakes. Not only were my
                suggestions heard but they were often acted upon and credited.
                It was a really <strong>empowering experience </strong> for me.
                "
              </p>
            </div>
          </div>
          <div className="partners">
            <div className="partnersInfoContainer">
              <div className="partnersText">
                <a
                  href="https://www.linkedin.com/feed/hashtag/businessprojects"
                  target="_blank"
                >
                  <h1>
                    Business Projects{" "}
                    <span className="shadowedText">Projects</span>
                  </h1>
                </a>

                <div className="partnerLogosContainer">
            
                    <figure id="mucktracker" className="partnerLogo">
                      <img
                        src={require("../Assets/Images/Icons/mucktracker.png")}
                        alt="Mucktraker Logo"
                        title="MuckTracker"
                      />
                      <div className="partnerLogoNames">
                        <h2>MuckTracker</h2>
                      </div>
                      <div>
                        <a>
                          {" "}
                          <button> LEARN MORE </button>{" "}
                        </a>
                      </div>
                    </figure>
                    <figure id="energyedc" className="partnerLogo">
                      <img
                        src={require("../Assets/Images/Icons/energyedc.png")}
                        alt="Energy Economic Development Corp Logo"
                        title="Energy Economic Development Corp"
                      />
                      <div className="partnerLogoNames">
                        <h2>Energy EDC</h2>
                      </div>
                      <div>
                        <a>
                          {" "}
                          <button> LEARN MORE </button>{" "}
                        </a>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}
