import React, { useState } from 'react';

const JsonTable = () => {
  const [jsonData, setJsonData] = useState('');
  const [tableData, setTableData] = useState([]);
  const [copiedData, setCopiedData] = useState('');

  // const parseJson = () => {
  //   try {
  //     const parsedData = JSON.parse(jsonData);
  //     const tableRows = Object.entries(parsedData).map(([key, value], index) => ({
  //       stt: index + 1,
  //       attribute: key,
  //       dataType: typeof value,
  //       description: '',
  //       required: 'N',
  //     }));
  //     setTableData(tableRows);
  //   } catch (error) {
  //     console.error('Invalid JSON format', error);
  //     setTableData([]);
  //   }
  // };
  

  const parseJson = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      // const tableRows = Object.entries(parsedData).map(([key, value], index) => ({
      //   stt: index + 1,
      //   attribute: key,
      //   dataType: typeof value,
      //   description: '',
      //   required: 'N',
      // }));
      var tableRows = []
      parseJson2("",parsedData,tableRows)
      setTableData(tableRows);
    } catch (error) {
      console.error('Invalid JSON format', error);
      setTableData([]);
    }
  };


  const parseJson2 = (prefix, json, tableRows) =>{
    for (var key in json) {
      if(Array.isArray(json[key])){
        json[key] = json[key][0]
      }
      if(typeof json[key] == "object"){
        const prefixTruyenvao =  prefix + key +"."
        const subJson = JSON.parse(JSON.stringify(json[key]));
        parseJson2(prefixTruyenvao, subJson, tableRows)
      }else{
        tableRows.push({
          stt: tableRows.length,
          attribute: prefix + key,
          dataType: typeof json[key],
          description: '',
          required: 'N',
        })
      }
      
  }
  }

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
        rows="5"
        cols="50"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder="Enter JSON here"
      />
      <br />
      <button onClick={parseJson}>Generate Table</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>

      <table border="1">
        <thead>
          <tr>
            <th>STT</th>
            <th>Attribute</th>
            <th>Data Type</th>
            <th>Description</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.attribute}>
              <td>{row.stt}</td>
              <td>{row.attribute}</td>
              <td>{row.dataType}</td>
              <td>
                <input
                  type="text"
                  value={row.description}
                  onChange={(e) => {
                    const updatedData = [...tableData];
                    updatedData.find((item) => item.attribute === row.attribute).description =
                      e.target.value;
                    setTableData(updatedData);
                  }}
                />
              </td>
              <td>{row.required}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {copiedData && (
        <div>
          <h3>Copied Data:</h3>
          <pre>{copiedData}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonTable;
