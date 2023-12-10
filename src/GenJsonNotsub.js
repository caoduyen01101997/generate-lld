import React, { useState } from 'react';

const GenJsonNotSub = () => {
  const [jsonData, setJsonData] = useState('');
  const [tableData, setTableData] = useState([]);
  const [copiedData, setCopiedData] = useState('');

  const parseJson = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const tableRows = Object.entries(parsedData).map(([key, value], index) => ({
        stt: index + 1,
        attribute: key,
        dataType: typeof value,
        description: '',
        required: 'N',
      }));
      setTableData(tableRows);
    } catch (error) {
      console.error('Invalid JSON format', error);
      setTableData([]);
    }
  };


  const copyToClipboard = () => {
    const tableContent = tableData.map(
      (row) => `${row.attribute}\t${row.dataType}\t${row.description}\t${row.required}\n`
    );

    const clipboardData = tableContent.join('');
    
    // Create a textarea element, set its value to clipboardData, and trigger a copy
    const textarea = document.createElement('textarea');
    textarea.value = clipboardData;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    setCopiedData(clipboardData);
    alert('Table data copied to clipboard!');
  };

  return (
    <div>
      <textarea
        id="jsonData"
        rows="5"
        className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder="Enter JSON here"
      />
      <br />
      <button onClick={parseJson}>Generate Table</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>

      <div className="container mx-auto my-8">
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
    </div>

      {copiedData && (
        <div>
          <h3>Copied Data:</h3>
          <pre>{copiedData}</pre>
        </div>
      )}
    </div>
  );
};

export default GenJsonNotSub;
