import React from "react";
import "./Button.css";

function Button({ title, color }) {
  return (
    <button className={`button-customizado ${color ? color : ""}`}>
      {title}
    </button>
  );
}

export default Button;
