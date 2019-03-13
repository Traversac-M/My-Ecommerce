import React from "react";

import LogoImg from "../Images/E-Corp.png";

export function FormHeader() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img className="loginImgSize mt-4 mb-3" src={LogoImg} alt="E-Corp" />
      </div>

      <p className="pr-5 text-right mt-3">
        Pas encore membre E-Corp ? <a href="/inscription">Inscrivez-vous</a>
      </p>
    </div>
  );
}

export function FacebookInput() {
  return (
    <div className="row mg-btm">
      <div className="col-md-12">
        <a href="http://www.facebook.com" className="btn btn-primary btn-block facebookIcon mb-3">
          <span className="fa fa-facebook float-left" />
          Se connecter avec Facebook
        </a>
      </div>
    </div>
  );
}

export function GoogleInput() {
  return (
    <div className="row">
      <div className="col-md-12">
        <a href="http://www.google.com" className="btn btn-danger btn-block">
          <span className="fa fa-google float-left" />
          Se connecter avec Google
        </a>
      </div>
    </div>
  );
}

export function EmailInput(props) {
  return (
    <div className="col-lg-12 mb-3">
      <div className="input-group mb-2">
        <input
          type="email"
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Email@example.com"
          onChange={props.onChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span className="fa fa-envelope" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PasswordInput(props) {
  return (
    <div className="col-lg-12 mb-3">
      <div className="input-group mb-2">
        <input
          type="password"
          className="form-control"
          id="password-field1"
          placeholder="Mot de passe"
          onChange={props.onChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span toggle="#password-field1" className="fa fa-eye toggle-password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubmitInput() {
  return (
    <div className="row">
      <div className="col-xs-6 col-md-12">
        <div className="text-right mb-3">
          <a href="/password-recovery">J'ai oublié mon mot de passe</a>
        </div>
      </div>
      <div className="col-lg-12 text-center">
        <button type="submit" className="btn btn-success btn-lg mb-4">
          Se connecter
        </button>
      </div>
    </div>
  );
}
