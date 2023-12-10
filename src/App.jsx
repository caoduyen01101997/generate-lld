
import './App.css';

import JsonTable from './GenTable';
import Diagram from "./draw-class-diagram"
import JsonTable1 from './genTableParam';
import GenJsonNotsub from './GenJsonNotsub';


const pages = [];

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <div class="bg-blue-500 text-blue p-4">
    <h1 class="text-1xl font-bold">Hello, Tailwind CSS!</h1>
    <p class="mt-2">If you see a blue box with white text, Tailwind CSS is working!</p>
</div>

        <div>from json</div>
        <JsonTable/>
        <div>From json not sub</div>
        <GenJsonNotsub/>
        <div>from url</div>
        <JsonTable1/>
        {/* <Diagram
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
            />     */}
      </header>
    </div>
  );
}

export default App;
