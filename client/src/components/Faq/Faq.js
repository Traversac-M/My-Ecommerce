import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import {
  Header,
  Tabs1,
  Tabs2,
  Tabs3,
  Tabs4,
  Block1,
  Block2,
  Block3,
  Block4
} from "./FaqComponents";

import "./FaqStyle.css";

export default class Faq extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div>
          <Header />
          <section className="tabs1 faqTabsSection" id="tabs2-18">
            <div className="container mt-5 mb-5">
              <div className="media-container-row">
                <div className="col-12 col-md-10">
                  <div className="row">
                    <div className="col-md-4">
                      <ul className="nav nav-tabs">
                        <Tabs1 />
                        <Tabs2 />
                        <Tabs3 />
                        <Tabs4 />
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <div className="tab-content">
                        <Block1 />
                        <Block2 />
                        <Block3 />
                        <Block4 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}
