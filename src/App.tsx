import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import SideBar from "./component/SideBar/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SideBar />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>sadf</p>
    </>
  );
}

export default App;
