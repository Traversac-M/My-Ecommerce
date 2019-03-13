import React, { Component } from "react";
import jwt_decode from 'jwt-decode';

import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

import { Input1, Input2, Input3, Input4, Input5, Submit } from "./AdminProductsAddComponents";

export default class AdminProductsAdd extends Component {
  state = {
    token: localStorage.getItem('userToken')
  }

  componentDidMount() {
    if(this.state.token) {
      var decoded = jwt_decode(this.state.token);

      if(decoded.roles[0] !== "ROLE_ADMIN") {
          this.props.history.push('/');
        }
    } else {
        this.props.history.push('/');
      }
  }  
  render() {
    return (
      <div>
        <Navbar />
          <div className="container">
            <h1 className="text-center mt-3">Create a new products</h1>

            <form className="offset-lg-1 col-lg-11 card mt-3 mb-5">        
              <Input1 />
              <Input2 />
              <Input3 />
              <Input4 />
              <Input5 />
              <Submit />
            </form>
            
            <a className="offset-lg-5 col-lg-2 btn btn-info mb-5" href="/admin/products">Back</a>
            </div>
        <Footer />
      </div>
    );
  }
}
