import React from "react";
import Papa from "papaparse";
import AppView from "./App-view";
import "./App.scss";

const App = props => {
  const handleFile = e => {
    const file = e.target.files.item(0);

    Papa.parse(file, {
      delimiter: ",",
      header: "true",
      skipEmptyLines: "greedy",
      complete: (results, file) => {
        console.log(results);
      }
    });
  };

  return <AppView handleFile={handleFile} title={"CSV Migration Tool"} />;
};

export default App;
