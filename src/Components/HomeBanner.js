import React, { Component } from "react";
import BannerVideo from "../Assets/Videos/life3.MP4";
export default class HomeBanner extends Component {
  render() {
    return (
      <div className="bannerContainer">
        <video autoPlay muted loop>
          <source src={BannerVideo} />
        </video>
        <div className="banner">
          <h1> Be Empowered </h1>
          <h2>
            {" "}
            to build and design your web or mobile application in an equitable
            environment{" "}
          </h2>
          <h2>
            <a href="#contactUs">
              {" "}
              <button> Contact Us </button>{" "}
            </a>
          </h2>
        </div>
      </div>
    );
  }
}
