import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { ProductShow } from "./ProductPageComponents";

import "./ProductPageStyle.css";

export default class ProductsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductShow/>
        <Footer />
      </div>
    );
  }
}
