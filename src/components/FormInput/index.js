import React, { useState, useEffect } from "react";
import "./FormInput.scss";

const FormInput = ({ children, id }) => {
  return <input id={id} className="formInput" />;
};

export default FormInput;
