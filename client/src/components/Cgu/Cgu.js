import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import {
  Header,
  Art1,
  Art2,
  Art3,
  Art4,
  Art5,
  Art6,
  Art7,
  Art8,
  Art9,
  Art10,
  Art11,
  Art12
} from "./CguComponents";

import "./CguStyle.css";

export default class Cgu extends Component {
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
              <Art8 />
              <Art9 />
              <Art10 />
              <Art11 />
              <Art12 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
