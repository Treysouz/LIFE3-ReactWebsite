import React, { Component } from "react";



export default class SigninForm extends Component {
  render() {
    return (
        <div id="signin" className="container">
        <form className="modal-content" method="post">
        
        {/* <?php login_validation();
                display_message(); ?> */}
        <h1>Life3 Member Sign in</h1>
       
        <label htmlFor="useremail"><b>User email</b></label>
        <input type="text" placeholder="Enter user email" name="Uemail" required/>
    
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="Upass" required/>
        <p>Don't have a account? <a href="signup.php">Sign up</a> first!</p>

        <div className="clearfix">
            <button type="button"  className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn"><b>Sign in</b></button>
        </div>
        
        <input type="checkbox" name="remember"/><span> Remember Me</span>
        <a href="recover.php" className="floatright"><u>Forget Password?</u></a>
        
        </form>
    </div>
    );
  }
}
