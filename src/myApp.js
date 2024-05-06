
import './App.css';

import JsonTable from './GenTable';
import Diagram from "./draw-class-diagram"
import JsonTable1 from './genTableParam';
import GenJsonNotsub from './GenJsonNotsub';


const pages = [];

function MyApp() {
  return (
    
    <div className="App">
      <header className="App-header">
        <div class="bg-blue-500 text-blue p-4">
            <h1 class="text-1xl font-bold">Tập viết phần mềm!</h1>
            <p class="mt-2">tập trung việc làm tập trung trí tưởng tượng!</p>
        </div>
        <div class="flex flex-wrap">
          <div class="flex-auto">
            <h1 class="text-white">From json</h1>
            <div class="m-10">
              <JsonTable/>
            </div>
          </div>
          <div class="flex-auto">
            <div class="m-10">
              <h1 class="text-white">From json not sub</h1>
              <GenJsonNotsub/>
            </div>
          </div>
        </div>
        <div>
            <div class="m-10">
              <h1 class="text-white">From json not sub</h1>
              <JsonTable1/>
            </div>
          </div>              
      </header>
    </div>
  );
}

export default MyApp;
