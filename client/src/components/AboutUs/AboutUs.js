import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import {
  BlockText,
  SectionImg1,
  SectionImg2,
  SectionImg3,
  SectionImg4,
  SocialLinks
} from "./AboutUsComponents";

import EcorpSiege from "../Images/ecorpSiege.png";

import "./AboutUsStyle.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 mb-5 pb-5 pt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="aboutUsTitle">
                <h1>
                  About <span>E-Corp</span>
                </h1>
                <BlockText />
                <SocialLinks />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img className="img-fluid" src={EcorpSiege} alt="" />
            </div>
          </div>
        </div>

        <section className="aboutUsSection">
          <div className="container">
            <h2 className="aboutUsTitle pb-3 text-center">L'Equipe en charge du projet</h2>
            <h3 className="aboutUsSubtitle pb-4 text-center">
              Voici notre équipe sans qui, le projet n'aurait pas pu voir le jour
            </h3>
            <div className="aboutUsRow">
              <SectionImg1 />
              <SectionImg2 />
              <SectionImg3 />
              <SectionImg4 />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
