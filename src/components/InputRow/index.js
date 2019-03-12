import React, { useState, useEffect } from "react";
import "./InputRow.scss";
import FormInput from "../FormInput";

const InputRow = ({ children, id }) => {
  return (
    <div className="row">
      <label htmlFor={id}>{children}</label>
      <FormInput id={id} />
    </div>
  );
};

export default InputRow;
