import React, { Component } from "react";
import WeAdvise from "../Assets/Images/Icons/We advise.png";
import WeOffer from "../Assets/Images/Icons/We offer.png";
import WeProvide from "../Assets/Images/Icons/We provide.png";
import ProjectData from "../JSON/projectsData.json";
import TeamModule from "./TeamModule";

export default class ProjectModule extends Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
      teamMemberLightBoxOpen: false,
      clickedTeamMember: "",
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
  toggleTeamLightBox = (member)=>{
    console.log(member);
    this.state.teamMemberLightBoxOpen?this.setState({teamMemberLightBoxOpen: false}): this.setState({teamMemberLightBoxOpen: true});
    this.setState({
      clickedTeamMember: member
    })
  }
  render() {
    return (
   
      <div className="lightBox">
           {this.state.teamMemberLightBoxOpen?<TeamModule viewingClient = {this.props.viewingClient} clickedTeamMember= {this.state.clickedTeamMember} toggleTeamLightBox={()=>this.toggleTeamLightBox()}></TeamModule>: null}
        <div
          className="lightBoxBackground"
          onClick={() => this.props.toggleModule()}
        ></div>
        <i className="fas fa-times exitIcon" />
    
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
            <div className="teamContainer">
              <h2>The Project Team</h2>
              <div className="weProvideContent">
                {this.state.teamList.map((member)=>{
                  return(
                    <figure key={member} onClick={()=>this.toggleTeamLightBox(member)}>
                      <img className="teamProfileImage" alt={member} title={member} src={require("../Assets/Images/Team/" + ProjectData.team[member].image)}></img>
                      <figcaption>
                        <p className="teamName">{member}</p>
                        <p className="teamRole">{ProjectData.team[member].roles[this.props.viewingClient].role}</p>
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
              <p className="listhead">User Experience Design</p>
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
              <p className="listhead">Design Thinking</p>
            </div>
          </div>
          <p className="nextProject">NEXT PROJECT</p>
        </div>
      </div>
    );
  }
}
