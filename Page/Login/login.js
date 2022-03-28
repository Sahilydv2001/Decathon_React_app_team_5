import "../Login/login.css";
// import useToken from '../../Uploadxl/upxl/Usetoken';

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Navigate } from "react-router-dom";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { render } from "@testing-library/react";
// creating the handle function and initializing the use state

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      loggedIn: false,
    };
  }
  /* The handleChange() function to set a new state for input */

  handlChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    localStorage.setItem(name, JSON.stringify(value));
  };
  handlSubmit = (e) => {
    // The handleChange() function will always automatically set the state to the current value of the input

    const { loggedIn } = this.state;
    e.preventDefault();
    this.state = { loggedIn: true };

    if ({ loggedIn } === true) {
      return <Navigate to="/login/upload" />;
    }
    // handle Submit prevents the default HTML form behavior of browsing to a new page
  };
  render() {
    return (
      <div className="loginwindow">
        <div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="email...."
              autoComplete="off"
              required
              onChange={this.handlChange}
            />
            <input
              type="password"
              name="pwd"
              placeholder="pwd...."
              autoComplete="off"
              required
              onChange={this.handlChange}
              // handleChange() function is responsible for updating  React state.
            />
            {/* <button onSubmit={this.handlSubmit()}>Login</button> */}
            <li>
              <Link from="/login" to="/login/upload">
                <button>go to login page</button>
              </Link>
            </li>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
