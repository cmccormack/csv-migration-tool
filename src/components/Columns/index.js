import React, { useState, useEffect } from "react";
import "./Columns.scss";

const Columns = ({ children }) => {
  return <div className="columns">{children}</div>;
};

export default Columns;
