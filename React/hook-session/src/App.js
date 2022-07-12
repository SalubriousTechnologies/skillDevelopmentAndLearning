/** @format */

import "./App.css";
import { Parent } from "./components/ReactMemo/Parent";
import { ParentOne } from "./components/ReactUseCallback/ParentOne";
import { ParentTwo } from "./components/ReactUseMemo/ParentTwo";

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Parent />
      {/* <ParentOne /> */}
      {/* <ParentTwo /> */}
    </div>
  );
}

export default App;
