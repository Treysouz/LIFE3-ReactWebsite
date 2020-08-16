import React, { Component } from "react";
import HomeBanner from "../Components/HomeBanner";
import AboutUsImage from "../Assets/Images/About Us image.jpg";
import ProjectData from "../JSON/projectsData.json";
import ProjectModule from "../Components/ProjectModule";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      moduleOpen: false,
      lightBoxType: "",
      viewingClient: ""
    };
  }
  toggleModule = (client) => {
    this.setState({
      moduleOpen: !this.state.moduleOpen,
      viewingClient: client
    })
  };
  openModule = () => {
    return <ProjectModule toggleModule={()=>this.toggleModule()} viewingClient={this.state.viewingClient}></ProjectModule>;
  };

  render() {
    return (
      <section className="home">
        {this.state.moduleOpen ? this.openModule() : null}
        <HomeBanner></HomeBanner>
        <div className="quote">
          <h2>
            <br></br>" LIFE3's vision is to provide convenient and
            personalized,user-driven <br></br> experiences empowered through
            ideas, creativity and creations " <br></br>
          </h2>
        </div>

        <div className="aboutUs">
          <div className="displayAbout">
            <h1> ABOUT US </h1>
            <div className="aboutContent">
              <p>
                LIFE3 is committed to <strong>educating</strong> its community
                by demonstrating how product development and design is applied
                to building mobile and web applications. LIFE3{" "}
                <strong>enables</strong> startups to build and create product
                releases while <strong>empowering</strong> early-to-mid career
                professionals with the opportunity to work on real business
                problems.
              </p>
            </div>
          </div>

          <div className="aboutImage">
            <img src={AboutUsImage}></img>
          </div>
        </div>
        <div>
          <div className="homeBanner2" id="homeBanner2">
            <h1>HOW CAN WE HELP YOU?</h1>
            <div className="col">
              <div className="explore">
                {/* <h1>EDUCATE</h1>
          <p>business-driven mobile and web app development and design</p> */}
                {/* <a class="navClickArea" href="Pages/community.html"><button>explore</button></a> */}
                <h2>Conduct a marketing analysis</h2>
                <p>Build a smarter strategy for growing your business</p>
                <br />
                <br />
                <h2>
                  Engage with developers, designers, product managers, &amp;
                  other technical leads
                </h2>
                <p>Connect with members of the LIFE3 community</p>
              </div>
              <div className="explore">
                {/* <h1>ENABLE</h1>
          <p>underrepresented groups to participate in technology-focused careers and ventures</p> */}
                {/* <a class="navClickArea" href="#eventsAnchor"><button>explore</button></a> */}
                <h2>Define a growth strategy</h2>
                <p>
                  Find the next vectors of growth &amp; the plan to get there
                </p>
                <br />
                <br />
                <h2>Design product to customer value and cost</h2>
                <p>
                  Design product that maximize customer value while balancing
                  development &amp; manufacturing costs
                </p>
              </div>
              <div className="explore">
                {/* <h1>EMPOWER</h1>
          <p>early-stage business concepts to be created into shippable products</p> */}
                {/* <a class="navClickArea" href="Pages/professional.html"><button>explore</button></a> */}
                <h2>Conduct User Research</h2>
                <p>
                  Deeply understand the mindsets and behaviors of my comsumers
                </p>
                <br />
                <br />
                <h2>Participate in design thinking workshop</h2>
                <p>
                  Frame and solve problems based on empathetic observation of
                  customers
                </p>
                <br />
                <a href="#contactUs">
                  <button>CONTACT US</button>
                </a>
              </div>
            </div>
          </div>
          <section className="partners">
            <div className="sectionContent">
              <div className="partnersInfoContainer">
                <h1>
                  <a>Our Approach</a>
                </h1>
                <div className="approach">
                  <div className="phase" style={{ borderBottomLeftRadius: 40 }}>
                    <h2>phase 1</h2>
                    <p>
                      Mock-up &amp; <br />
                      Product Roadmap
                    </p>
                  </div>
                  <div className="phase">
                    <h2>phase 2</h2>
                    <p>Software Design &amp; Development</p>
                  </div>
                  <div
                    className="phase"
                    style={{ borderBottomRightRadius: 40 }}
                  >
                    <h2>phase 3</h2>
                    <p>Artificial Intelligence &amp; Analytics</p>
                  </div>
                </div>
              </div>
              <div className="partnersInfoContainer">
                <div className="partnersText">
                  <h1>
                    <a
                      href="https://www.linkedin.com/feed/hashtag/businessprojects"
                      target="_blank"
                    >
                      Business Projects
                    </a>
                  </h1>
                  <p>
                    {" "}
                    LIFE3 employs design thinking frameworks to strategize
                    around unique user needs, conduct market validation, get
                    from idea conception to visual prototype, and drive
                    customer-centric development
                  </p>
                </div>
                <div className="partnerLogosContainer">
                  {Object.keys(ProjectData.clients).map((key) => {
                    return (
                      <div
                        onClick={() => this.toggleModule(key)}
                        className="partnerLogo"
                        key={key}
                      >
                        <img
                          src={require("../Assets/Images/Icons/" +
                            ProjectData.clients[key].icon)}
                          alt={key + "Logo"}
                          title={key}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div class="partnersInfoContainer">
          <div class="partnersText">
              <h1><a href="https://www.linkedin.com/feed/hashtag/higheredpartners/"
                      target="_blank">Higher Education Partners</a></h1>
              <p>LIFE3 provides mobile and web application development and design experience and training
                  through real business project needs of technology startups within the New York City tech
                  ecosystem </p>
          </div>
          <div class="partnerLogosContainer">
              <a class="partnerLogo" href="../Pages/professional.html#cunyTech&"><img
                      src="Assets/Images/Icons/cunytechworks.png" alt="CUNY Techworks Logo" title="CUNY Techworks"> </a><a
                  href="../Pages/professional.html#pratt&" class="partnerLogo"><img
                      src="Assets/Images/Icons/pratt.png" alt="Pratt Logo" title="Pratt"></a>
          </div> */}
            </div>
          </section>
        </div>
      </section>
    );
  }
}
