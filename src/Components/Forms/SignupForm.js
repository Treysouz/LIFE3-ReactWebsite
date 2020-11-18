import React, { Component } from "react";


export default class SignupForm extends Component {
  render() {
    return (
      <div id="signup" className="container">
        <form method="post">
          {/* <?php user_validation();
                display_message(); ?> */}
          <h1>Life3 Member Sign Up</h1>
          
          <label htmlFor="firstname"><b>First Name</b></label>
          <input type="text" placeholder="Enter first name" name="FirstName" required/>
          <label htmlFor="lastname"><b>Last Name</b></label>
          <input type="text" placeholder="Enter last name" name="LastName" required/>

          <label htmlFor="username"><b>User Name</b></label>
          <input type="text" placeholder="Enter username" name="UserName" required/>

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter email" name="Email" required/>
      
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="Password" required/>
      
          <label htmlFor="confirm-password"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="CPassword" required/>
      
      
          <p>By creating an account you agree to our Terms & Privacy.</p>
      
          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn"><b>Sign Up</b></button>
          </div>
            
        </form>
    </div>  
    );
  }
}
