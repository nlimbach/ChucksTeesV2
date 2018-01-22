import React, { Component } from "react";
import Navpills from "./components/Shared/Nav/Navpills";
import Home from "./UserPagesages/Home";
import LoginPage from "./UserPagesages/LoginPage";
import SignUpPage from "./UserPagespages/SignUpPage";
import PlaceOrderPage from "./UserPagespages/PlaceOrderPage";
import ProfilePage from './UserPagespages/ProfilePage';
import config from '../app.config';

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