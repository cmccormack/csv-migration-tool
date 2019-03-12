import React, { useState, useEffect } from "react";
import cx from "classnames";
import "./Column.scss";

const Column = ({ children, name }) => {
  return <div className={cx("column", "shadow")}>{children}</div>;
};

export default Column;
