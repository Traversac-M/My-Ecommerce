import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Slider, News, Sales, All } from "./HomepageComponents";

import "./HomepageStyle.css";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="offset-lg-1" />
            <div className="col-sm-12 col-md-12 col-lg-10 mt-4">
              <Slider />
            </div>
            <News />
            <Sales />
            <All />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
