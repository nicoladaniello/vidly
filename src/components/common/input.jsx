import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className={error ? "form-control is-invalid" : "form-control"}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
