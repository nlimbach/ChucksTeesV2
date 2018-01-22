import React from "react";
import "./AboutCard.css";

const AboutCard = () =>

<div className="card center z-depth-5" style={{margin: '25px', width:'40%'}} id="aboutCard">
    <h4 className="center-align black-text card-title">About</h4>
    <div className="card-content black-text">
        <p className="black-text">Have a design in mind? We can put any design you want on the front and back of a selection of shirts.
            We are also happy to make a design for you. Login or sign up to get started. </p>
        <div className="card-action">
            <div className="fixed-action-btn horizontal click-to-toggle">
                <a className="btn-floating black btn-small">
                    <i className="material-icons">menu</i>
                </a>
                <ul>
                    <li><a className="btn-floating">
                        <i className="fa fa-facebook"></i> Sign in with facebook</a></li>
                    <li><a className="btn-floating">
                        <i className="fa fa-instagram"></i> Sign in with instagram</a></li>
                    <li><a className="btn-floating">
                        <i className="fa fa-tumblr"></i> Sign in with tumblr</a></li>
                    <li><a className="btn-floating">
                        <i className="fa fa-google"></i> Sign in with google</a></li>
                </ul>
            </div>
        </div>
    </div>

</div>;

export default AboutCard;