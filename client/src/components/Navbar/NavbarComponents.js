import React from "react";

export function BurgerMenu() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  );
}

export function Admin() {
  return (
    <li className="nav-item active">
      <a className="nav-link" href="/admin">
        Admin
      </a>
    </li>
  );
}
export function Dropdown2(props) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Mon Compte
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/profile">
          Mes informations personnelles
        </a>
        <a className="dropdown-item" href="/history/id">
          Historique de mes commandes
        </a>
        <div className="dropdown-divider" />
        <button className="dropdown-item" onClick={props.onClick}>
          Déconnexion
        </button>
      </div>
    </li>
  );
}

export function Links1() {
  return (
    <li className="nav-item active">
      <a className="nav-link" href="/">
        Accueil
      </a>
    </li>
  );
}

export function Links2() {
  return (
    <li className="nav-item">
      <a className="nav-link" href="/register">
        Inscription
      </a>
    </li>
  );
}

export function Links3() {
  return (
    <li className="nav-item">
      <a className="nav-link" href="/login">
        Connexion
      </a>
    </li>
  );
}

export function Links4() {
  return (
    <li className="nav-item">
      <a className="nav-link" href="/Category">
        Catégories
      </a>
    </li>
  );
}

export function SearchBar(props) {
  return (
    <nav className="navbar bg-navbar d-none d-lg-block">
      <form method="post" className="col-lg-12 mb-4 d-none d-lg-block">
        <div className="input-group">
          <select className="form-control col-lg-1">
            <option>Catégorie 1</option>
            <option>Catégorie 2</option>
            <option>Catégorie 3</option>
            <option>Catégorie 4</option>
            <option>Catégorie 5</option>
            <option>Catégorie 6</option>
            <option>Catégorie 7</option>
            <option>Catégorie 8</option>
          </select>
          <input type="text" className="form-control" placeholder="Rechercher un article..." />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              Rechercher
            </button>
          </span>
        </div>
      </form>
    </nav>
  );
}
