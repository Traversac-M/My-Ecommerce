import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Map, Form } from "./ContactComponents";

import "./ContactStyle.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <div className="row contactBorder contactEffect mb-5">
            <div className="col-md-12 col-lg-6">
              <h2 className="text-uppercase mt-5 mb-4 text-center font-weight-bold">
                Contactez-nous
              </h2>
              <Form />
            </div>
            <Map />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
