
import './App.css';

import JsonTable from './GenTable';
import Diagram from "./draw-class-diagram"




const pages = [];

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
