import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className={error ? "form-control is-invalid" : "form-control"}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
