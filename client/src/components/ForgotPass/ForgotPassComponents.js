import React from "react";
import LogoImg from "../Images/E-Corp.png";

export function Header() {
  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <img className="forgotPassImgSize mb-3 mt-5" src={LogoImg} alt="" />
      </div>

      <div className="text-center">
        <p className="mt-3">Tu as oublié ton mot de passe ?</p>
        <p className="mb-4">
          Indique nous ton adresse Email et nous t'enverrons un nouveau mot de passe !
        </p>
      </div>
    </div>
  );
}

export function Form(props) {
  return (
    <div className="forgotPassMain">
      <div className="form-row align-items-center">
        <div className="col-lg-12 mb-3">
          <div className="input-group mb-2">
            <input
              type="email"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="email@example.com"
            />
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="fa fa-envelope" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <button type="submit" className="btn btn-success btn-lg mb-3">
            Je récupere mon mot de passe
          </button>
        </div>
      </div>
    </div>
  );
}
