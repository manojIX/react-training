import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import stockStore from "./store/data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={stockStore}>
    <App />
  </Provider>,
);
