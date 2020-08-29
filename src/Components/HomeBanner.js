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
          <h1>WE ENABLE</h1>
          <div>
            <h2>
              equity of underrepresented groups in technology-focused careers
              and entrepreneurial ventures
            </h2>
            <h2>
              <a href="#contactUs">
                {" "}
                <button> Contact Us </button>{" "}
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
