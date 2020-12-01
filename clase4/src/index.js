import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactRouter from "./Components/ReactRouter";
import reportWebVitals from "./reportWebVitals";
import Context from "./Components/Context";

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{ color: "#00a1ff", edad: 45, nombre: "Diego A. M." }}
    >
      <ReactRouter />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
