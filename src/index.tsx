import { render, h } from "preact";
import "./index.css";
import { App } from "./components/App";

const root = document.querySelector("#container");
if (!root) {
  console.error("Missing #container");
} else {
  render(<App />, root);
}

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === "prepare") console.clear();
  });
}
