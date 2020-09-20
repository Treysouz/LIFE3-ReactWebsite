import React, { Component } from "react";
import BannerVideo from "../Assets/Videos/life3.MP4";

export default class HomeBanner extends Component {
  render() {
    return (
      <div
        className={
          this.props.currentPage === "/empower" ||
          this.props.currentPage === "/enable"
            ? "bannerContainer eBanner"
            : "bannerContainer"
        }
      >
        {this.props.currentPage === "/" ? (
          <video autoPlay muted loop>
            <source src={BannerVideo} type="video/mp4" />
          </video>
        ) : null}

        {this.props.currentPage === "/" ? (
          <div className="banner">
            <h1>BE EMPOWERED</h1>{" "}
            <div>
              <h2>
                to build and design your web or mobile application in an
                equitable environment
              </h2>
              <h2>
                <a href="#contactUs">
                  {" "}
                  <button> Contact Us </button>{" "}
                </a>
              </h2>
            </div>
          </div>
        ) : null}
        {this.props.currentPage === "/enable" ? (
          <div className="enableBannerContent">
            <h1>WE ENABLE</h1>{" "}
            <p>
              LIFE3 creates environments where team of thinkers and learners are
              enabled. Our initiative is having a positive impact on the number
              of underrepresented groups learning about , securing jobs, and
              approaching entrepreneurial ventures.
            </p>
          </div>
        ) : null}
        {this.props.currentPage === "/empower" ? (
          <div className="empowerBannerContent">
            <h1> We Empower </h1>
            <p>
              LIFE3 creates environments where early-stage businesses concept
              are empowered.We provide insights into agile &amp; design thinking
              frameworks. We present management and design thinking principles
              for startups to consider and apply these concepts for their web
              and mobile.{" "}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
