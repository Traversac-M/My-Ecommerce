import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Block1, Block2, Block3 } from "./ProfileComponents";

import "./ProfileStyle.css";

export default class Profile extends Component {
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
        <section className="profileSection text-center pt-5 pb-5">
          <div className="container card pt-5 pb-5">
            <h2 className="mb-3">Votre profil</h2>
            <h4 className="pt-3">
              Cliquez sur les liens ci-dessous pour modifier vos informations personnelles
            </h4>
            <div className="row justify-content-center pt-4">
              <Block1 />
              <Block2 />
              <Block3 />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
