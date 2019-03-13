import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Cart from '../../features/cart'
import "./CartStyle.css";


export default function CartPage(props){
    return (
      <div>
        <Navbar />
        <div className="container">
            <Cart/>
        </div>
        <Footer />
      </div>
    );
  }
