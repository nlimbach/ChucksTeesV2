import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import axios from "axios";
import config from '../../../../app.config.js';

import "./SignUpCard.css";

export default withAuth(class SignUpCard extends React.Component {
    constructor(props){
        super(props);
        // NOTE: 
        // I remove these values below 
        // They will be set once you start typing (onChange)
        this.state = { sessionToken: null };
        this.oktaAuth = new OktaAuth({ url: config.url });
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }
    async checkAuthentication() {
        const sessionToken = await this.props.auth.getIdToken();
        if (sessionToken) {
            this.setState({ sessionToken });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    // NOTE: 
    // This is an easy way of getting any input values and
    // store it to the state
    // Using arrow functions, no need to bind it
    handleChange = ({target: {value, name}}) => {
        this.setState({[name]: value});
    }



    handleSubmit = (e) => {
        e.preventDefault();
        // NOTE: 
        // I use axios instead of featch, but fetch would still works as well
        axios({
            url:"/api/users",
            method:"POST",
            data: this.state
        })
        .then((user) => {
            console.log("Do receive something back");
            this.oktaAuth.signIn({
                username: this.state.username,
                password: this.state.password
            });

            this.setState({
                sessionToken: user.sessionToken
            })
        })
        .catch((err) => {
            console.log(err.response.data)
        });
        
    }
    render() {
        if (this.state.sessionToken) {
            this.props.auth.redirect({sessionToken: this.state.sessionToken});
            return null;
        }

        return (
            <div className="card center-align z-depth-4" style={{margin: '25px'}} id="signUpCard">
                <h4 className="center-align black-text card-title">Sign Up</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" id="firstName">
                        <input className="form-control validate" id="fName-input" name="firstName" type="text"
                               placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required/>
                    </div>

                    <div className="form-group" id="lastName">
                        <input className="form-control validate" id="lName-input" name="lastName" type="text"
                               placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required/>
                    </div>

                    <div className="form-group" id="number">
                        <input className="form-control validate" id="number-input" name="number" type="number"
                               placeholder="Phone Number" value={this.state.number} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group" id="email">
                        <input className="form-control validate" id="email-input" name="email" type="email"
                               placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                    </div>

                    <div className="form-group" id="username">
                        <input type="text" className="form-control" id="usernameinput" name="username"
                               placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
                    </div>

                    <div className="form-group" id="password">
                        <input type="password" className="form-control" id="passwordinput" name="password"
                               placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>

                    <input type="submit" id="submit" value="Signup"/>
                </form>
            </div>
        );
    }
});