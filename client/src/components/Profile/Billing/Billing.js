import React, { Component } from "react";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import { Top, Back, Form } from "./BillingComponents";

import "./BillingStyle.css";

export default class Billing extends Component {
  state = {
    token: localStorage.getItem('userToken')
  }
  
  ComponentDidMount() {
    if(!this.state.token) {
      this.props.history.push('/');
    }
  }  
  render() {
    return (
      <div>
        <Navbar />
        <article className="card offset-lg-4 col-lg-4 col-sm-12 mt-5 mb-5">
          <div className="card-body p-5">
            <Top />
            <div className="tab-content">
              <Form />
              <Back />
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}
