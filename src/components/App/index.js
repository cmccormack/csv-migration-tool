import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.scss";
import Title from "../Title";
import Columns from "../Columns";
import Column from "../Column";
import InputRows from "../InputRows";
import InputRow from "../InputRow";

const App = props => {
  const [files, setFiles] = useState([
    { name: "current", title: "Current Template", csv: null, json: null },
    { name: "new", title: "New Template", csv: null, json: null },
  ]);

  useEffect(() => {
    console.log(files);
  }, [files]);

  const parseFile = (file, cb) => {
    Papa.parse(file, {
      delimiter: ",",
      header: "true",
      skipEmptyLines: "greedy",
      complete: results => {
        cb(null, results);
      },
      error: err => {
        cb(err, null);
      },
    });
  };

  const handleFile = (i, { target }) => {
    const file = target.files.item(0);
    console.log(file);
    if (!file) {
      return;
    }

    parseFile(file, (err, results) => {
      if (err) {
        return console.error(err);
      }
      files[i].csv = results;
      console.log(results);
      setFiles([...files]);
    });
  };

  return (
    <React.Fragment>
      <Title size={6} align="center">
        {"CSV Migration Tool"}
      </Title>
      <Columns>
        {files.map((file, i) => (
          <Column key={file.name}>
            <Title size={3}>{file.title}</Title>
            <input
              accept="text/csv"
              id={`column-${file.name}`}
              onChange={e => handleFile(i, e)}
              type="file"
            />
            {file.csv && (
              <InputRows name={file.name}>
                {file.csv.meta.fields.map(field => {
                  console.log(field);
                  return (
                    <InputRow htmlFor={`column-${i}-${field}`}>
                      {field}
                    </InputRow>
                  );
                })}
              </InputRows>
            )}
          </Column>
        ))}
      </Columns>
    </React.Fragment>
  );
};

export default App;
