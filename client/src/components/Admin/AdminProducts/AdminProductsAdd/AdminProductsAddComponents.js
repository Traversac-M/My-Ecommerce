import React from "react";

export function Input1() {
  return (
    <div className="form-group mt-4">
      <label className="font-weight-bold">Product name</label>
      <input type="text" className="form-control mt-3 mb-3" placeholder="Insert product name here..." />
    </div>
  );
}

export function Input2() {
  return (
    <div className="form-group">
      <label className="font-weight-bold">Category</label>
        <input type="text" className="form-control" placeholder="Insert Category here..." />
        
      <label className="font-weight-bold">Subcategory</label>
        <input type="text" className="form-control"   placeholder="Insert subcategory here..." />
    </div>
  );
}


export function Input3() {
  return (
    <div className="form-group">
      <label className="font-weight-bold">Description</label>
      <textarea className="form-control mt-2" placeholder="Insert description here..." />
    </div>
  );
}

export function Input4() {
  return (
    <div className="form-group col-lg-6">
      <input type="file" />
    </div>
  );
}


export function Input5() {
  return (
    <div className="form-group col-lg-6">
      <label className="font-weight-bold">Price</label>    
      <input type="number" className="form-control" placeholder="Eur" />
    </div>
  );
}


export function Submit() {
  return (
    <button type="submit" className="btn btn-primary btn-block mb-5	 mt-4	">
      Create product
    </button>
  );
}
