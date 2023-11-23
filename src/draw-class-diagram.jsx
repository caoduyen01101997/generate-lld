// Diagram.js
import React, { useState } from "react";
import encoder from "plantuml-encoder";

function draw(diagram) {
  return "https://www.plantuml.com/plantuml/svg/" + encoder.encode(diagram);
}

function Diagram({ title, pages }) {
  const [uml, setUml] = useState('');
  const [isGen, setGen] = useState(false);
  const parseJson = () => {
    try {
      setGen(true)
    } catch (error) {
      console.error('Invalid JSON format', error);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <textarea
        rows="5"
        cols="50"
        value={uml}
        onChange={(e) => setUml(e.target.value)}
        placeholder="Enter Uml here"
      />
      <button onClick={parseJson}>Generate UML</button>
      <main>
        {isGen && <img src={draw(uml)} alt={title} />}
      </main>
    </div>
  );
}

export default Diagram;
