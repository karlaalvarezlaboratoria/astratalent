import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Data from "./Data";

export default class LoginHR extends React.Component {
  state = {
    passwordInput: "",
    password: []
  };

  addPassword = event => {
    const value= event.target.value
    this.setState({
      passwordInput: event.target.value
    });
    localStorage.setItem("password", value);
  };

  componentDidMount() {
    let password = [];
    Data.data.map(element => {
      element.passwordHR.map(doc => {
        console.log(doc);
        password.push(doc);
      });
      this.setState({ password });
      localStorage.setItem("arrayRH", JSON.stringify(password) );
    });
  }

  render() {
    console.log(this.state.password);
    const { emailInput } = this.state;
    return (
      <div className="cointenerContact">
        <p>Log in Candidate</p>
        <input
          type="text"
          value={emailInput}
          placeholder="Please add your email"
          onChange={this.addPassword}
        ></input>
        <Link to="/rh">
          <button onClick={this.checkPassword}>Log in</button>
        </Link>
        <Footer />
      </div>
    );
  }
}
