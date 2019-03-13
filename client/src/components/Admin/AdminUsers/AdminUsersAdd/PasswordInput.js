import React from "react";

export function PasswordInput(props) {
  return (
    <div className="form-group">
      <label className="font-weight-bold">Password</label>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Insert password here..."
        onChange={props.onChange}
      />
    </div>
  );
}
