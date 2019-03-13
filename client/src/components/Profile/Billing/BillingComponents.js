import React from "react";

export function Top() {
  return (
    <ul className="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="pill" href="#nav-tab-card">
          <span className="fa fa-credit-card" /> Credit Card
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#nav-tab-paypal">
          <span className="fa fa-paypal" /> Paypal
        </a>
      </li>
    </ul>
  );
}

export function Back() {
  return (
    <div className="tab-pane fade text-center" id="nav-tab-paypal">
      <p className="mt-5">Paypal est un moyen facile d'effectuer vos achats sur internet.</p>
      <p>
        Si vous disposez d'un compte Paypal, veuillez vous connecter en cliquant sur le lien
        ci-dessous.
      </p>
      <p>
        <a href="http://Paypal.com" type="button" className="btn btn-primary">
          <span className="fa fa-paypal" /> Se connecter via Paypal
        </a>
      </p>
    </div>
  );
}

export function Form(props) {
  return (
    <div className="tab-pane fade show active" id="nav-tab-card">
      <form className="billingForm">
        <div className="form-group">
          <label htmlFor="username">Nom/Prénom (Indiqué sur la carte)</label>
          <input type="text" className="form-control" name="username" placeholder required />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Numero de la carte</label>
          <div className="input-group">
            <input type="text" className="form-control" name="cardNumber" placeholder />
            <div className="input-group-append">
              <span className="input-group-text text-muted">
                <span className="fa fa-cc-visa" />
                <span className="fa fa-cc-amex pl-1" />
                <span className="fa fa-cc-mastercard pl-1" />
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <div className="form-group">
              <label>
                <span className="hidden-xs">Expiration</span>
              </label>
              <div className="input-group">
                <input type="number" className="form-control" placeholder="MM" name />
                <input type="number" className="form-control" placeholder="YY" name />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label
                data-toggle="tooltip"
                title
                data-original-title="3 digits code on back side of the card"
              >
                CVV <span className="fa fa-question-circle" />
              </label>
              <input type="number" className="form-control" required />
            </div>
          </div>
        </div>

        <button className="subscribe btn btn-primary btn-block" type="button">
          Ajouter cette carte
        </button>
      </form>
    </div>
  );
}
