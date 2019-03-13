import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Header, Form } from "./ForgotPassComponents";

import "./ForgotPassStyle.css";

export default class ForgotPass extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="forgotPassSection">
          <div className="container">
            <div className="row justify-content-center">
              <form className="mt-5 mb-5 forgotPassFormSignin mg-btm col-lg-8">
                <Header />
                
                <div className="forgotPassSeparator" />

                <Form />
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
