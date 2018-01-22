import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Placeorder from "./pages/placeorder";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "login") {
      return <Login />;
    } else if (this.state.currentPage === "signup") {
      return <Signup />;
    } else if (this.state.currentPage === "placeorder"){
      return <Placeorder />;
    }
  };

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
