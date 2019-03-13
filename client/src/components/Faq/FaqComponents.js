import React from "react";

import HowTo from "../Images/howTo.jpg";
import BuildComputer from "../Images/computerBuilding.jpg";
import ShoppingIssue from "../Images/shoppingImg.jpg";
import CodePromo from "../Images/codePromo.jpg";

export function Header() {
  return (
    <section className="faqHeader">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="faqTitle pt-5 pb-3">
              C'est ta premiere fois sur E-Corp et tu aimerais effectuer un achat ?<br />
              Regarde les explications ci-dessous avant de commencer !
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Tabs1() {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        role="tab"
        data-toggle="tab"
        href="#tabs2-18_tab0"
        aria-selected="true"
      >
        Quels produits acheter ?
      </a>
    </li>
  );
}

export function Tabs2() {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        role="tab"
        data-toggle="tab"
        href="#tabs2-18_tab0"
        aria-selected="true"
      >
        Concevoir un PC de toutes pièces
      </a>
    </li>
  );
}

export function Tabs3() {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        role="tab"
        data-toggle="tab"
        href="#tabs2-18_tab0"
        aria-selected="true"
      >
        Problème lors d'une commande
      </a>
    </li>
  );
}

export function Tabs4() {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        role="tab"
        data-toggle="tab"
        href="#tabs2-18_tab0"
        aria-selected="true"
      >
        Codes promos
      </a>
    </li>
  );
}

export function Block1() {
  return (
    <div id="tab1" className="tab-pane in active">
      <div className="row">
        <div className="col-lg-12 pb-3">
          <div className="card-img">
            <img class="img-fluid" src={HowTo} alt="" />
          </div>
        </div>
        <div className="col-lg-12">
          <p className="faqText">
            Vous ne savez pas quels produits achetés par rapport à votre configuration ?
          </p>
          <h3>Rien de plus simple !</h3>
          <p>
            Indiquez nous la référence de votre <strong>carte mére</strong> et les articles{" "}
            <strong>compatibles</strong> à votre machine vous serons alors présentés sur les pages
            d'achats par catégories. Ensuite il ne vous restera plus qu'a acheté les produits voulus
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function Block2() {
  return (
    <div id="tab2" className="tab-pane">
      <div className="row">
        <div className="col-lg-12 pb-3">
          <div className="card-img">
            <img class="img-fluid" src={BuildComputer} alt="" />
          </div>
        </div>
        <div className="col-lg-12">
          <p className="faq_text">
            Vous ne savez pas comment proceder pour assembler vous même un PC ?
          </p>
          <p>
            Ne vous inquietez pas, lors de la récéption de vos articles un{" "}
            <strong>conseillé en ligne</strong> sera à votre entière disposition pour vous aider a
            monter votre machine de A à Z !
          </p>
        </div>
      </div>
    </div>
  );
}

export function Block3() {
  return (
    <div id="tab3" className="tab-pane">
      <div className="row">
        <div className="col-lg-12 pb-3">
          <div className="card-img">
            <img class="img-fluid" src={ShoppingIssue} alt="" />
          </div>
        </div>
        <div className="col-lg-12">
          <p className="faqText">Vous avez reçu le mauvais article lors de la récéption ?</p>
          <p className="faqText"> L'article acheté ne vous convient plus ?</p>
          <p>
            Contactez nous sur le <a href="/nous-contacter">lien suivant </a>
            et faites nous part de vos réclamations. Nous vous répondrons dans un{" "}
            <strong>délais de 48h</strong> suivant récéption.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Block4() {
  return (
    <div id="tab4" className="tab-pane">
      <div className="row">
        <div className="col-lg-12 pb-3">
          <div className="card-img">
            <img className="img-fluid" src={CodePromo} alt="" />
          </div>
        </div>
        <div className="col-lg-12">
          <p className="faqText">Codes promos, comment s'en procurer ?</p>
          <p>
            Tout les <strong>1000€</strong> d'achat vous obtiendrez un{" "}
            <strong>code promo d'une valeur de 100€</strong> a utiliser dans les{" "}
            <strong>3 mois</strong> qui suivent son obtention.
          </p>
          <p>
            Il est également possible{" "}
            <strong>
              {" "}
              d'obtenir des codes promos lors d'evenements exclusifs qui seront expliqués sur nos
              reseaux sociaux
            </strong>{" "}
            aux liens suivants :
          </p>
          <div className="d-inline d-flex justify-content-center faqIconSize">
            <a title="Suivez nous sur Facebook" href="http://facebook.com">
              <span className="fa fa-facebook pr-4" />
            </a>
            <a title="Suivez nous sur Twitter" href="http://twitter.com">
              <span className="fa fa-twitter pr-3" />
            </a>
            <a title="Suivez nous sur Instagram" href="http://instagram.com">
              <span className="fa fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
