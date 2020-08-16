import React, { Component } from "react";
import WeAdvise from "../Assets/Images/Icons/We advise.png";
import WeOffer from "../Assets/Images/Icons/We offer.png";
import WeProvide from "../Assets/Images/Icons/We provide.png";
import ProjectData from "../JSON/projectsData.json";

export default class ProjectModule extends Component {
  render() {
    return (
      <div className="lightBox">
        <div className="lightBoxBackground" onClick={()=>this.props.toggleModule()}/>
        <i className="fas fa-times exitIcon" onClick={()=>this.props.toggleModule()} />
        <div className="projectLightBox">
          <div className="weOffer">
            <div>
              <img src={WeOffer} />
              <h2>We Offer</h2>
            </div>
            <div className="weOfferContent" >
                <p>{ProjectData.clients[this.props.viewingClient].weOffer}</p>
            </div>
          </div>
          <div className="weProvide">
            <div>
              <img src={WeProvide} />
              <h2>We Provide</h2>
            </div>
            <p className="weProvideContent" />
          </div>
          <div className="weAdvise">
            <div>
              <img src={WeAdvise} />
              <h2>We Advise</h2>
            </div>
            <p className="weAdviseContent" />
          </div>
        </div>
      </div>
    );
  }
}
