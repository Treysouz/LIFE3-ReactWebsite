import React, { Component } from "react";

import ProjectData from "../JSON/projectsData.json";
import TeamModule from "./TeamModule";

export default class ProjectModule extends Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
      teamMemberLightBoxOpen: false,
      clickedTeamMember: "",
      clientIndex: -1,
      newClientIndex: 0,
      clientList: [],
      timeTravel: false,
      timeTravelTeam: [],
    };
  }
  componentDidMount() {
    this.updateClientInfo();
  }

  updateClientInfo = () => {
    this.setState({
      teamList: Object.keys(ProjectData.team).filter((key) => {
        return Object.keys(ProjectData.team[key].roles).includes(
          this.props.viewingClient
        );
      }),
      timeTravelTeam: Object.keys(ProjectData.team).filter((key) => {
        return Object.keys(ProjectData.team[key].roles).includes(
          this.props.viewingClient + "(2019)"
        );
      }),
      clientList: Object.keys(ProjectData.clients),
      clientIndex: Object.keys(ProjectData.clients).indexOf(
        this.props.viewingClient
      ),
      newClientIndex:
        Object.keys(ProjectData.clients).indexOf(this.props.viewingClient) + 1,
    });
  };
  componentDidUpdate() {

  }
  toggleTeamLightBox = (member) => {
    console.log(member);
    this.state.teamMemberLightBoxOpen
      ? this.setState({ teamMemberLightBoxOpen: false })
      : this.setState({ teamMemberLightBoxOpen: true });
    this.setState({
      clickedTeamMember: member,
    });
  };
  render() {
    return (
      <div className="lightBox">
        {this.state.teamMemberLightBoxOpen ? (
          <TeamModule
            viewingClient={this.props.viewingClient}
            clickedTeamMember={this.state.clickedTeamMember}
            toggleTeamLightBox={() => this.toggleTeamLightBox()}
          ></TeamModule>
        ) : null}

        <div
          className="lightBoxBackground"
          onClick={() => this.props.toggleProjectModule()}
        ></div>
        <i className="fas fa-times exitIcon" />

        <div className="projectLightBox">
          <div>
            <img
              className="partnerLogo"
              src={require("../Assets/Images/Icons/" +
                ProjectData.clients[this.props.viewingClient].icon)}
              alt={this.props.viewingClient}
              title={this.props.viewingClient}
            />
          </div>
          <h1>
            Our Services <span className="shadowedText">Services</span>
          </h1>

          <div className="servicesContent">
            <p>{ProjectData.clients[this.props.viewingClient].weOffer}</p>
          </div>
          <div className="phaseContainer">
            <div className="phase">
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
          <div className="teamContainer">
            <h2>The Project Team</h2>

            <div className="teamMemberContainer">
              {this.state.timeTravel ? (
                <div className="teamProfiles2">
                  {this.state.timeTravelTeam.map((member) => {
                    return (
                      <figure
                        key={member}
                        onClick={() => this.toggleTeamLightBox(member)}
                      >
                        <img
                          className="teamProfileImage"
                          alt={member}
                          title={member}
                          src={require("../Assets/Images/Team/" +
                            ProjectData.team[member].image)}
                        ></img>
                        <figcaption>
                          <p className="teamName">{member}</p>
                          <p className="teamRole">
                            {
                              ProjectData.team[member].roles[
                                this.props.viewingClient +
                                  "(2019)"
                              ].role
                            }
                          </p>
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              ) : (
                <div className="teamProfiles2">
                  {this.state.teamList.map((member) => {
                    return (
                      <figure
                        key={member}
                        onClick={() => this.toggleTeamLightBox(member)}
                      >
                        <img
                          className="teamProfileImage"
                          alt={member}
                          title={member}
                          src={require("../Assets/Images/Team/" +
                            ProjectData.team[member].image)}
                        ></img>
                        <figcaption>
                          <p className="teamName">{member}</p>
                          <p className="teamRole">
                            {
                              ProjectData.team[member].roles[
                                this.props.viewingClient
                              ].role
                            }
                          </p>
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {this.props.viewingClient == "LIFE3" ? (
            <div className="timeTravelContainer">
              <h1>{!this.state.timeTravel? "2020": "2019"} LIFE3 WEBSITE REDESIGN</h1>
              <div className="redesignContainer">
                <div className="redesigncell">
                  <h2>BEFORE</h2>
                 {!this.state.timeTravel? <img
                    src={require("../Assets/Images/2020 Before, 2019 After.png")}
                    alt="LIFE3 2020 Before Design" 
                  /> : <img
                  src={require("../Assets/Images/2019 Before.png")}
                  alt="LIFE3 2020 Before Design" 
                 /> }
                </div>
                <div className="redesigncell">
                  <h2>AFTER</h2>
                 {!this.state.timeTravel? <img
                    src={require("../Assets/Images/2020 After.png")}
                    alt="LIFE3 2020 After Design"
                  />: <img
                  src={require("../Assets/Images/2020 Before, 2019 After.png")}
                  alt="LIFE3 2020 After Design"
                /> }
                </div>
              </div>
              {!this.state.timeTravel ? (
                <button
                  onClick={() => {
                    this.setState({
                      timeTravel: !this.state.timeTravel,
                    });
                    this.updateClientInfo();
                  }}
                  className="timeTravelBtn"
                >
                   2019 TIME TRAVEL
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.setState({
                      timeTravel: !this.state.timeTravel,
                    });
                    this.updateClientInfo();
                  }}
                  className="timeTravelBtn"
                >
                  Back to Recent
                </button>
              )}
            </div>
          ) : null}
          {ProjectData.clients[
            this.state.clientList[this.state.clientIndex + 1]
          ] ? (
            <div
              className="nextProjectContainer"
              onClick={() => {
                this.props.toggleProjectModule();
                setTimeout(() => {
                  this.props.toggleProjectModule(
                    this.state.clientList[this.state.clientIndex + 1]
                  );
                }, 500);
                this.updateClientInfo();
                console.log(this.state.teamList);
              }}
            >
              <img
                src={require("../Assets/Images/Icons/" +
                  ProjectData.clients[
                    this.state.clientList[this.state.clientIndex + 1]
                  ].icon)}
                alt="Next Project"
                title="Next Project"
              ></img>
              <button className="nextProject">NEXT PROJECT</button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
