import React, { useState, useEffect, useContext } from "react";
import cx from "classnames";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./InputRows.scss";

const InputRows = ({ children, name }) => {
  const context = useContext(ThemeContext);
  console.log(name, context);
  return (
    <div
      className={"rows"}
      style={{ backgroundColor: `${context[name + "Theme"]}` }}
    >
      {children}
    </div>
  );
};

export default InputRows;
