import React from "react";
import "../../App.css";

const CustomInput = ({ label, value, placeholder, onChange }) => {
  return (
    <div className="label-input-container">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default CustomInput;
