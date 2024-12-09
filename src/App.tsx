import { FC, useRef, useState } from "react";

// import ViteLogo from "/vite.svg";
import "./App.css";
import ReactLogo from "./assets/react.svg";

const getRandomColor = () => {
  console.log("====>>>> run getRandomColor");

  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TestCompilerA: FC<{
  printCountB: () => void;
}> = ({ printCountB }) => {
  console.log("TestCompilerA render");

  // use var to ignore react compiler
  // eslint-disable-next-line no-var
  var color = getRandomColor();

  printCountB();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>TestCompilerA → run printCountB(props) every render</div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const TestCompilerB: FC<{
  printCountA: () => void;
}> = ({ printCountA }) => {
  console.log("TestCompilerB render");

  // use var to ignore react compiler
  // eslint-disable-next-line no-var
  var color = getRandomColor();

  printCountA();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>TestCompilerB → run printCountA(props) every render</div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const TestCompilerAandB: FC<{
  printCountA: () => void;
  printCountB: () => void;
}> = ({ printCountA, printCountB }) => {
  console.log("TestCompilerAandB render");

  // use var to ignore react compiler
  // eslint-disable-next-line no-var
  var color = getRandomColor();

  printCountA();
  printCountB();

  return (
    <div className="flex flex-col gap-2 border-2 border-solid border-indigo-600 p-2">
      <div>
        TestCompilerAandB → run printCountA&printCountB(props) every render
      </div>

      <div className="flex gap-4">
        <div style={{ background: color }} className="h-[20px] w-[50px]"></div>
        <div>→ color will change when render</div>
      </div>
    </div>
  );
};

const App: FC = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const objC = { count: 0 };
  const refC = useRef({ count: 0 });

  const printCountA = () => {
    console.log("countA", countA);
  };
  const printCountB = () => {
    console.log("countB", countB);
  };
  const printAllC = () => {
    console.log("objC", objC);
    console.log("refC", refC.current);
  };

  return (
    <div className="m-6 flex flex-col gap-6">
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={"/vite.svg"} className="logo react" alt="React logo" />
          {/* <ViteLogo className="logo react" /> */}
        </a>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <ReactLogo className="logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card flex flex-col gap-2">
        <button
          className="w-[200px]"
          onClick={() => setCountA((pre) => pre + 1)}
        >
          countA(state) is {countA}
        </button>

        <button
          className="w-[200px]"
          onClick={() => setCountB((pre) => pre + 1)}
        >
          countB(state) is {countB}
        </button>

        <button
          className="w-[200px]"
          onClick={() => {
            objC.count += 1;
            refC.current.count += 1;
          }}
        >
          Add all CountC(obj & ref)
        </button>
      </div>

      <div>
        <button className="w-[200px]" onClick={printAllC}>
          printAllC(obj & ref)
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <TestCompilerA printCountB={printCountB} />
        <TestCompilerB printCountA={printCountA} />
        <TestCompilerAandB
          printCountA={printCountA}
          printCountB={printCountB}
        />
      </div>
    </div>
  );
};

export { App };
