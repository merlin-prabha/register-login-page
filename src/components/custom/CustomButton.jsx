import React from "react";

const CustomButton = ({ button, type, onClick }) => {
  return (
    <button className="login-button" type={type} onClick={onClick}>
      {button}
    </button>
  );
};

export default CustomButton;
