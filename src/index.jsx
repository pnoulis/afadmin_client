import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ENVIRONMENT } from "agent_factory.shared/config.js";
import { Router } from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("app-react-root")).render(
  <React.StrictMode>
    <Router basename={ENVIRONMENT.BASENAME} />
  </React.StrictMode>,
);
