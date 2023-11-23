// ClassEditor.js
import React, { useState } from 'react';
import ClassInputForm from './class-input-form';

const ClassEditor = () => {
  const [classes, setClasses] = useState([]);

  const handleClassSubmit = (newClass) => {
    setClasses([...classes, newClass]);
  };

  return (
    <div>
      <h2>Class Editor</h2>
      <ClassInputForm onClassSubmit={handleClassSubmit} />
      <hr />
      <h3>Classes:</h3>
      <ul>
        {classes.map((cls, index) => (
          <li key={index}>
            <strong>Class Name:</strong> {cls.className}
            <br />
            <strong>Properties:</strong> {cls.properties}
            <br />
            <strong>Methods:</strong> {cls.methods}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassEditor;
