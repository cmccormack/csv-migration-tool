import React from "react";

const AppView = props => {
  const { title, handleFile } = props;
  return (
    <div>
      <h1 id="title">{title}</h1>;
      <input type="file" accept="text/csv" onChange={handleFile} />
      <input type="file" accept="text/csv" onChange={handleFile} />
    </div>
  );
};

export default AppView;
