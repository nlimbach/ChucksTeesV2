import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import config from '../../../../app.config.js';
import "./SignUpCard.css";

export default withAuth(class SignUpCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            user_number: '',
            sessionToken: null
        };
        this.oktaAuth = new OktaAuth({ url: config.url });
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
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

    handleFirstNameChange(e){
        this.setState({ firstName:e.target.value });
    }
    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleUserNameChange(e) {
        this.setState({ username: e.target.value });
    }

    handleNumberChange(e) {
        this.setState({ user_number: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(user => {
            this.oktaAuth.signIn({
                username: this.state.username,
                password: this.state.password
            })
                .then(res => this.setState({
                    sessionToken: res.sessionToken
                }));
        })
            .catch(err => console.log);
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
                               placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} required/>
                    </div>

                    <div className="form-group" id="lastName">
                        <input className="form-control validate" id="lName-input" name="lastName" type="text"
                               placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} required/>
                    </div>

                    <div className="form-group" id="number">
                        <input className="form-control validate" id="number-input" name="user_number" type="number"
                               placeholder="Phone Number" value={this.state.user_number} onChange={this.handleNumberChange}/>
                    </div>

                    <div className="form-group" id="email">
                        <input className="form-control validate" id="email-input" name="user_email" type="email"
                               placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required/>
                    </div>

                    <div className="form-group" id="username">
                        <input type="text" className="form-control" id="usernameinput" name="username"
                               placeholder="Username" value={this.state.username} onChange={this.handleUserNameChange} required/>
                    </div>

                    <div className="form-group" id="password">
                        <input type="password" className="form-control" id="passwordinput" name="password"
                               placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required/>
                    </div>

                    <input type="submit" id="submit" value="Signup"/>
                </form>
            </div>
        );
    }
});