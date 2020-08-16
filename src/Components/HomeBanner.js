import React, { Component } from "react";
import BannerVideo from "../Assets/Videos/life3.MP4"
export default class HomeBanner extends Component {
  render() {
    return (
      <div className="homeBanner">
        <div className="homeBanner3">
          <h1>We Empower</h1>
          <br></br>
            <h2>
              Entrepreneurs with options to design <br /> and build mobile or
              web applications
            </h2>
            <br></br>
            <a href="#homeBanner2">
           
              <button> LEARN MORE </button>
            </a>

        </div>
        <video autoPlay muted loop>
          <source src={BannerVideo}></source>
        </video>
      </div>
    );
  }
}
