import React, { Component } from "react";
import jwt_decode from 'jwt-decode';

import axios from 'axios';

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class ConfirmUser extends Component {
  state = {
    token: this.props.match.params.id,
    checkToken: localStorage.getItem('userToken')
  }

  componentDidMount() {
    if(this.state.checkToken) {
      var decoded = jwt_decode(this.state.checkToken);

      if(decoded.roles[0] === "ROLE_USER") {
          this.props.history.push('/');
        }
    }
  }

  tokenSubmit = event => {
    event.preventDefault();
      axios
        .post(`http://localhost:8000/validation`, {
          token: this.state.token
        })
        .then(res => {
          this.props.history.push('/login');
        });
  };

  render() {
    return (
      <div>
        <Navbar />
          <div className="container">
            <div className="row card text-center mt-5 mb-5">
              <h1 className="card-body mt-5 font-weight-bold">
               Confirmation de votre Email
              </h1>            
              <p className="card-body mt-1 mb-5">
                Votre inscription est bientôt completée. Cliquez sur le lien ci-dessous pour acceder à votre compte.
              </p>
               <form onSubmit={this.tokenSubmit}>
                <button type="submit" className="btn btn-success btn-lg mb-5">Valider mon compte</button>
              </form>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
