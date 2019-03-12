import React, { useState, useEffect } from "react";
import cx from "classnames";
import "./Title.scss";

const Title = ({ align = "", children, size }) => (
  <div className={cx("title", "text-shadow", `size-${size}`, align)}>
    {children}
  </div>
);

export default Title;
