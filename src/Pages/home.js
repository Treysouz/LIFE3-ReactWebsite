import React, { Component } from "react";
import HomeBanner from "../Components/HomeBanner";
import AboutUsImage from "../Assets/Images/About Us image.jpg";
import ProjectData from "../JSON/projectsData.json";
import ProjectModule from "../Components/ProjectModule";
import PhaseOneBanner from "../Assets/Images/Banner/phase1.png"
import PhaseTwoBanner from "../Assets/Images/Banner/phase2.png"
import PhaseThreeBanner from "../Assets/Images/Banner/phase3.png"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      moduleOpen: false,
      lightBoxType: "",
      viewingClient: "",
    };
  }
  componentDidMount(){
    console.log(this);
  }
  toggleModule = (client) => {
    this.setState({
      moduleOpen: !this.state.moduleOpen,
      viewingClient: client,
    });
  };
  openModule = () => {
    return (
      <ProjectModule
        toggleModule={() => this.toggleModule()}
        viewingClient={this.state.viewingClient}
      ></ProjectModule>
    );
  };

  render() {
    return (
      <section className="home">
        {this.state.moduleOpen ? this.openModule() : null}
        <div>
          {/* How Can We Help You Section */}
          <div className="mainInfo" id="mainInfo">
            <h1>HOW CAN WE HELP YOU?</h1>
            <div className="mainInfoContainer">
              <div
                className="phaseContainer slide"
                file="https://drive.google.com/file/d/132avrm1sUKYvK113wnqbtJU4dDMeUw58/preview"
              >
                <img  src={PhaseOneBanner }  alt="phase1 image" />
                <p>Product Design Services</p>
                <div className="phase">
                  <h2>phase 1</h2>
                  <p>
                    Mock-up &amp; <br />
                    Product Roadmap
                  </p>
                </div>
                <h2
                  className="slide"
                  file="https://drive.google.com/file/d/1OTD5Q39uO-Q5GZgblyNYOxA5eaNanppP/preview"
                >
                  "I have an idea for an app and would like some advice and
                  direction on how I can get started"
                </h2>
                <a>
                  <button>learn more</button>
                </a>
              </div>
              <div
                className="phaseContainer slide"
                file="https://drive.google.com/file/d/1Wsx8BNNwfMMfy0UDoGUVRAj0qnQWZUPk/preview"
              >
                <img src={PhaseTwoBanner } alt="phase2 image" />
                <p>Product Design &amp; Development Services</p>
                <div className="phase">
                  <h2>phase 2</h2>
                  <p>
                    Software Design &amp; <br />
                    Development
                  </p>
                </div>
                <h2>
                  "I am ready to work with developers and designers to create a
                  market-relevant, customer-centric app"
                </h2>
                <a>
                  <button>learn more</button>
                </a>
              </div>
              <div className="phaseContainer">
                <img src={PhaseThreeBanner } alt="phase3 image" />
                <p>Product Management Services</p>
                <div className="phase">
                  <h2>phase 3</h2>
                  <p>
                    Artificial Intelligence
                    <br /> &amp; Analytics
                  </p>
                </div>
                <h2>
                  "I want to leverage data insights through advance analytics
                  and artificial intelligence technology"
                </h2>
                <a>
                  <button>learn more</button>
                </a>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="partners">
            <div className="partnersInfoContainer">
              <div className="partnersText">
                <h1>
                  <a
                    href="https://www.linkedin.com/feed/hashtag/businessprojects"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Business Projects
                  </a>
                </h1>
                <p>
                  {" "}
                  LIFE3 employs design thinking frameworks to strategize around
                  unique user needs, conduct market validation, get from idea
                  conception to visual prototype, and drive customer-centric
                  development
                </p>
              </div>
              <div className="partnerLogosContainer">
                {Object.keys(ProjectData.clients).map((key,index)=>{
             
                  return (
                    <img className="partnerLogo" src={require("../Assets/Images/Icons/" +ProjectData.clients[key].icon )} key = {key} onClick={()=>this.toggleModule(key)}></img>
                  )
                })}
              </div>
            </div>
          </div>
          {/* About Us */}
          <div className="about">
            <h1> ABOUT US </h1>
            <div className="aboutUs">
              <div className="aboutContent">
                <p>
                  <strong>WE ENABLE</strong> equity of underrepresented groups
                  in technology-focused careers and entrepreneurial ventures.
                </p>
                <button>
                  learn more <strong>→</strong>
                </button>
              </div>
              <div className="aboutImage">
                <img
                  src={AboutUsImage}
                  alt="about us image"
                />
              </div>
            </div>
          </div>

          
          
          <footer>
            <div className="contactUsForm" id="contactUs">
              <form action="https://formspree.io/xzbeebbo" method="POST">
                <h2>CONTACT US</h2>
                <h1>SEND US A MESSAGE</h1>
                <br />
                <div className="formInput">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Your Company Name"
                  />
                  <input type="email" name="emailAddress" placeholder="Email" />
                </div>
                <div className="formInput">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="tel" name="phoneNumber" placeholder="Phone#" />
                </div>
                <div className="messageInput">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <input
                  className="submitBtn"
                  type="submit"
                  defaultValue="SEND MESSAGE"
                />
              </form>
            </div>
            {/* <img class="footerLogo" src="Assets/Images/Icons/LIFE3FooterLogo.png" alt="LIFE3 Logo" title="LIFE3"> */}
            {/* <div class="contactUsContainer">
      <h3>CONTACT US</h3>
      <p>215 Moore St, <br> Brooklyn, NY 11206 <br> USA</p>
  </div> */}
            <div className="socialMediaContainer">
              <p>EMAIL US | CALL US (917) 570-2669</p>
              <div className="iconBar">
                <a
                  href="https://www.linkedin.com/company/life3-learn-innovate-for-innovation-enablement-empowerment/?viewAsMember=true"
                  target="_blank" rel="noopener noreferrer"
                >
                  <div className="socialMediaIcon">
                    <i className="fab fa-linkedin-in" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/life3innovate/?modal=admin_todo_tour"
                  target="_blank" rel="noopener noreferrer"
                >
                  <div className="socialMediaIcon">
                    <i className="fab fa-facebook-f" />
                  </div>
                </a>
                <a href="mailto:omar.duran@life3.io">
                  <div className="socialMediaIcon">
                    <i className="far fa-envelope" />
                  </div>
                </a>
              </div>
              <p className="copyright">2020 LIFE3 All rights reserved.</p>
              <p></p>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}
