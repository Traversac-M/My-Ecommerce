import React, { Component } from "react";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  FacebookInput,
  GoogleInput,
  EmailInput,
  PasswordInput,
  PasswordRepeatInput
} from "./RegisterComponents";
import LogoImg from "../Images/E-Corp.png";

import "./RegisterStyle.css";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    token: localStorage.getItem("userToken")
  };

  componentDidMount() {
    if (this.state.token) {
      this.props.history.push("/");
    }
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onPasswordRepeatChange = event => {
    this.setState({ passwordRepeat: event.target.value });
  };

  isPasswordValid() {
    return this.state.password === this.state.passwordRepeat;
  }

  userSubmit = event => {
    event.preventDefault();

    if (this.state.password === this.state.passwordRepeat) {
      if (this.state.email !== "") {
        axios
          .post(`http://localhost:8000/register`, {
            _email: this.state.email,
            _password: this.state.password
          })
          .then(res => {
            this.props.history.push("/login");
          });
      }
    }
  };
  render() {
    const errorPanel = !this.isPasswordValid() ? (
      <div className="col-lg-12 registerErrorText mb-3 alert alert-danger">
        Les mots de passe doivent être identiques !
      </div>
    ) : null;

    return (
      <div>
        <Navbar />

        <section className="registerSection">
          <div className="container pt-5 pb-5">
            <div className="row main-row justify-content-center">
              <form onSubmit={this.userSubmit} className="registerFormSignin mg-btm col-sm-8">
                <div className="d-flex justify-content-center mt-3">
                  <img className="registerImgSize" src={LogoImg} alt="E-Corp" />
                </div>

                <div className="registerSocialBox">
                  <FacebookInput />
                  <GoogleInput />
                </div>

                <div className="registerSeparator" />

                <div className="registerMain">
                  <div className="form-row align-items-center">
                    <EmailInput value={this.state.email} onChange={this.onEmailChange} />
                    {errorPanel}
                    <PasswordInput value={this.state.password} onChange={this.onPasswordChange} />
                    <PasswordRepeatInput
                      value={this.state.passwordRepeat}
                      onChange={this.onPasswordRepeatChange}
                    />

                    <div className="col-lg-12 text-center">
                      <button type="submit" className="btn btn-lg btn-success mb-2">
                        Inscription
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
