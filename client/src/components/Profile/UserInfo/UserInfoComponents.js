import React from "react";

export function Input1(props) {
  return (
    <div className="col-lg-12 mb-3">
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Pseudonyme"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span className="fa fa-user" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Input2(props) {
  return (
    <div className="col-lg-6 mb-3">
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Prénom"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span className="fa fa-user" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Input3(props) {
  return (
    <div className="col-lg-6 mb-3">
      <div className="input-group mb-2">
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nom" />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span className="fa fa-user" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Input4(props) {
  return (
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
  );
}

export function Input5(props) {
  return (
    <div className="col-lg-6 mb-3">
      <label className="sr-only" htmlFor="inlineFormInputGroup">
        Mot de passe
      </label>
      <div className="input-group mb-2">
        <input
          type="password"
          className="form-control"
          id="password-field1"
          placeholder="Mot de passe"
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

export function Input6(props) {
  return (
    <div className="col-lg-6 mb-3">
      <label className="sr-only" htmlFor="inlineFormInputGroup">
        Confirmer le mot de passe
      </label>
      <div className="input-group mb-2">
        <input
          type="password"
          className="form-control"
          id="password-field2"
          placeholder="Confirmer le mot de passe"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span toggle="#password-field2" className="fa fa-eye toggle-password2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Submit() {
  return (
    <div className="col-lg-12 text-center">
      <button type="submit" className="btn btn-lg btn-primary mt-3 mb-2">
        Confirmer
      </button>
    </div>
  );
}
