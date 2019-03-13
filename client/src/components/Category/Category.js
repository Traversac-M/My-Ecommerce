import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Cat1, Cat2, Cat3, Cat4, Cat5, Cat6,
  Cat7, Cat8, Cat9, Cat10, Cat11, Cat12,
  Cat13, Cat14, Cat15 } from "./CategoryComponents";

export default class Category extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="h3">Toutes les catégories</h3>
          <div className="row">
            <Cat1/>
            <Cat2/>
            <Cat3/>
            <Cat4/>
            <Cat5/>
            <Cat6/>
            <Cat7/>
            <Cat8/>
            <Cat9/>
            <Cat10/>
            <Cat11/>
            <Cat12/>
            <Cat13/>
            <Cat14/>
            <Cat15/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
