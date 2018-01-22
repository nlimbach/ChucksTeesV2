import React from "react";
import '../components/components/Nav/Nav.css';

const Navpills = props =>
    <nav className="nav-center">
        <a href="/" className="left" id="navLogo">Chuck's Tees</a>
        <div className="nav-wrapper container">
            <ul className="navUl center">
                <li
                  onClick={() => props.handlePageChange("Home")}
                  className={props.currentPage === "Home" ? "active" : ""}
                >
                  <a>Home</a>
                </li>
                <li
                  onClick={() => props.handlePageChange("login")}
                  className={props.currentPage === "login" ? "active" : ""}
                >
                  <a>login</a>
                </li>
                <li
                  onClick={() => props.handlePageChange("signup")}
                  className={props.currentPage === "signup" ? "active" : ""}
                >
                  <a>signup</a>
                </li>
                <li
                  onClick={() => props.handlePageChange("placeorder")}
                  className={props.currentPage === "placeorder" ? "active" : ""}
                >
                  <a>placeorder</a>
                </li>
            </ul>
        </div>
    </nav>;


export default Navpills;
