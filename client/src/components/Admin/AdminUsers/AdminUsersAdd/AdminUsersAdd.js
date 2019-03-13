import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { SubmitInput } from "./SubmitInput";

export default class AdminUsers extends Component {
  state = {
    email: "",
    password: "",
    token: localStorage.getItem("userToken")
  };

  componentDidMount() {
    if (this.state.token) {
      var decoded = jwt_decode(this.state.token);

      if (decoded.roles[0] !== "ROLE_ADMIN") {
        this.props.history.push("/");
      }
    } else {
      this.props.history.push("/");
    }
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  userSubmit = event => {
    event.preventDefault();

    if (this.state.email !== "") {
      axios
        .post(`http://localhost:8000/register`, {
          _email: this.state.email,
          _password: this.state.password
        })
        .then(res => {
          this.props.history.push("/admin");
        });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center mt-3">Create a new user</h1>
        <form onSubmit={this.userSubmit} className="offset-lg-3 col-lg-6 card mt-3 mb-5">
          <div className="container">
            <div className="row-fluid">
              <EmailInput value={this.state.email} onChange={this.onEmailChange} />
              <PasswordInput value={this.state.password} onChange={this.onPasswordChange} />
              <SubmitInput />
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}
