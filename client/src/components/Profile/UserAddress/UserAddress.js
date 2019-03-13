import React, { Component } from "react";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import { Form, Countries, Submit } from "./UserAddressComponents";

export default class UserAddress extends Component {
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

        <div className="row">
          <div className="card offset-lg-3 col-lg-7 col-md-12 col-xs-12 mt-5 mb-5">
            <form className="form-horizontal" method="post">
              <fieldset>
                <Form />
                <Countries />
                <Submit />
              </fieldset>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
