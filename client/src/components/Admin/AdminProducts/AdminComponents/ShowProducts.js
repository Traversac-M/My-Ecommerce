import React from "react";

export function ShowProducts() {
  return (
    <div className="container">
      <div className="row-fluid">
        <a className="btn btn-info mb-3 mt-3" href="/admin/product/add">Create a new product</a>
        <a className="btn btn-info mb-3 mt-3 pull-right" href="/admin/">Back</a>

        <table className="table">
          <caption className="text-center">List of products</caption>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Subcategory</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/admin/product/edit" className="btn btn-success mr-1">Edit</a> <button className="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>

            </tr>
            <tr>
              <th scope="row">3</th>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}