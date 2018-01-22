import React from 'react';
import "./SignUpCard.css";

const SignupCard = () =>

            <div className="card center-align z-depth-4" style={{margin: '25px'}} id="signUpCard">
                <h4 className="center-align black-text card-title">Sign Up</h4>
                    <form action="/" method="post">
                        <div className="form-group" id="firstName">
                            <input className="form-control validate" id="fName-input" name="user_first_name" type="text" placeholder="First Name" required/>
                        </div>

                        <div className="form-group" id="lastName">
                            <input className="form-control validate" id="lName-input" name="user_last_name" type="text" placeholder="Last Name" required/>
                        </div>

                        <div className="form-group" id="number">
                            <input className="form-control validate" id="number-input" name="user_number" type="number" placeholder="Phone Number"/>
                        </div>

                        <div className="form-group" id="email">
                            <input className="form-control validate" id="email-input" name="user_email" type="email" placeholder="Email" required/>
                        </div>

                        <div className="form-group" id="username">
                            <input type="text" className="form-control" id="usernameinput" name="username" placeholder="Username" onChange={this.getValues} required/>
                        </div>

                        <div className="form-group" id="password">
                            <input type="password" className="form-control" id="passwordinput" name="password" placeholder="Password" onChange={this.getValues} required/>
                        </div>

                        <button type="submit" className="btn waves-effect waves-light red" id="signupSubmit" onClick={this.sendData}>Signup</button>

                    </form>
            </div>;

export default SignupCard;