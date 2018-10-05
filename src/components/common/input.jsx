import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  const renderLabel = label ? <label htmlFor={name}>{label}</label> : "";
  return (
    <div className="form-group">
      {renderLabel}
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
