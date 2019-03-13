import React, { Component } from "react";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import "./UserInfoStyle.css";

import { Submit } from "./UserInfoComponents";

export default class UserInfo extends Component {
  state = {
    token: localStorage.getItem('userToken'),
    users: []
  }


  componentDidMount() {
    if(!this.state.token) {
      this.props.history.push('/');
    }
    
    axios
      .get(`http://127.0.0.1:8000/users/me`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      })
      .then(res => {
        console.log(res.data);
        const users = res.data;
        this.setState({ users });      
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="userInfoSection">
          <div className="container pt-5 pb-5">
            <div className="row main-row justify-content-center">
              <form method="post" className="userInfoFormSignin mg-btm col-sm-8">
                <h3 className="text-center font-weight-bold mt-3 mb-3">Mes informations</h3>
                <
                div className="userInfoMain">
                  <div className="form-row align-items-center">
                    <div className="col-lg-12 mb-3">
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder={this.state.users.email}
                        />
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <span className="fa fa-envelope" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                      <select className="form-control">
                        <option>{this.state.users.roles}</option>
                      </select>
                    </div>

                    <div className="col-lg-12 mb-3">
                      <label className="sr-only" htmlFor="inlineFormInputGroup">
                        Mot de passe
                      </label>
                      <div className="input-group mb-2">
                        <input
                          type="password"
                          className="form-control"
                          id="password-field1"
                          placeholder={this.state.users.password}
                        />
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <span toggle="#password-field1" className="fa fa-eye toggle-password" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Submit />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
