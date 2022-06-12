import React from "react";
import axios from "axios";
import "./signup.css";
// eslint-disable-next-line
import Tags from "../../components/SignupTags/Tags";
import {SubmitSignupLink} from './SignupElement'
// git pls
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validity: "",
      passwordStatus: "",
      emailStatus: "",
    };
  }

  SubmitSignupHandler = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value,
    });

    console.log(data);

    let response = await axios({
      method: "post",
      url: "http://localhost:4000/api/user/signin",
      data: data,
      headers: { 'Content-Type': 'application/json' },
      data : data
    });
    console.log(response);
    if (response.data.hasOwnProperty("valid")) {
      if (!response.data.valid) {
        this.setState({
          passwordStatus: "",
          emailStatus: "",
          validity: "The form was invalid",
        });
      } else {
        this.setState({
          passwordStatus: "",
          emailStatus: "",
          validity: "Redirecting...",
        });
        this.props.setUser(response.data.id);
      }
    } else if (response.data.hasOwnProperty("error")) {
      this.setState({
        validity: "",
      });
      if (response.data.error.hasOwnProperty("password")) {
        this.setState({
          passwordStatus: response.data.error.password[0],
        });
      } else {
        this.setState({
          passwordStatus: "",
        });
      }
      }
      if (response.data.error.hasOwnProperty("email")) {
        this.setState({
          emailStatus: response.data.error.email[0],
        });
      } else {
        this.setState({
          emailStatus: "",
        });
      }
  };
  render() {
    return (
      <React.Fragment>
        <div className="signup">
          <div className="spaceTopSignup">
            <label className="error">{this.state.validity}</label>
            <label htmlFor="email" class="labelSignup">
              Username
            </label>
            <br></br>
            <br></br>
            <br></br>
            <input
              type="text"
              name="email"
              id="email"
              class="loginInput"
            />
            <br></br>
            <label className="error">{this.state.emailStatus}</label>
          </div>
          <div>
            <label htmlFor="password" class="labelSignup">
              Password
            </label>
            <br></br>
            <br></br>
            <input
              type="password"
              name="password"
              id="password"
              class="loginInput"
            />
            <br></br>
            <label className="error">{this.state.passwordStatus}</label>
          </div>
            <button className="submitButton" onClick={this.SubmitSignupHandler}>
                Log In
            </button>
          </div>
          {/* <div>
                        <label class="gender">Gender:&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;F</label>
                        <br></br>
                    <label class="switch">
                        <input type="checkbox" id="gender" />
                        <span class="slider round"></span>
                    </label>
                        <br></br>
                        <label className="error">{this.state.genderStatus}</label>
                    </div> */}
          <div class="container1">
            
            {/* eslint-disable-next-line */}
            {/* <a href="#" onClick={this.SubmitSignupHandler}>
                        <SubmitSignupLink to="/" class="submitButton">Submit</SubmitSignupLink>
                    </a> */}
        </div>
      </React.Fragment>
    );
  };
}


export default Login;
