import React from "react";

export function Input1() {
  return (
    <div className="form-group mt-4">
      <label className="font-weight-bold">Category name</label>
      <input type="text" className="form-control mt-3 mb-3" placeholder="Edit category here..." />
    </div>
  );
}

export function Input2() {
  return (
    <div className="form-group">
      <label className="font-weight-bold">Subcategory</label>
      <input type="text" className="form-control mt-2" placeholder="Edit subcategory here..." />
    </div>
  );
}

export function Submit() {
  return (
    <button type="submit" className="btn btn-primary btn-block mb-5	mt-4	">
      Edit
    </button>
  );
}
