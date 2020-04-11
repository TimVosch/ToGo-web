import { h, render } from "preact";
import "./index.css";
import { Router } from "./router";

const root = document.querySelector("#container");
if (!root) {
  // eslint-disable-next-line
  console.error("Missing #container");
} else {
  render(<Router />, root);
}

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    // eslint-disable-next-line
    if (status === "prepare") console.clear();
  });
}
