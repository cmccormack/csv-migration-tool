import React from "react";

const AppView = props => {
  const { files, handleFile, title } = props;
  return (
    <>
      <h1 id="title">{title}</h1>
      <div className="columns">
        {files.map((file, i) => (
          <div className="column shadow" key={file.name}>
            <input
              accept="text/csv"
              id={`column-${file.name}`}
              onChange={handleFile.bind(null, i)}
              type="file"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AppView;
