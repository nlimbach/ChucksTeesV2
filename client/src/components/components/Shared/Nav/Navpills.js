import React from "react";
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import './Navpills.css';

export default withAuth(class Navpills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }
    render() {
        if (this.state.authenticated === null) return null;
        const authNav = this.state.authenticated ?
            <ul className="auth-nav">
                <li><a href="javascript:void(0)" onClick={this.props.auth.logout}>Logout</a></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul> :
            <ul className="auth-nav">
                <li><a href="javascript:void(0)" onClick={this.props.auth.login}>Login</a></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>;
        return (
            <nav>
                <ul>
                    <li className="btn red brandLogo"><Link to="/">Chucks Tees</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/placeorder">Shop</Link></li>
                    {authNav}
                </ul>
            </nav>
        )
    }
});