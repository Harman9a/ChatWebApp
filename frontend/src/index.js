import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/myStyle.css";

import RouterCom from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterCom />
  </React.StrictMode>
);
