import React from "react";

export function ShowUser() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <a className="btn btn-info mt-5 mb-5 mr-3" href="/admin/users">Users</a>
        <a className="btn btn-info mt-5 mb-5 mr-3" href="/admin/categories">Categories</a>
        <a className="btn btn-info mt-5 mb-5 mr-3" href="/admin/products">Products</a>
      </div>
    </div>
  );
}