import React, { Component } from "react";
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

export default class register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return( <div className="root-container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6" align="center">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h2><b>Register Now!!!</b></h2>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6"  align="center">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <label htmlFor="usertype"><b>User Type   </b></label>
                            <select id = "userlist">
                                <option value = "1">Join With</option>
                                <option value = "2">Sightseer</option>
                            </select>
                            <br /><br />
                            <label htmlFor="fname" style={{}}><b>First name </b></label>
                            <input type="text" placeholder="Enter First name" name="fname" required />
                            <br /><br />
                            <label htmlFor="lname" style={{}}><b>First name </b></label>
                            <input type="text" placeholder="Enter Last name" name="lname" required />
                            <br /><br />
                            <label htmlFor="email" style={{}}><b>Email </b></label>
                            <input type="email" placeholder="Email Address" name="email" required />
                            <br /><br />
                            <label htmlFor="pasw" style={{}}><b>Password </b></label>
                            <input type="password" placeholder="Password" name="password" required />
                            <br /><br />
                            <label htmlFor="confirmpasw" style={{}}><b>Confirm Password </b></label>
                            <input type="password" placeholder="ConfirmPassword" name="confirmpassword" required />
                            <br /><br />
                            <div >
                                <button type="submit" style={{width:'100px'}}>Sign up</button>
                            </div>
                            <br /><br />
                            <div>
                                <FacebookLoginButton onClick={() => alert("Hello") } style={{width:'40px'}} style={{height:'50px'}} align="center" />
                            </div>

                            <div>
                                <GoogleLoginButton onClick={() => alert("Hello")}  style={{width:'40px'}} style={{height:'50px'}} align="center"/>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>

        </div>);

    }
}