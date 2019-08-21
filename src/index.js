import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [isSelect, setIsSelect] = useState("");

  return (
    <div className="App">
      Count {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Add +1</button>
      <br />
      <br />
      You select {isSelect} <br />
      <select value={isSelect} onChange={e => setIsSelect(e.target.value)}>
        <option value="">--Select Name--</option>
        <option value="salehe">Salehe</option>
        <option value="Mwanga">Mwanga</option>
      </select>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
