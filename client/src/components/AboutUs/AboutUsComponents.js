import React from "react";

import RaulImg from "../Images/raulImg.jpg";
import EmericImg from "../Images/emericImg.png";
import MichelImg from "../Images/michelImg.jpg";
import CarrolImg from "../Images/carrolImg.png";

export function BlockText() {
  return (
    <div>
      <h3>Lorem ipsum dolor sit amet </h3>
      <p className="about-paddingB">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget
        venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit
        amet dolor. Proin pretium purus a lorem ornare
      </p>
      <p>
        sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla
        eros mauris, convallis et sem tempus, viverra hendrerit sapien
      </p>
    </div>
  );
}

export function SectionImg1() {
  return (
    <div className="card p-3 col-12 col-md-6 col-lg-3">
      <div className="aboutUsCardImg ">
        <img className="aboutUsImgIcon" src={RaulImg} alt="" />
      </div>
      <div className="card-box text-center">
        <h4 className="card-title">Raul Delianu</h4>
        <h5 className="user-desc">Chef de projet</h5>
        <p className="aboutUsText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="aboutUsIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa fa-facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa fa-twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-instagram fa" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-linkedin fa" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SectionImg2() {
  return (
    <div className="card p-3 col-12 col-md-6 col-lg-3">
      <div className="aboutUsCardImg ">
        <img className="aboutUsImgIcon" src={EmericImg} alt="" />
      </div>
      <div className="card-box text-center">
        <h4 className="card-title">Emeric Bous</h4>
        <h5 className="user-desc">Developpeur Back-end</h5>
        <p className="aboutUsText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="aboutUsIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-facebook fa" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-twitter fa" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-instagram fa" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-linkedin fa" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SectionImg3() {
  return (
    <div className="card p-3 col-12 col-md-6 col-lg-3">
      <div className="aboutUsCardImg ">
        <img className="aboutUsImgIcon" src={MichelImg} alt="" />
      </div>
      <div className="card-box text-center">
        <h4 className="card-title">Michel Traversac</h4>
        <h5 className="user-desc">Developpeur Front-end</h5>
        <p className="aboutUsText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="aboutUsIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-facebook fa" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-twitter fa" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-instagram fa" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-linkedin fa" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SectionImg4() {
  return (
    <div className="card p-3 col-12 col-md-6 col-lg-3">
      <div className="aboutUsCardImg ">
        <img className="aboutUsImgIcon" src={CarrolImg} alt="" />
      </div>
      <div className="card-box text-center">
        <h4 className="card-title">Carrol Ternus</h4>
        <h5 className="user-desc">Developpeuse Front-end</h5>
        <p className="aboutUsText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="aboutUsIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-facebook fa" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-twitter fa" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-instagram fa" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="px-1 fa-linkedin fa" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="aboutUsIcons text-center">
      <ul>
        <li>
          <a href="http://facebook.com">
            <span className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="http://twitter.com">
            <span className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="http://instagram.com">
            <span className="fa fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}
