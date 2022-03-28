import React, { useState } from "react";

import * as XLSX from "xlsx";

function Uploadxl() {
  // update the state
  const [Sheet1, setItems] = useState([]);
  // read excel file
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      //read the file  using file reader
      const fileReader = new FileReader();
      //start reading the contents of the file
      fileReader.readAsArrayBuffer(file);
      //returns the file contents

      fileReader.onload = (e) => {
        //  /* Parse data */
        const bufferArray = e.target.result;
        //read the XLSX file using the buffer
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  return (
    <div>
      <input
        type="file"
        //excepts only xlsx and xlm files

        accept="xlsx,xlm"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table className="table container">
        <thead>
          <tr>
            {/* defines column in the excel table */}
            {/* <th scope="col">CandidateName</th> */}
            <th scope="col">Email</th>
            <th scope="col">ProfileShortlisted</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the object  */}
          {Sheet1.map((d) => (
            <tr key={d.CandidateName}>
              {/* <th>{d.CandidateID}</th> */}
              <td>{d.Email}</td>
              <td>{d.ProfileShortlisted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Uploadxl;
