import React, { useState, useEffect } from "react";
import queryString from "query-string";

const JsonTable1 = () => {
  const [urlData, setUrlData] = useState("");
  const [tableData, setTableData] = useState([]);
  const [copiedData, setCopiedData] = useState(null);

  useEffect(() => {
    parseUrl();
  }, [urlData]);

  const parseUrl = () => {
    try {
      const url = new URL(urlData);
      const queryParams = queryString.parse(url.search);

      const tableRows = Object.keys(queryParams).map((key, index) => ({
        stt: index + 1,
        attribute: key,
        dataType: typeof queryParams[key],
        description: "",
        required: "N",
      }));

      setTableData(tableRows);
    } catch (error) {
      console.error("Invalid URL format", error);
      setTableData([]);
    }
  };

  const copyToClipboard = () => {
    const tableContent = tableData.map(
      (row) => `${row.attribute}\t${row.dataType}\t${row.description}\t${row.required}\n`
    );

    const clipboardData = tableContent.join("");

    // Create a textarea element, set its value to clipboardData, and trigger a copy
    const textarea = document.createElement("textarea");
    textarea.value = clipboardData;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setCopiedData(clipboardData);
    alert("Table data copied to clipboard!");
  };

  return (
    <div>
      <textarea
        rows={10}
        cols={40}
        value={urlData}
        onChange={(e) => setUrlData(e.target.value)}
      />
      <br />
      <button onClick={parseUrl}>Generate Table</button>
      <button onClick={copyToClipboard}>Copy Data</button>

      {/* Display your table or other components based on tableData */}
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Attribute</th>
            <th>DataType</th>
            <th>Description</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.stt}>
              <td>{row.stt}</td>
              <td>{row.attribute}</td>
              <td>{row.dataType}</td>
              <td>{row.description}</td>
              <td>{row.required}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display copied data if available */}
      {copiedData && <pre>{copiedData}</pre>}
    </div>
  );
};

export default JsonTable1;
