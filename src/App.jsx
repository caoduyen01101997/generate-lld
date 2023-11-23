import React from 'react';
import logo from './logo.svg';
import './App.css';

import JsonTable from './GenTable';
import JavaCodeAnalyzer from "./scan-java"
import Diagram from "./draw-class-diagram"
import ClassEditor from "./use-input-form"
import { BrowserRouter as Router } from "react-router-dom";



const pages = [
  {
    path: "/class",
    diagram: ``,
    title: "Class Diagram",
    path: "/sequence",
    diagram: ``,
    title: "Sequence Diagram",
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JsonTable/>
        <Diagram
              key='class'
              path='class'
              title={"Tạo class diagram"}
              pages={pages}
            />
        <Diagram
              key='sequence'
              path='sequence'
              title={"Tạo Sequence diagram"}
              pages={pages}
            />    
      </header>
    </div>
  );
}

export default App;
