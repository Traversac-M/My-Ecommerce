  import React, { Component } from "react";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  FormHeader,
  FacebookInput,
  GoogleInput,
  EmailInput,
  PasswordInput,
  SubmitInput
} from "./LoginComponents";

import "./LoginStyle.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    token: localStorage.getItem("userToken")
  };

  componentDidMount() {
    if(this.state.token) {
      this.props.history.push('/');
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

    axios
      .post(`http://localhost:8000/login`, {
        username: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <section className="loginSection">
          <div className="container pt-5 pb-5">
            <form
              className="loginFormSignin mg-btm offset-lg-3 offset-md-3 col-md-7 col-lg-6"
              onSubmit={this.userSubmit}
            >
              <FormHeader />

              <div className="loginSocialBox">
                <FacebookInput />
                <GoogleInput />
              </div>

              <div className="loginSeparator" />

              <div className="loginMain">
                <EmailInput value={this.state.email} onChange={this.onEmailChange} />
                <PasswordInput value={this.state.password} onChange={this.onPasswordChange} />

                <div className="login-footer">
                  <SubmitInput />
                </div>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
