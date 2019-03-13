import React, { Component } from "react";
import {NavLink, withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

import jwt_decode from "jwt-decode";

import {
  BurgerMenu,
  Links1,
  Admin,
  Links2,
  Links3,
  Dropdown2,
  Links4,
} from "./NavbarComponents";

import "./NavbarStyle.css";

import "../../font-awesome/css/font-awesome.css";

const Cart = ({cart }) =>
  <NavLink className="btn btn-primary btn-sm ml-3" to="/cart" >
    <span className="fa fa-shopping-cart" /> Panier ({cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)})
  </NavLink>

class Navbar extends Component {
  state = {
    token: localStorage.getItem('userToken')
  };

  logoutFunction = event => {
    localStorage.removeItem("userToken");
    window.location.reload();
  };

  render() {
    var showElement;
    var showRegister;
    var showAdmin;

    if (this.state.token) {
      showElement = <Dropdown2 onClick={this.logoutFunction} />;

      var decoded = jwt_decode(this.state.token);

      if (decoded.roles[0] === "ROLE_ADMIN") {
        showAdmin = <Admin />;
      }
    } else {
      showRegister = <Links2 />;
      showElement = <Links3 />;
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
          <a className="navbar-brand" href="/">
            E-Corp
          </a>
          <BurgerMenu />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Links1 />
              {showAdmin}
              <Links4 />
            </ul>

            <ul className="navbar-nav">
              {showRegister}
              {showElement}
              <Cart {...this.props}/>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}
export default withRouter(connect(mapStateToProps)(Navbar));
