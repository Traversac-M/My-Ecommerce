import React from "react";

import BillingImg from "../Images/billingImg.png";

export function Links1() {
  return (
    <div className="col-xs-12 col-sm-4 col-md col-6 col footerUlAlign">
      <h5 className="footerTextColor pt-4">Links Here</h5>

      <ul className="footerUlStyle" />
    </div>
  );
}

export function Links2() {
  return (
    <div className="col-xs-12 col-sm-4 col-md col-6 col footerUlAlign">
      <ul className="footerUlStyle">
        <li>
          <img className="mt-4 img-fluid footerImgSize" src={BillingImg} alt="" />
        </li>
      </ul>
    </div>
  );
}

export function BottomLinks() {
  return (
    <div className="container">
      <ul className="footerUlBottom footerUlAlign">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/aboutus">A propos de nous</a>
        </li>
        <li>
          <a href="/cgu">CGU</a>
        </li>
        <li>
          <a href="/privacy">Politique de confidentialité</a>
        </li>
        <li>
          <a href="/contact">Nous contacter</a>
        </li>
      </ul>
      <p className="text-center">© 2019-2020 E-Corp</p>
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="col-xs-12 col-sm-12 col-md col-12 col">
      <h4 className="footerTextColor pt-4 ">Suivez nous</h4>
      <ul className="footerUl2Style">
        <li>
          <span className="fa fa-facebook float-left pr-3" />
          <p>
            Pour suivre notre actualité quotidienne <br />
            <a href="http://www.facebook.com">Suivez nous sur Facebook</a>
          </p>
        </li>
        <li>
          <span className="fa fa-twitter float-left pr-2" />
          <p>
            Pour consulter nos derniers posts <br />
            <a href="http://www.twitter.com">Suivez nous sur Twitter</a>
          </p>
        </li>
        <li>
          <span className="fa fa-instagram float-left pr-2" />
          <p>
            Pour voir les prochains produits mis en ligne <br />
            <a href="http://www.instagram.com">Suivez nous sur Instagram</a>
          </p>
        </li>
      </ul>
    </div>
  );
}
