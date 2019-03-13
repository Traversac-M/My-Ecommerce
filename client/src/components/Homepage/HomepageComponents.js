import React from "react";

import Slide1 from "../Images/slide1.jpg";
import Slide2 from "../Images/slide2.jpg";
import Slide3 from "../Images/slide3.jpg";

export function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src={Slide1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src={Slide2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src={Slide3} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export function News() {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="product-grid8">
        <div className="product-image8">
          <div className="folded background">
            <h2 className="background">Nouveautés</h2>
          </div>
          <a href="/category/new">
            <img
              alt=""
              src="https://media.materiel.net/r250/cms/2018-10/PC.png"
            />
          </a>
        </div>
        <div className="product-content">
          <a className="all-deals mb-5" href="/">
            Nouveautés <i className="fa fa-angle-right icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Sales() {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="product-grid8">
        <div className="product-image8">
          <div className="folded background">
            <h2 className="background">Promotions</h2>
          </div>
          <a href="/category/sale">
            <img
              alt=""
              src="https://media.materiel.net/r250/cms/2018-10/composants.png"
            />
          </a>
        </div>
        <div className="product-content">
          <a className="all-deals mb-5" href="/">
            Promotions <i className="fa fa-angle-right icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function All() {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="product-grid8">
        <div className="product-image8">
          <div className="folded background">
            <h2 className="background">Toutes les catégories</h2>
          </div>
          <a href="/category">
            <img
              alt=""
              src="https://media.materiel.net/r250/cms/2018-10/peripheriques.png"
            />
          </a>
        </div>
        <div className="product-content">
          <a className="all-deals mb-5" href="/category">
             Toutes les catégories<i className="fa fa-angle-right icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
