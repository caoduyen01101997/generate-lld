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
      id="jsonData"
      rows="5"
      className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={urlData}
        onChange={(e) => setUrlData(e.target.value)}
      />
      <br />
      <button onClick={parseUrl}>Generate Table</button>
      <button onClick={copyToClipboard}>Copy Data</button>

      {/* Display your table or other components based on tableData */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">STT</th>
            <th className="py-2 px-4 border">Attribute</th>
            <th className="py-2 px-4 border">Data Type</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Required</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.attribute}>
              <td className="py-2 px-4 border">{row.stt}</td>
              <td className="py-2 px-4 border">{row.attribute}</td>
              <td className="py-2 px-4 border">{row.dataType}</td>
              <td className="py-2 px-4 border">
                <input
                  type="text"
                  className="w-full border rounded-md px-2 py-1 focus:outline-none focus:shadow-outline"
                  value={row.description}
                  onChange={(e) => {
                    const updatedData = [...tableData];
                    updatedData.find((item) => item.attribute === row.attribute).description =
                      e.target.value;
                    setTableData(updatedData);
                  }}
                />
              </td>
              <td className="py-2 px-4 border">{row.required}</td>
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
