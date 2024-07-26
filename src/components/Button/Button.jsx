import "./button.css";
import React from "react";

export const Button = ({ onClick, title = "Done" }) => {
  return (
    <div className="button" onClick={onClick}>
      <p className="button-title">{title}</p>
    </div>
  );
};
