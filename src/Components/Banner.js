import React, { Component } from "react";
import Particles from 'react-particles-js';

const config = require('../JSON/particlesjs-config.json');


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
          <Particles className="particlesBanner" params={config}></Particles>
        ) : null}

        {this.props.currentPage === "/" ? (
          <div className="banner">
            <h1>We Enable</h1>
            <div>
              <h2 className="bannerText">
                you to build and design your digital application in a diverse
                and equitable environment
              </h2>
            </div>
          </div>
        ) : null}
        {this.props.currentPage === "/enable" ? (
          <div className="enableBannerContent">
            <h1>We Enable</h1>
            <h2 className="bannerText">
              LIFE3 creates environments where team of thinkers and learners are
              enabled. Our initiative is having a positive impact on the number
              of underrepresented groups learning about , securing jobs, and
              approaching entrepreneurial ventures.
            </h2>
          </div>
        ) : null}
        {this.props.currentPage === "/empower" ? (
          <div className="banner">
            <h1> We Empower </h1>
            <h2 className="bannerText">
              inclusion of underrepresented communities in
              technology-focused careers and entrepreneurial ventures
            </h2>

          </div>
        ) : null}
      </div>
    );
  }
}
