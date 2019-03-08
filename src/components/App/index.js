import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import AppView from "./App-view";
import "./App.scss";

const App = props => {
  const [files, setFiles] = useState([
    { name: "file1", title: "Current Template", csv: "", json: "" },
    { name: "file2", title: "New Template", csv: "", json: "" },
  ]);

  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleFile = (i, { target }) => {
    const file = target.files.item(0);

    Papa.parse(file, {
      delimiter: ",",
      header: "true",
      skipEmptyLines: "greedy",
      complete: (results, file) => {
        console.log(i);
        setFiles([
          i === 0 ? Object.assign(files[0], { csv: results }) : { ...files[0] },
          i === 1 ? Object.assign(files[1], { csv: results }) : { ...files[1] },
        ]);
      },
    });
  };

  return (
    <AppView
      files={files}
      handleFile={handleFile}
      title={"CSV Migration Tool"}
    />
  );
};

export default App;
