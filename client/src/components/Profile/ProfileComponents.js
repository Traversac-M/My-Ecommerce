import React from "react";

export function Block1() {
  return (
    <div className="col-md-6 col-lg-3 row-item">
      <a href="/edit-user/id">
        <div className="profileWrapper">
          <div className="card-img pb-3" />
          <h5 className="card-title">Mon profil utilisateur</h5>
        </div>
      </a>
    </div>
  );
}

export function Block2() {
  return (
    <div className="col-md-6 col-lg-3 row-item">
      <a href="/edit-address/id">
        <div className="profileWrapper">
          <div className="card-img pb-3" />
          <h5 className="card-title">Mon adresse de livraison</h5>
        </div>
      </a>
    </div>
  );
}

export function Block3() {
  return (
    <div className="col-md-6 col-lg-3 row-item">
      <a href="/billing">
        <div className="profileWrapper">
          <div className="card-img pb-3" />
          <h5 className="card-title">Mes informations bancaires</h5>
        </div>
      </a>
    </div>
  );
}
