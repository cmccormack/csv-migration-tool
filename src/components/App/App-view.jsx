import React from "react";

const AppView = props => {
  const { files, handleFile, title } = props;
  return (
    <>
      <h1 id="title" className="text-shadow">
        {title}
      </h1>
      {props.children}
    </>
  );
};

export default AppView;
