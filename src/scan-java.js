import React, { useState } from 'react';
import javaParser from 'java-parser';

const JavaCodeAnalyzer = () => {
  const [javaCode, setJavaCode] = useState('');
  const [result, setResult] = useState(null);

  const analyzeJavaCode = () => {
    try {
      const parsedResult = javaParser.parse(javaCode);
      setResult(parsedResult);
    } catch (error) {
      console.error('Error analyzing Java code:', error);
      setResult(null);
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="80"
        value={javaCode}
        onChange={(e) => setJavaCode(e.target.value)}
        placeholder="Paste your Java code here"
      />
      <br />
      <button onClick={analyzeJavaCode}>Analyze Java Code</button>

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Analysis Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JavaCodeAnalyzer;
