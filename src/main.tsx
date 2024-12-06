import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";

// polyfill for(lvh svh dvh)
// @see https://github.com/joppuyo/large-small-dynamic-viewport-units-polyfill
import "large-small-dynamic-viewport-units-polyfill";

import App from "./App";
import "./main.css";

let root: Root | undefined = undefined;

const render = () => {
  const rootContainer = document.getElementById("zero-React19-root");

  if (rootContainer === null) {
    return;
  }

  root = createRoot(rootContainer);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

render();
