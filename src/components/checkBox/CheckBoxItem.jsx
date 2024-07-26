import React, { useState } from "react";
import "./CheckBoxStyles.css";

export const CheckBoxItem = ({
  title = "All Pages",
  onCheck,
  checked = false,
}) => {
  //handle checkbox click
  const onClick = () => {
    typeof onCheck == "function" && onCheck(!checked);
  };
  return (
    <div className="checkbox-container-item" onClick={onClick}>
      <h5>{title}</h5>
      <div className="checkbox">
        <input type="checkbox" checked={checked} readOnly />
        <span class="checkmark"></span>
      </div>
    </div>
  );
};
