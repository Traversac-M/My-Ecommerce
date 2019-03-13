import React, { Component } from "react";
import axios from "axios";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

export default class AdminUsers extends Component {
  state = {
    users: [],
    token: localStorage.getItem("userToken")
  };

  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8000/users/`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      })
      .then(res => {
        const users = res.data;
        this.setState({ users });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row-fluid">
            <a className="btn btn-info mb-3 mt-3" href="/admin/user/add">
              Create a new user
            </a>
            <a className="btn btn-info mb-3 mt-3 pull-right" href="/admin/">
              Back
            </a>

            <table className="table">
              <caption className="text-center">List of users</caption>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Roles</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.roles[0]}</td>
                    <td>
                      <a href={`/admin/user/edit/${ user.id}`} className="btn btn-success mr-1">
                        Edit
                      </a>{" "}
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
