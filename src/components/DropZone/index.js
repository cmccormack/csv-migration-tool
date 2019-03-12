import React, { useState, useEffect } from "react";
import "./DropZone.scss";

const DropZone = ({ children }) => {
  return <div className="dropzone">{children}</div>;
};

export default DropZone;
