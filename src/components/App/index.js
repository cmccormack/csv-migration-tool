import React from "react";
import "./App.scss";

const App = props => {
  const handleFile = e => {
    const file = e.target.files.item(0);

    csv()
      .fromFile(file)
      .then(json => {
        console.log(json);
      });
    // const reader = new FileReader(file);
    // reader.onload = () => {
    //   console.log(reader.result);
    // };
    // reader.readAsText(file);
  };

  return (
    <div>
      <h1 id="title">CSV Migration Tool</h1>;
      <input type="file" accept="text/csv" onChange={handleFile} />
      <input type="file" accept="text/csv" onChange={handleFile} />
    </div>
  );
};

export default App;
