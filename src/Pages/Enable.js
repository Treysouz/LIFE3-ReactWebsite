import React, { Component } from "react";
import Race from "../Assets/Images/GroupImages/race.png";
import Gender from "../Assets/Images/GroupImages/gender.png";

export default class Enable extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getPage("/enable");
  }
  render() {
    return (
      <section className="enable">
       <div>
  <div className="diverseContentInfo">
    <h1>WE ARE DIVERSE</h1>
    <div className="aboutDiverseContent">
      <p>At LIFE3, we rely on our employees and partner's diverse backgrounds and perspectives to spark innovation. We make diversity a priority, and creating opportunities for next generation.</p>
    </div>
    <div className="diverseImageContainer">
      <div className="diverseImageOne" style={{width: '60%'}}>
        <img src={require("../Assets/Images/race.png")} alt="race image" />
      </div>
      <div className="diverseImageTwo" style={{width: '40%'}}>
        <img src={require("../Assets/Images/gender.png")} alt="gender image" /> 
      </div>
    </div>
  </div>
  <div className="testimonials">
    <h1>TESTIMONIALS</h1>
    <div className="testimonialsHead">
      <img src={require("../Assets/Images/Team/sabeen.png")} alt="Image of John Doe" />
      <div className="testimonialsName">
        <h2>JOHN DOE</h2>
        <h3>INTERN, BRUSHWICK GENERATOR</h3>
      </div>
    </div>
    <div className="testimonialsContentInfo">
      <p>"Lorem ipsum dolor sit amet, dicta dissentient sea ut. Eam no nulla tibique,pro cu populo sapientem voluptaria. Postea repudiandae pro ei, ea congue meliore per. Nam et tale cetero commune, eu vix  alterum habemus adversarium. Vel duis fuisset voluptua an, tantas sanctus mel ne, omnis verear hendrerit ne eos. Magna repudiare."</p>
    </div>
  </div>
</div>

      </section>
    );
  }
}
