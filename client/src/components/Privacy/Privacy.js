import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Header, Art1, Art2, Art3, Art4, Art5, Art6, Art7 } from "./PrivacyComponents";

import "./PrivacyStyle.css";

export default class Privacy extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8 mt-5">
              <Art1 />
              <Art2 />
              <Art3 />
              <Art4 />
              <Art5 />
              <Art6 />
              <Art7 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
