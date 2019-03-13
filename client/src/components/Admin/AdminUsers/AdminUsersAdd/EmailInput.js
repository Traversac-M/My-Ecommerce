import React from "react";

export function EmailInput(props) {
  return (
    <div className="form-group mt-4">
      <label className="font-weight-bold">Email</label>
      <input
        type="text"
        className="form-control mt-3 mb-3"
        placeholder="example@email.com"
        onChange={props.onChange}
      />
    </div>
  );
}
