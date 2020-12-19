import React, { useState, useEffect } from "react";
import Axios from "axios";



export default function SigninForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("false");
  const [errorMsg, setErrorMsg] = useState("");


  const signin = () => (
    Axios.post("http://localhost:3001/signin", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.auth) {
        alert(response)
        alert(response.data.message)
        setLoginStatus(true);
        console.log(response);
        setLoginStatus(response.data[0].Email);
      } else {
        setErrorMsg(response.data.message);
        alert(response);
        // alert(response.data[0].Email)
        alert(response.data.message);
        setLoginStatus(false);
        console.log(response);
      }
    })
  );

  useEffect(() => {
    Axios.get("http://localhost:3001/signin").then((response) =>{
    console.log(response);
    if(response.data.loggedIn === true) {
      console.log(response.data.user[0].Email);
      localStorage.setItem("token",response.data.token); //"Bearer "+
      setLoginStatus(response.data.user[0].Email);
    }
    })
  }, []);

  const userAuthentication = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },

      }).then((response) =>{
        console.log(response);
      });
  };

    return (
        <div id="signin" className="container">
        <form className="modal-content">
        <h1>Life3 Member Sign in</h1>
       
        <label htmlFor="useremail"><b>User email</b></label>
        <input type="text" placeholder="Enter user email" name="Uemail" required
          onChange={(e) => {setEmail(e.target.value);}}/>
    
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="Upass" required
          onChange={(e) => {setPassword(e.target.value);}}/>
        <p>Don't have a account? <a href="signup.php">Sign up</a> first!</p>

        <div className="clearfix">
            <button type="button"  className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn" onClick={(event)=>{ event.preventDefault(); signin();}}><b>Sign in</b></button>
        </div>
        
        <input type="checkbox" name="remember"/><span> Remember Me</span>
        <a href="recover.php" className="floatright"><u>Forget Password?</u></a>
        
        <p>status: {errorMsg}</p>
        </form>


    </div>
    );
  
}
