import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Product } from "./ProductsComponents";

import "./ProductsStyle.css";

export default class Products extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Product />
        </div>
        <Footer />
      </div>
    );
  }
}
