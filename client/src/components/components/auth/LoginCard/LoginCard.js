import React, { Component } from "react";
import "./LoginCard.css";
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

export default withAuth(class LoginCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionToken: null,
            error: null,
            username: '',
            password: ''
        }
        this.oktaAuth = new OktaAuth({url: props.baseUrl});

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.oktaAuth.signIn({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => this.setState({
                sessionToken: res.sessionToken
            }))
            .catch(err => {
                this.setState({error: err.message});
                console.log(err.statusCode + ' error', err)
            });
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        if (this.state.sessionToken) {
            this.props.auth.redirect({sessionToken: this.state.sessionToken});
            return null;
        }

        const errorMessage = this.state.error ?
            <span className="error-message">{this.state.error}</span> :
            null;


    return(
        <div className="card center-align z-depth-4" style={{margin: '25px'}} id="loginCard">
            <h4 className="center-align black-text card-title">Login</h4>
                <form onSubmit={this.handleSubmit}>
                    {errorMessage}
                    <div className="form-group" id="userName">
                        <input className="form-control validate" id="userName-input" name="username" type="text"
                            placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} required/>
                    </div>

                    <div className="form-group" id="password">
                        <input type="password" className="form-control validate" id="password-input" name="password"
                            placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required/>
                    </div>

                    <input type="submit" className="btn waves-effect waves-light red loginButton" id="submit" value="Login"/>
                </form>
        </div>

            );
        }
    });