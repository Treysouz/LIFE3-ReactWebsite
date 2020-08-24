import React, { Component } from "react";
import WeAdvise from "../Assets/Images/Icons/We advise.png";
import WeOffer from "../Assets/Images/Icons/We offer.png";
import WeProvide from "../Assets/Images/Icons/We provide.png";
import ProjectData from "../JSON/projectsData.json";

export default class ProjectModule extends Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
    };
  }
  componentDidMount() {
    this.setState({
      teamList: Object.keys(ProjectData.team).filter((key) => {
        return Object.keys(ProjectData.team[key].roles).includes(
          this.props.viewingClient
        );
      })
    })
  }
  render() {
    return (
      <div className="lightBox">
        <div
          className="lightBoxBackground"
          onClick={() => this.props.toggleModule()}
        ></div>
        <i className="fas fa-times exitIcon" />
        <div className="lightBoxContent">
          <iframe
            className="slideShow"
            src=""
            frameBorder={0}
            allowFullScreen={true}
            mozallowfullscreen={true}
            webkitallowfullscreen={true}
          />
          <div className="teamMemberLightBox">
            <div className="teamProfileImage">
              <img />
              <a href="" target="_blank" rel="noopener noreferrer">
                <div className="socialIcon">
                  <i className="fab fa-linkedin-in" />
                </div>
              </a>
            </div>
            <div className="profileInformation">
              <h1 className="teamName" />
              <h2 className="teamRole" />
              <ul className="roleDescription">
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
        </div>
        <div className="projectLightBox">
          <div className="weOffer">
            <div>
              <img src={WeOffer} />
              <h2>We Offer</h2>
            </div>
            <div className="weOfferContent">
              {ProjectData.clients[this.props.viewingClient].weOffer}
            </div>
          </div>
          <div className="weProvide">
            <div>
              <img src={WeProvide} />
              <h2>We Provide</h2>
            </div>
            <div>
              <p>The project Team</p>
              <div className="weProvideContent">
                {this.state.teamList.map((member)=>{
                  return(
                    <figure key={member}>
                      <img src={require("../Assets/Images/Team/" + ProjectData.team[member].image)}></img>
                      <figcaption>
                        <h3>{member}</h3>
                        <h4>{ProjectData.team[member].roles[this.props.viewingClient].role}</h4>
                      </figcaption>
                    </figure>
                  )
                })}
                {/* {Object.keys(ProjectData.team).map((key,index)=>{

                })} */}
              </div>
            </div>
          </div>
          <div className="weAdvise" style={{ height: "35%" }}>
            <div>
              <img src={WeAdvise} />
              <h2>We Advise</h2>
            </div>
            <div className="phase" style={{ borderBottomLeftRadius: 40 }}>
              <h2>phase 1</h2>
              <p>
                Mock-up &amp; <br />
                Product Roadmap
              </p>
              <br />
              <p>User Experience Design</p>
              <div className="weAdviseContent">
                <ul>
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
            <div className="phase">
              <h2>phase 2</h2>
              <p>
                Software Design &amp; <br />
                Development
              </p>
              <br />
              <p>Design Thinking</p>
            </div>
          </div>
          <p className="nextProject">NEXT PROJECT</p>
        </div>
      </div>
    );
  }
}
