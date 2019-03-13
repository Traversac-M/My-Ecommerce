import React from "react";

export function FacebookInput() {
  return (
    <div className="row mg-btm">
      <div className="offset-md-3 col-md-6">
        <a href="http://facebook.com" className="btn btn-primary btn-block mb-3">
          <span className="fa fa-facebook float-left" />
          S'inscrire avec Facebook
        </a>
      </div>
    </div>
  );
}

export function GoogleInput() {
  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <a href="http://google.com" className="btn btn-danger btn-block">
          <span className="fa fa-google float-left" />
          S'inscrire avec Google
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
          placeholder="email@example.com"
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
    <div className="col-lg-6 mb-3">
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

export function PasswordRepeatInput(props) {
  return (
    <div className="col-lg-6 mb-3">
      <div className="input-group mb-2">
        <input
          type="password"
          className="form-control"
          id="password-field2"
          placeholder="Confirmer le mot de passe"
          onChange={props.onChange}
        />

        <div className="input-group-prepend">
          <div className="input-group-text">
            <span toggle="#password-field2" className="fa fa-eye toggle-password" />
          </div>
        </div>
      </div>
    </div>
  );
}
