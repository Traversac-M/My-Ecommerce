import React, { Component } from "react";

import { Links1, Links2, SocialLinks, BottomLinks } from "./FooterComponents";
import "./FooterStyle.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container footerBottomBorder">
          <div className="row">
            <Links1 />
            <Links2 />
            <SocialLinks />
          </div>
        </div>
        <BottomLinks />
      </footer>
    );
  }
}
