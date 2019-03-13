import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

export default class AdminUsers extends Component {
  state = {
    id: this.props.match.params.id,
    email: "",
    password: "",  
    token: localStorage.getItem("userToken")
  };

  componentDidMount() {
    if (this.state.token) {
      var decoded = jwt_decode(this.state.token);

      if (decoded.roles[0] !== "ROLE_ADMIN") {
        this.props.history.push("/");
      }
    } else {
      this.props.history.push("/");
    }
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

   userSubmit = event => {
    event.preventDefault();

    if (this.state.email !== "") {
      axios
        .put(`http://localhost:8000/users/` + this.state.id, {
          headers: {
            'Content-Type': 'application/json',          
            Authorization: `Bearer ${this.state.token}`
          },
            _email: this.state.email,
            _password: this.state.password
        })
        .then(res => {
          this.props.history.push("/admin");
        });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center mt-3">Edit user</h1>
        <h1 className="text-center mt-3">Edit user</h1>
        <form onSubmit={this.userSubmit} className="offset-lg-3 col-lg-6 card mt-3 mb-5">
          <div className="container">
            <div className="row-fluid">
              <div className="form-group mt-4">
                <label className="font-weight-bold">Email</label>
                <input
                  type="text"
                  className="form-control mt-3 mb-3"
                  placeholder="example@email.com"
                  onChange={this.onEmailChange}
                />
              </div>

              <div className="form-group">
                <label className="font-weight-bold">Password</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Insert password here..."
                  onChange={this.onPasswordChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-5  mt-4 ">
                Edit
              </button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}
