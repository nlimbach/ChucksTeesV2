import React, { Component } from "react";
import Home from "./UserPages/Home";
import LoginPage from "./UserPages/LoginPage";
import SignUpPage from "./UserPages/SignUpPage";
import PlaceOrderPage from "./UserPages/PlaceOrderPage";
import ProfilePage from './UserPages/ProfilePage';
import config from '../app.config';
import Navpills from './components/Shared/Nav/Navpills';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div className="PortfolioContainer">
              <Navpills />
              <main>
                <Route path="/" exact component={Home} />
                <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
                <Route path="/implicit/callback" component={ImplicitCallback} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/placeorder" component={PlaceOrderPage}/>
                <SecureRoute path="/profile" component={ProfilePage} />
              </main>
            </div>
        );
    }
}