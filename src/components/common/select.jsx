import React from "react";

const Select = ({
  name,
  label,
  value,
  options,
  optionValueProperty,
  optionNameProperty,
  error,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        {...rest}
        name={name}
        id={name}
        value={value}
        className={error ? "form-control is-invalid" : "form-control"}
      >
        <option />
        {options.map(option => (
          <option
            key={option[optionValueProperty]}
            value={option[optionValueProperty]}
          >
            {option[optionNameProperty]}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

Select.defaultProps = {
  optionValueProperty: "value",
  optionNameProperty: "name"
};

export default Select;
