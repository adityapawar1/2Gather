import React from 'react';
import axios from 'axios';
import './signup.css';
// eslint-disable-next-line
import Tags from "../../components/Tags/Tags";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validity: "",
            passwordStatus: "",
            usernameStatus: "",
            emailStatus: "",
            phoneStatus: "",
        }
    }
    
    SubmitSignupHandler = async (e) => {
        e.preventDefault()
        let data = new FormData();

        data.append('username', document.getElementById("username").value);
        data.append('password', document.getElementById("password").value);
        data.append('email', document.getElementById("email").value);
        data.append('phone', document.getElementById("phone").value);

        console.log(data)

        let response = await axios({
            method: 'post',
            url: "http://127.0.0.1:8000/accounts/signup",
            data: data,
            headers: {'Content-Type': 'multipart/form-data' }
        })
        console.log(document.getElementById("gender").checked)
        console.log(response)
        if (response.data.hasOwnProperty('valid')) {
            if (!response.data.valid) {
                this.setState({
                    passwordStatus: "",
                    usernameStatus: "",
                    emailStatus: "",
                    phoneStatus: "",
                    validity: "The form was invalid"
                })
            } else {
                this.setState({
                    passwordStatus: "",
                    usernameStatus: "",
                    emailStatus: "",
                    phoneStatus: "",
                    validity: "Redirecting..."
                    
                }) 
                this.props.setUser(response.data.id)
            }
        } else if (response.data.hasOwnProperty('error')) {
            this.setState({
                validity: "",
            })
            if (response.data.error.hasOwnProperty('password')) {
                this.setState({
                    passwordStatus: response.data.error.password[0]
                })
            } else {
                this.setState({
                    passwordStatus: ""
                }) 
            }
            if (response.data.error.hasOwnProperty('username')) {
                this.setState({
                    usernameStatus: response.data.error.username[0]
                })
            } else {
                this.setState({
                    usernameStatus: ""
                }) 
            }
            if (response.data.error.hasOwnProperty('email')) {
                this.setState({
                    emailStatus: response.data.error.email[0]
                })
            } else {
                this.setState({
                    emailStatus: ""
                }) 
            }
            if (response.data.error.hasOwnProperty('phone')) {
                this.setState({
                    phoneStatus: response.data.error.phone[0]
                })
            } else {
                this.setState({
                    phoneStatus: ""
                }) 
            }
           
            
        }
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="signup">
                    
                    <div className="spaceTopSignup">
                        <label className="error">{this.state.validity}</label>
                        <label htmlFor="username" class="labelSignup">Username</label>
                        <br></br><br></br><br></br>
                        <input type="text" name="username" id="username" class="loginInput"/>
                        <br></br>
                        <label className="error">{this.state.usernameStatus}</label>
                    </div>
                    <div>
                        <label htmlFor="password" class="labelSignup">Password</label>
                        <br></br><br></br>
                        <input type="password" name="password" id="password" class="loginInput"/>
                        <br></br>
                        <label className="error">{this.state.passwordStatus}</label>
                    </div>
                    <div>
                        <label htmlFor="email" class="labelSignup">Email</label>
                        <br></br><br></br>
                        <input type="text" name="email" id="email" class="loginInput"/>
                        <br></br>
                        <label className="error">{this.state.emailStatus}</label>
                    </div>
                    <div>
                        <label htmlFor="phone" class="labelSignup">Phone Number</label>
                        <br></br><br></br>
                        <input type="tel" name="phone" id="phone" class="loginInput"/>
                        <br></br>
                        <label className="error">{this.state.phoneStatus}</label>
                    </div>
                    <div>
                        <label htmlFor="tags" class="labelSignup">My Interests</label>
                        <br></br>
                        <Tags></Tags>
                        <br></br>
                        <label className="error">{this.state.phoneStatus}</label>
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
                    <button className="submitButton" onClick={this.SubmitSignupHandler}>
                        Sign Up
                    </button>
                    {/* eslint-disable-next-line */}
                    {/* <a href="#" onClick={this.SubmitSignupHandler}>
                        <SubmitSignupLink to="/" class="submitButton">Submit</SubmitSignupLink>
                    </a> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Signup;