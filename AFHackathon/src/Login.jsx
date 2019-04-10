import React, { Component } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import loginimage from './loginimg.png';

export default class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            rememberMe: false
        };
    }


    render(){
        return(
            <div className="root-container">
                <div className="row">
                    <div className="col-sm-3">

                    </div>

                    <div className="col-sm-6" align="center">

                        <div className="row">
                            <h2><b>Login</b></h2>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <img src={loginimage} alt="loginimage" />
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <br /><br />
                         <div className="row" >
                             <div className="col-sm-2"></div>
                             <div className="col-sm-8">
                                 <label htmlFor="uname" style={{}}><b>Username </b></label>
                                 <input type="text" placeholder="Enter Username" name="uname" required />
                             </div>
                             <div className="col-sm-2"></div>
                         </div>
                            <br /><br />
                         <div className="row" >
                             <div className="col-sm-2"></div>
                             <div className="col-sm-8">
                                 <label htmlFor="psw"><b>Password   </b></label>
                                 <input type="password" placeholder="Enter Password" name="psw" required/><br />
                             </div>
                             <div className="col-sm-2"></div>
                         </div>
                            <br/><br/>
                         <div >
                             <button type="submit" style={{width:'100px'}}>Sign in</button>
                         </div>
                        <br />

                        <br/><br/>
                        <div>
                            <FacebookLoginButton onClick={() => alert("Hello") } style={{width:'40px'}} style={{height:'50px'}} align="center" />
                        </div>

                        <div>
                            <GoogleLoginButton onClick={() => alert("Hello")}  style={{width:'40px'}} style={{height:'50px'}} align="center"/>
                        </div>

                    </div>

                    <div className="col-sm-3"></div>
                </div>
            </div>
        );
    }
    toggleRememberMe() {
        this.setState({
            rememberMe: !this.state.rememberMe
        });
    }

}