import React, { useState, useEffect } from "react";
import cx from "classnames";
import "./InputRows.scss";

const InputRows = ({ children, name }) => {
  return <div className={cx("rows", `column-${name}`)}>{children}</div>;
};

export default InputRows;
