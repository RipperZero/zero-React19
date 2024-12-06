import { FC, useState } from "react";

// import ViteLogo from "/vite.svg";
import "./App.css";
import ReactLogo from "./assets/react.svg";

const TestCompiler: FC = () => {
  console.log("TestCompiler render");

  return <div>TestCompiler</div>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <ReactLogo className="logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={"/vite.svg"} className="logo react" alt="React logo" />
          {/* <ViteLogo className="logo react" /> */}
        </a>
      </div>
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

      <TestCompiler />
    </>
  );
}

export default App;
