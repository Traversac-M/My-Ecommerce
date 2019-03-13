import React, { Component } from "react";
import jwt_decode from 'jwt-decode';

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import { ShowCategories } from "./AdminCategoriesComponents";

export default class AdminCategories extends Component {
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
          <ShowCategories />
        <Footer />
      </div>
    );
  }
}
