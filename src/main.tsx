import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <RouteSwitch />
    </HashRouter>
  </React.StrictMode>
);
