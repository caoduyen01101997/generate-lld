// ClassInputForm.js
import React, { useState } from 'react';

const ClassInputForm = ({ onClassSubmit }) => {
  const [className, setClassName] = useState('');
  const [properties, setProperties] = useState([]);
  const [methods, setMethods] = useState([]);

  const addProperty = () => {
    setProperties([...properties, '']);
  };

  const removeProperty = (index) => {
    const newProperties = [...properties];
    newProperties.splice(index, 1);
    setProperties(newProperties);
  };

  const addMethod = () => {
    setMethods([...methods, '']);
  };

  const removeMethod = (index) => {
    const newMethods = [...methods];
    newMethods.splice(index, 1);
    setMethods(newMethods);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClassSubmit({ className, properties, methods });
    // Reset form after submission
    setClassName('');
    setProperties([]);
    setMethods([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class Name:
        <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
      </label>
      <br />
      <label>
        Properties:
        {properties.map((property, index) => (
          <div key={index}>
            <input
              type="text"
              value={property}
              onChange={(e) => {
                const newProperties = [...properties];
                newProperties[index] = e.target.value;
                setProperties(newProperties);
              }}
            />
            <button type="button" onClick={() => removeProperty(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addProperty}>
          Add Property
        </button>
      </label>
      <br />
      <label>
        Methods:
        {methods.map((method, index) => (
          <div key={index}>
            <input
              type="text"
              value={method}
              onChange={(e) => {
                const newMethods = [...methods];
                newMethods[index] = e.target.value;
                setMethods(newMethods);
              }}
            />
            <button type="button" onClick={() => removeMethod(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addMethod}>
          Add Method
        </button>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClassInputForm;
