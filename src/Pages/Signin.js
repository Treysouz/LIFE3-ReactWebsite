import React, { Component } from "react";
import BannerVideo from "../Assets/Videos/life3.MP4";
import SigninForm from "../Components/Forms/SigninForm"

export default class Signin extends Component {
    constructor() {
        super();
        this.state = {};
      }
      componentDidMount() {
        this.props.getPage("/signin");
        window.scrollTo(0, 0);
      }

    render() {
        return (
            <div>
          <video autoPlay muted loop>
            <source src={BannerVideo} type="video/mp4" />
          </video>
          <SigninForm/>
            </div>
        );
    }
}
