import React, { Component } from "react";
import Home from "././components/UserPages/Home";
import LoginPage from "././components/UserPages/LoginPage";
import SignUpPage from "././components/UserPages/SignUpPage";
import PlaceOrderPage from "././components/UserPages/PlaceOrderPage";
import ProfilePage from '././components/UserPages/ProfilePage';
import config from './app.config';
import Navpills from '././components/components/Shared/Nav/Navpills.js';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Navpills />
                <main>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
                    <Route path="/implicit/callback" component={ImplicitCallback} />
                    <Route path="/signup" render={() => <SignUpPage baseUrl={config.url} />} />
                    <SecureRoute path="/placeorder" component= {PlaceOrderPage} />
                    <SecureRoute path="/profile" component= {ProfilePage} />
                </main>
            </div>
        );
    }
}