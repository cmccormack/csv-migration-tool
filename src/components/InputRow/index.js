import React, { useState, useEffect } from "react";
import "./InputRow.scss";
import FormInput from "../FormInput";

const InputRow = ({ children, id }) => {
  return (
    <div className="row">
      <FormInput id={id} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default InputRow;
